import type { NextPage } from 'next';
import Navbar from '@src/components/common/Navbar';

const total = 300.0;

const daoDetails = {
  name: 'ENS',
  symbol: 'ENS',
  about: 'About ENS Here About ENS Here About ENS Here',
  link: 'https://ens.dominon.network',
};

const amounts = [
  { label: 'Claimable', amount: 100.0, color: '#FFE55C' },
  { label: 'Unvested', amount: 200.0, color: '#474747' },
  { label: 'Total', amount: total, color: '#FF8F5C' },
];

const Details: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8 mb-2">
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
              <a className="text-sm underline">{daoDetails.link}</a>
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
            <p className="mb-6">1/3 Round</p>
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
          <div className="bg-[#191919] p-8 rounded-lg">
            <h5 className="text-base mb-4">Uncoming Vest Events</h5>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Jun 1, 2024</td>
                  </tr>
                  <tr>
                    <td>Jun 1, 2024</td>
                  </tr>
                  <tr>
                    <td>Jun 1, 2024</td>
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
