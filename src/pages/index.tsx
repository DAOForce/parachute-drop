import TestEvmos from '@src/components/Main/TestEvmos';
import { getKeplrAddress, getMetamaskAddress } from '@src/utils/connectWallet';
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

const Home: NextPage = () => {
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
    <main>
      <Head>
        <title>Shooting Star</title>
        <meta name="description" content="Shooting Star" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
      </button>
      <TestEvmos ownerAddress={ownerAddress} />
    </main>
  );
};

export default Home;
