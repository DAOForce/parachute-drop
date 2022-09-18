import { KeplrWallet } from '@src/types';
import networkInfo from '@src/utils/chainInfo';
const EVMOS_MAINNET_INFO = networkInfo['evmos_9001-1'];

export type walletIdType = 'metamask' | 'evmos';

export const isLogout = () => {
  return (
    localStorage.getItem('ownerAddress') === '' ||
    localStorage.getItem('ownerAddress') === undefined
  );
};

export const communicateWithWallet = async (
  walletId: walletIdType,
): Promise<string | undefined> => {
  console.log('walletId', walletId);

  if (walletId === 'metamask') {
    const address = await getMetamaskAddress();

    return address;
  }

  const address = await getKeplrAddress();

  return address;
};

export const getMetamaskAddress = async () => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      alert('Get MetaMask!');

      return;
    }

    const accounts = (await ethereum.request({ method: 'eth_requestAccounts' })) as Array<string>;

    console.log('Connected', accounts[0]);
    localStorage.setItem('ownerAddress', accounts[0]);

    return accounts[0];
  } catch (error) {
    console.log(error);
  }
};

export const getKeplrAddress = async () => {
  try {
    if (!window.getOfflineSigner || !window.keplr) {
      alert('Please install keplr extension');

      return;
    }

    if (window.keplr.experimentalSuggestChain) {
      try {
        await window.keplr.experimentalSuggestChain(EVMOS_MAINNET_INFO);
      } catch {
        alert('Failed to suggest the chain');
      }
    }

    await window.keplr.enable(EVMOS_MAINNET_INFO.chainId);
    const offlineSigner = window.keplr.getOfflineSigner(EVMOS_MAINNET_INFO.chainId);
    const accounts = (await offlineSigner.getAccounts()) as Array<KeplrWallet>;
    const accountAddr = accounts[0].address;

    localStorage.setItem('ownerAddress', accountAddr);

    return accountAddr;
  } catch (error) {
    console.log(error);
  }
};
