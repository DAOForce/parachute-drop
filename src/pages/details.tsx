import type { NextPage } from 'next';
import Navbar from '@src/components/common/Navbar';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const daoDetails = {
  name: 'Telescope',
  ticker: 'TELE',
  DAOName: 'Telescope DAO',
  intro: 'Telescope DAO is changing the world',
  image: 'https://m.media-amazon.com/images/I/41ViEgmMrOL._SY355_.jpg',
  link: 'https://telescope.dao',
};

const airdrop_timestamps = [1651354641, 1653946641, 1656625041];
const airdrop_round_airdrop_amounts = 4000;

const date1 = dayjs(airdrop_timestamps[1]);
const date2 = dayjs(airdrop_timestamps[0]);

const airdropDetails = [
  { label: 'Start Date', value: airdrop_timestamps[0] },
  { label: 'Rounds', value: airdrop_timestamps.length },
  { label: 'Interval', value: date1.diff(date2, 'day') + ' Days' },
];

const total = airdrop_timestamps.length * airdrop_round_airdrop_amounts;

const amounts = [{ label: 'Total Amounts', amount: total, color: '#FFE55C' }];

const Details: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-12 mb-2">
        {/* 프로필 영역 */}
        <div className="flex items-center">
          <div className="avatar mr-5">
            <div className="w-24 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div>
            <div className="flex items-center mb-2">
              <p className="font-bold text-2xl mr-2">{daoDetails.DAOName}</p>
              <p className="text-sm opacity-50">
                $<span>{daoDetails.ticker}</span>
              </p>
            </div>
            <p className="mb-2">{daoDetails.intro}</p>
            <div>
              <a className="text-sm link link-hover " href={daoDetails.link}>
                {daoDetails.link.split('//')[1]}
              </a>
            </div>
          </div>
        </div>
        {/* 에어드롭 영역 */}
        <div className="pb-8">
          <div className="flex items-center">
            <div className="grow">
              <h2 className="font-bold text-lg mt-8 mb-2">Airdrop</h2>
            </div>
            {/* <div className="flex-none">
            <div className="flex items-center">
              <div>
                <span>100.00</span>
                <span> ENS</span>
              </div>
              <div>
                <button className="btn btn-primary">Claim</button>
              </div>
            </div>
          </div> */}
          </div>

          <div className="bg-[#191919] p-8 mb-3 rounded-lg">
            {amounts.map((amount, index) => {
              return (
                <>
                  <div className="mb-4">
                    <span className="opacity-50 w-40 inline-block">{amount.label}</span>
                    <span>{amount.amount}</span>
                  </div>
                  <div
                    className="rounded-full"
                    style={{
                      backgroundColor: amount.color,
                      height: '16px',
                      width: `${(amount.amount / total) * 100}%`,
                    }}
                  />
                </>
              );
            })}
          </div>

          <div className="bg-[#191919] p-8 rounded-lg">
            {airdropDetails.map((airdrop, index) => (
              <div className="mb-4">
                <span className="opacity-50 w-40 inline-block">{airdrop.label}</span>
                <span>{airdrop.value}</span>
              </div>
            ))}
            <h5 className="text-base mb-4 mt-8 ">Vest Events</h5>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Round</th>
                  </tr>
                </thead>
                <tbody>
                  {airdrop_timestamps.map((airdrop, index) => (
                    <tr>
                      <td>{dayjs(airdrop).format('DD/MM/YYYY')}</td>
                      <td>{index + 1} Round</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
