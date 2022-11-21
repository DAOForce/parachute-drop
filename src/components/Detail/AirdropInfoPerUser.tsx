import { getAirdropDetailData } from '@src/utils/getAirdropDetailData';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';

import CommonError from '../common/ComomonError';
import ErrorBoundary from '../common/ErrorBoundary';
import NextBtn from '../common/NextBtn';
import SSRSafeSuspense from '../common/SSRSafeSuspense';

// userAddress가 없으면 이전페이지에서 지갑 연결 안내 먼저
export interface AirdropInfoPerUserProps {
  airdropTokenAddress: RouterQuery;
  governanceToken: RouterQuery;
  tokenSupply: RouterQuery;
  userAddress?: any;
  tokenSymbol?: RouterQuery;
}

const AirdropInfoPerUser = ({
  airdropTokenAddress,
  governanceToken,
  tokenSupply,
  userAddress,
  tokenSymbol,
}: AirdropInfoPerUserProps) => {
  return (
    <ErrorBoundary
      renderFallback={({ error, reset }) => <CommonError error={error} reset={reset} />}
    >
      {/*  TODO skeleton 추가 */}
      <SSRSafeSuspense fallback={<ClipLoader size={50} color={'#ffffff'} />}>
        <Resolved
          airdropTokenAddress={airdropTokenAddress}
          governanceToken={governanceToken}
          tokenSupply={tokenSupply}
          userAddress={userAddress}
          tokenSymbol={tokenSymbol}
        />
      </SSRSafeSuspense>
    </ErrorBoundary>
  );
};

function Resolved({
  airdropTokenAddress,
  governanceToken,
  tokenSupply,
  userAddress,
  tokenSymbol,
}: AirdropInfoPerUserProps) {
  const { data } = useQuery(
    ['airdrop_detail'],
    () => getAirdropDetailData({ airdropTokenAddress, governanceToken, tokenSupply, userAddress }),
    {
      suspense: true,
    },
  );

  const router = useRouter();
  const airdropTimestamps = data?.airdropTimestamps;
  const airdropWhiteList = data?.airdropWhiteList;
  const airdropAmountsPerRound = data?.airdropAmountsPerRound / airdropWhiteList?.length;
  const isWhiteList = data?.isWhiteList;
  const total = tokenSupply ? parseInt(tokenSupply?.toString()) : 10000;
  const airdropDetails = [
    { label: 'Start Date', value: airdropTimestamps[0] },
    { label: 'Rounds', value: airdropTimestamps.length },
    // { label: 'Interval', value: date1.diff(date2, 'day') + ' Days' },
  ];

  useEffect(() => {
    console.log('>>data', data);
  }, []);

  return (
    <>
      <div className="pb-8">
        <div className="flex items-center">
          <div className="grow">
            <h2 className="font-bold text-2xl mt-8 mb-8">My Airdrop</h2>
          </div>
          <div className="flex-none">
            <div className="flex items-center">
              <h2 className="font-bold text-2xl mt-8 mb-8 mr-4">
                {airdropAmountsPerRound} {tokenSymbol}
              </h2>
              <div>
                <NextBtn
                  className="max-w-[100px] max-h-8"
                  onClick={() => {
                    router.push({
                      pathname: '/claim_token',
                      query: {
                        balance: airdropAmountsPerRound,
                        tokenSymbol,
                      },
                    });
                  }}
                  isAbled={isWhiteList}
                >
                  Claim
                </NextBtn>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#191919] p-8 mb-3 rounded-lg">
          <>
            <div className="mb-4">
              <span className="opacity-50 w-40 inline-block">Total Amounts</span>
              <span>{airdropAmountsPerRound}</span>
            </div>
            <div
              className="rounded-full"
              style={{
                backgroundColor: '#FFE55C',
                height: '16px',
                width: `${(airdropAmountsPerRound / total) * 100}%`,
              }}
            />
          </>
        </div>

        <div className="bg-[#191919] p-8 rounded-lg">
          {airdropDetails.map((airdrop) => (
            <div className="mb-4" key={airdrop.value}>
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
                {airdropTimestamps?.map((airdrop: any, index: number) => (
                  <tr key={index}>
                    <td>{airdrop}</td>
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
export default AirdropInfoPerUser;
