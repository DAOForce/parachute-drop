import dayjs from 'dayjs';
import React from 'react';
import { ClipLoader } from 'react-spinners';
import CommonError from '../common/ComomonError';
import ErrorBoundary from '../common/ErrorBoundary';
import SSRSafeSuspense from '../common/SSRSafeSuspense';

{
  /* claim 대상자의 경우 airdrop info */
}
const AirdropInfo = () => {
  return (
    <ErrorBoundary
      renderFallback={({ error, reset }) => <CommonError error={error} reset={reset} />}
    >
      {/*  TODO skeleton 추가 */}
      <SSRSafeSuspense fallback={<ClipLoader size={50} color={'#ffffff'} />}>
        <Resolved />
      </SSRSafeSuspense>
    </ErrorBoundary>
  );
};

function Resolved() {
  /**
   * case 1 : owner address === dao space owner address && airdrop 컨트랙트 deploy X
   * case 2 : claim 대상자
   * case 3 : claim 비대상자
   */
  const airdrop_timestamps = [1651354641, 1653946641, 1656625041];
  const airdrop_round_airdrop_amounts = 4000;

  const date1 = dayjs(airdrop_timestamps[1]);
  const date2 = dayjs(airdrop_timestamps[0]);
  const airBalance = 10000;
  const total = 100000;

  const airdropDetails = [
    { label: 'Start Date', value: airdrop_timestamps[0] },
    { label: 'Rounds', value: airdrop_timestamps.length },
    { label: 'Interval', value: date1.diff(date2, 'day') + ' Days' },
  ];
  return (
    <>
      <div className="pb-8">
        <div className="flex items-center">
          <div className="grow">
            <h2 className="font-bold text-lg mt-8 mb-2">Airdrop</h2>
          </div>
          {/* {airWhiteList?.includes(ownerAddress) && (
              <div className="flex-none">
                <div className="flex items-center">
                  <div>
                    <span>100.00</span>
                    <span> ENS</span>
                  </div> *
                  <div>
                    <NextBtn>Claim</NextBtn>
                  </div>
                </div>
              </div>
            )} */}
        </div>

        <div className="bg-[#191919] p-8 mb-3 rounded-lg">
          {/* {amounts.map((amount, index) => {
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
            })} */}
          <>
            <div className="mb-4">
              <span className="opacity-50 w-40 inline-block">Total Amounts</span>
              <span>{airBalance}</span>
            </div>
            <div
              className="rounded-full"
              style={{
                backgroundColor: '#FFE55C',
                height: '16px',
                width: `${(airBalance / total) * 100}%`,
              }}
            />
          </>
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
                {airdrop_timestamps?.map((airdrop, index) => (
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
    </>
  );
}

export default AirdropInfo;
