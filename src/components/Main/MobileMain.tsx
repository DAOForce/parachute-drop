import Add from '@src/assets/Icon/add.svg';
import Navbar from '@src/components/common/Navbar';
import CardSpace from '@src/components/main/CardSpace';
import CardSpcaeList from '@src/components/Main/CardSpcaeList';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
const MobileMain: NextPage = () => {
  const router = useRouter();

  const handleClick = async () => {
    await router.push('/create_space');
  };

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
