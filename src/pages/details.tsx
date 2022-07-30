import type { NextPage } from 'next';
import Navbar from '@src/components/common/Navbar';
import { useEffect, useState } from 'react';

const daoDetails = {
  name: 'ENS',
  symbol: 'ENS',
  about: 'About ENS Here About ENS Here About ENS Here',
  link: 'https://ens.dominon.network',
};

const total = 300.0;

const amounts = [
  { label: 'Claimable', amount: 100.0, color: '#FFE55C' },
  { label: 'Unvested', amount: 200.0, color: '#474747' },
  { label: 'Total', amount: total, color: '#FF8F5C' },
];

const Details: NextPage = () => {
  const [isLogin, setIsLogin] = useState<boolean | undefined | null>();

  useEffect(() => {
    localStorage.getItem('ownerAddress') ? setIsLogin(true) : setIsLogin(false);
  }, []);

  const [ownerAddress, setOwnerAddress] = useState<string | undefined | null>('');

  useEffect(() => {
    setOwnerAddress(localStorage.getItem('ownerAddress'));
  }, [ownerAddress]);

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
            <div className="flex items-center mb-1">
              <p className="font-bold text-2xl mr-1">{daoDetails.name}</p>
              <p className="text-sm opacity-50">
                $<span>{daoDetails.symbol}</span>
              </p>
            </div>
            <p className="mb-2">{daoDetails.about}</p>
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

          {ownerAddress ? (
            <div className="bg-[#191919] p-8 mb-3 rounded-lg">
              <p className="mb-6 font-bold ">My airdrop</p>
              {amounts.map((amount, index) => {
                return (
                  <>
                    <div className="text-sm mt-2 mb-2">
                      <span className="opacity-50 mr-1">{amount.label}</span>
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
          ) : null}

          <div className="bg-[#191919] p-8 rounded-lg">
            <p className="mb-6 font-bold ">1/3 Round</p>
            <h5 className="text-base mb-4">Uncoming Vest Events</h5>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Round</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Jun 1, 2024</td>
                    <td>1 Round</td>
                  </tr>
                  <tr>
                    <td>Jun 1, 2024</td>
                    <td>2 Round</td>
                  </tr>
                  <tr>
                    <td>Jun 1, 2024</td>
                    <td>3 Round</td>
                  </tr>
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
