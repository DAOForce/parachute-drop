import React from 'react';

import CurrentRound from './CurrentRound';
import DumpingChart from './DumpingChart';
const data = [
  {
    date: 'Jul 2022',
    amt: 2800,
  },
  {
    date: 'Aug 2022',
    amt: 2500,
  },
  {
    date: 'Sep 2022',

    amt: 2100,
  },
  {
    date: 'Oct 2022',
    amt: 2400,
  },
  {
    date: 'Nov 2022',
    amt: 2210,
  },
  {
    date: 'Dec 2022',
    amt: 2290,
  },
  {
    date: 'Jan 2023',
    amt: 2000,
  },
];

function Dashboard() {
  const CURRENT_ROUND = 'Current Round';
  const AIRDROP_MACRO = 'Airdrop Macro';

  return (
    <main className="flex flex-col justify-center w-full pt-[37px]">
      <h1 className="text-[24px] font-extrabold mb-[12px]">{CURRENT_ROUND}</h1>
      <CurrentRound />
      <h1 className="text-[24px] font-extrabold mb-[12px]">{AIRDROP_MACRO}</h1>
      <DumpingChart data={data} />
    </main>
  );
}

export default Dashboard;
