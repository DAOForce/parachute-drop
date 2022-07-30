import Add from '@src/assets/Icon/add.svg';
import Navbar from '@src/components/common/Navbar';
import CardSpace from '@src/components/main/CardSpace';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const CardContents = [
  {
    profile: 'https://i.pravatar.cc/300',
    name: 'ENS',
    number: 100,
    id: '1',
  },
  {
    profile: 'https://i.pravatar.cc/300',
    name: 'ENS',
    number: 100,
    id: '2',
  },
  {
    profile: 'https://i.pravatar.cc/300',
    name: 'ENS',
    number: 100,
    id: '3',
  },
  {
    profile: 'https://i.pravatar.cc/300',
    name: 'ENS',
    number: 100,
    id: '4',
  },
  {
    profile: 'https://i.pravatar.cc/300',
    name: 'ENS',
    number: 100,
    id: '5',
  },
  {
    profile: 'https://i.pravatar.cc/300',
    name: 'ENS',
    number: 100,
    id: '6',
  },
];

const Home: NextPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/createspace/spacedetail');
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
              id={card.id}
              profile={card.profile}
              name={card.name}
              number={card.number}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
