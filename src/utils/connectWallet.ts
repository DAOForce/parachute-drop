export const connectMetamask = async () => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      alert('Get MetaMask!');

      return;
    }
    const accounts = (await ethereum.request({ method: 'eth_requestAccounts' })) as Array<string>;

    console.log('Connected', accounts[0]);

    return accounts;
  } catch (error) {
    console.log(error);
  }
};

export const connectKeplr = async () => {
  try {
    const { keplr } = window;

    if (!keplr) {
      alert('Get keplr!');

      return;
    }
    const chainId = 'cosmoshub-4';

    await keplr.enable(chainId);
    const offlineSigner = keplr.getOfflineSigner(chainId);
    const accounts = await offlineSigner.getAccounts();

    return accounts;
  } catch (error) {
    console.log(error);
  }
};
