import TestEvmos from '@src/components/main/TestEvmos';
import { getKeplrAddress, getMetamaskAddress } from '@src/utils/connectWallet';
import React, { useEffect, useState } from 'react';
import Logo from '@src/assets/logo.svg';
import { useRouter } from 'next/router';

function Navbar() {
  const router = useRouter();
  const [ownerAddress, setOwnerAddress] = useState<string | undefined | null>('');

  useEffect(() => {
    setOwnerAddress(localStorage.getItem('ownerAddress'));
  }, [ownerAddress]);

  const handleClick = () => {
    router.push('/');
  };

  const ownerAddressShort = ownerAddress?.substring(0, 5);
  const ownerAddressShort2 = ownerAddress?.substring(ownerAddress.length - 5, ownerAddress.length);

  const handleWalletClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    switch (e.currentTarget.id) {
      case 'metamask':
        const metamaskAccounts = await getMetamaskAddress();
        setOwnerAddress(metamaskAccounts);

        // setOwnerAddress(await getMetamaskAddress());
        break;
      case 'keplr':
        const keplrAccounts = await getKeplrAddress();
        setOwnerAddress(keplrAccounts?.address);
        // console.log(await getKeplrAddress());
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
        <div className="btn btn-sm">
          {ownerAddressShort}...{ownerAddressShort2}
        </div>
      ) : (
        <div className="flex-none">
          <label for="my-modal-4" className="btn modal-button">
            Connect Wallet
          </label>

          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label for="my-modal-4" class="modal cursor-pointer">
            <label className="modal-box relative" for="">
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
