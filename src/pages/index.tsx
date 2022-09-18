import Add from '@src/assets/Icon/add.svg';
import Navbar from '@src/components/common/Navbar';
import CardSpace from '@src/components/main/CardSpace';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const CardContents = [
  {
    image: 'https://i.pravatar.cc/300',
    DAOName: 'Telescope DAO',
    intro: 'Telescope DAO is changing the world',
    ticker: 'TELE',
  },
  {
    image: 'https://i.pravatar.cc/300',
    DAOName: 'Telescope DAO',
    intro: 'Telescope DAO is changing the world',
    ticker: 'TELE',
  },
  {
    image: 'https://i.pravatar.cc/300',
    DAOName: 'Telescope DAO',
    intro: 'Telescope DAO is changing the world',
    ticker: 'TELE',
  },
  {
    image: 'https://i.pravatar.cc/300',
    DAOName: 'Telescope DAO',
    intro: 'Telescope DAO is changing the world',
    ticker: 'TELE',
  },
];

const Home: NextPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/create_space');
  };

  return (
    <>
      <Head>
        <title>Parachute</title>
        <meta name="description" content="Shooting Star" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container mx-auto">
        <div className="flex mt-16 mb-4">
          <div className="grow">
            <p className="text-2xl font-bold ">Spaces</p>
          </div>
          <div className="flex-none">
            <button className="link link-hover " onClick={() => handleClick()}>
              <div className="flex items-center">
                <div>
                  <Add />
                </div>
                <div className="text-sm">Create Space</div>
              </div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 pb-8">
          {CardContents.map((card, index) => (
            <CardSpace
              key={card.id}
              index={index}
              ticker={card.ticker}
              intro={card.intro}
              DAOName={card.DAOName}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
