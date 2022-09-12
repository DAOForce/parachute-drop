import Logo from '@src/assets/logo.svg';
// import TestEvmos from '@src/components/main/TestEvmos';
import { getKeplrAddress, getMetamaskAddress } from '@src/utils/connectWallet';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { logOutMetamask } from '@src/utils/logoutWallet';
import { MetaMaskInpageProvider } from '@metamask/providers';

const setAccountListener = (provider: MetaMaskInpageProvider) => {
  provider.on('accountsChanged', () => window.location.reload());
};

function Navbar() {
  const router = useRouter();
  const [ownerAddress, setOwnerAddress] = useState<string | undefined | null>('');

  useEffect(() => {
    setOwnerAddress(localStorage.getItem('ownerAddress'));
    setAccountListener(window.ethereum);
    document.addEventListener('resetAccount', () => window.location.reload());
  }, [ownerAddress]);

  const handleClick = () => {
    router.push('/');
  };

  const ownerAddressShort = typeof ownerAddress === 'string' ? ownerAddress.substring(0, 5) : '';
  const ownerAddressShort2 =
    typeof ownerAddress === 'string'
      ? ownerAddress.substring(ownerAddress.length - 5, ownerAddress.length)
      : '';

  const handleWalletClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    switch (e.currentTarget.id) {
      case 'metamask':
        if (ownerAddress === '') {
          const metamaskAccounts = await getMetamaskAddress();
          // @ts-ignore
          setOwnerAddress(metamaskAccounts);
          break;
        }
        await logOutMetamask();
        break;
      case 'keplr':
        if (ownerAddress === '') {
          const keplrAccounts = await getKeplrAddress();
          setOwnerAddress(keplrAccounts?.address);
        }
        break;
      default:
        break;
    }
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
