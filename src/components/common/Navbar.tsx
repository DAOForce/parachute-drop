import TestEvmos from '@src/components/main/TestEvmos';
import { getKeplrAddress, getMetamaskAddress } from '@src/utils/connectWallet';
import React, { useEffect, useState } from 'react';

function Navbar() {
  const [ownerAddress, setOwnerAddress] = useState<string | undefined>('');
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
    <div className="navbar dark:bg-slate-800">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Parachute</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>Spaces</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
        </ul>
        <button
          className="btn btn-outline btn-success"
          onClick={handleWalletClick}
          type="button"
          id="metamask"
        >
          Connect Metamask Wallet
        </button>
        <button
          className="btn btn-outline btn-primary"
          onClick={handleWalletClick}
          type="button"
          id="keplr"
        >
          Connect Keplr Wallet
        </button>{' '}
        <TestEvmos ownerAddress={ownerAddress} />
      </div>
    </div>
  );
}

export default Navbar;
