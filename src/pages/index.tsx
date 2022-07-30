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

  return (
    <>
      <Head>
        <title>Parachute</title>
        <meta name="description" content="Shooting Star" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container mx-auto">
        <div className="flex mt-8 mb-4">
          <div className="grow">
            <p className="text-2xl font-bold ">Spaces</p>
          </div>
          <div className="flex-none">
            <button className="btn gap-2 btn-outline btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Create a Space
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 pb-8">
          {CardContents.map((card, index) => (
            <CardSpace key={index} profile={card.profile} name={card.name} number={card.number} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
