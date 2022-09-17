import { KeplrWallet } from '@src/types';
import networkInfo from '@src/utils/chainInfo';
const EVMOS_MAINNET_INFO = networkInfo['evmos_9001-1'];

export type walletIdType = 'metamask' | 'evmos';

const isLogout = (localStorage: Storage) => {
  return localStorage.getItem('ownerAddress') !== '';
};

export const resetWallet = () => {
  const resetEvent = new Event('resetAccount');

  localStorage.setItem('ownerAddress', '');
  document.dispatchEvent(resetEvent);
  console.log('DISCONNECTED');
};

export const communicateWithWallet = async (walletId: walletIdType): Promise<void> => {
  console.log('walletId', walletId);
  const connectEvent = new Event('connectAccount');

  if (isLogout(localStorage)) {
    return resetWallet();
  }

  if (walletId === 'metamask') {
    await getMetamaskAddress();
    document.dispatchEvent(connectEvent);

    return;
  }

  await getKeplrAddress();
  document.dispatchEvent(connectEvent);

  return;
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
