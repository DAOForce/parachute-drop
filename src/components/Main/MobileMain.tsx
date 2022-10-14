import Navbar from '@src/components/common/Navbar';
import type { NextPage } from 'next';
import Head from 'next/head';

const MobileMain: NextPage = () => {
  return (
    <>
      <Head>
        <title>Parachute Drop</title>
        <meta name="description" content="Parachute Drop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="flex justify-center items-center w-screen h-screen">
        <div className="text-center text-xl">
          We don&rsquo;t support the mobile environment yet. <br />
          Please use PC ! {':)'}
        </div>
      </div>
    </>
  );
};

export default MobileMain;
