import Add from '@src/assets/Icon/add.svg';
import Navbar from '@src/components/common/Navbar';
import CardSpcaeList from '@src/components/Main/CardSpcaeList';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
const Home: NextPage = () => {
  const router = useRouter();

  const handleClick = async () => {
    await router.push('/create_space');
  };

  return (
    <>
      <Head>
        <title>Parachute</title>
        <meta name="description" content="Shooting Star" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <div className="container mx-auto">
        <div className="flex mt-16 mb-4">
          <div className="grow"></div>
        </div>

        <div className="grid grid-cols-4 gap-4 pb-8">
          <CardSpcaeList />
        </div>
      </div>
    </>
  );
};

export default Home;
