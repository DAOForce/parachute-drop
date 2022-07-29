import { Window as KeplrWindow } from '@keplr-wallet/types';
import { MetaMaskInpageProvider } from '@metamask/providers';

declare global {
  interface Window extends KeplrWindow {
    ethereum: MetaMaskInpageProvider;
  }
}
