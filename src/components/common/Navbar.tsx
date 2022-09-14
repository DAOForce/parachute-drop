import { MetaMaskInpageProvider } from '@metamask/providers';
import Logo from '@src/assets/logo.svg';
// import TestEvmos from '@src/components/main/TestEvmos';
import {
  communicateWithWallet,
  getKeplrAddress,
  getMetamaskAddress,
  walletIdType,
} from '@src/utils/connectWallet';
import { resetAccount } from '@src/utils/resetAccount';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const setAccountListener = (provider: MetaMaskInpageProvider) => {
  provider?.on('accountsChanged', async () => await communicateWithWallet('metamask'));

  window.addEventListener('keplr_keystorechange', async () => await communicateWithWallet('evmos'));

  document.addEventListener('connectAccount', () => window.location.reload());
  document.addEventListener('resetAccount', () => window.location.reload());
};

function Navbar() {
  const router = useRouter();
  const [ownerAddress, setOwnerAddress] = useState<string | undefined | null>('');

  useEffect(() => {
    setOwnerAddress(localStorage.getItem('ownerAddress'));
    setAccountListener(window?.ethereum);
  }, [ownerAddress]);

  const handleClick = () => {
    router.push('/');
  };

  const ownerAddressShort = ownerAddress?.substring(0, 5);
  const ownerAddressShort2 = ownerAddress?.substring(ownerAddress.length - 5, ownerAddress.length);

  const handleWalletClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const targetId = e.currentTarget.id as walletIdType;

    await communicateWithWallet(targetId);
  };

  return (
    <div className="navbar bg-[#000]">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" onClick={() => handleClick()}>
          <Logo />
        </a>
      </div>

      {ownerAddress ? (
        <>
          <div className="btn btn-sm">
            {ownerAddressShort}...{ownerAddressShort2}
          </div>
          <div className="btn btn-sm">
            <button onClick={handleWalletClick} type="button" id="metamask">
              Disconnect
            </button>
          </div>
        </>
      ) : (
        <div className="flex-none">
          <label htmlFor="my-modal-4" className="btn modal-button">
            Connect Wallet
          </label>

          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative" htmlFor="">
              <h3 className="font-bold text-lg text-center">Connect Wallet</h3>
              <p className="py-4 text-center">Choose wallet to connect to the blockchain.</p>
              <div className="grid gap-4">
                <button
                  className="btn btn-block"
                  onClick={handleWalletClick}
                  type="button"
                  id="metamask"
                >
                  Metamask Wallet
                </button>

                <button
                  className="btn btn-block "
                  onClick={handleWalletClick}
                  type="button"
                  id="keplr"
                >
                  Keplr Wallet
                </button>
              </div>
            </label>
          </label>

          {/* <TestEvmos ownerAddress={ownerAddress} /> */}
        </div>
      )}
    </div>
  );
}

export default Navbar;
