import { connectKeplr, connectMetamask } from '@src/utils/connectWallet';
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect } from 'react';

const Home: NextPage = () => {
  const handleWalletClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    switch (e.currentTarget.id) {
      case 'metamask':
        console.log(await connectMetamask());
        break;
      case 'keplr':
        console.log(await connectKeplr());
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
    </main>
  );
};

export default Home;
