import { AIRDROP_TITLE } from '@src/constants';
import { useRouter } from 'next/router';
import React from 'react';
import { ClipLoader } from 'react-spinners';

import CommonError from '../common/ComomonError';
import ErrorBoundary from '../common/ErrorBoundary';
import NextBtn from '../common/NextBtn';
import SSRSafeSuspense from '../common/SSRSafeSuspense';

const AirdropAdmin = () => {
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
  // @TODO 이 여부 판단하는 utils 필요
  const isDeployAirdrop = false;
  const router = useRouter();

  const handleClick = () => {
    router.push('/new_airdrop');
  };

  return (
    <section>
      <h2 className="mt-[46.5px] mb-[46.5px] text-[24px] text-white font-['Inter'] font-bold">
        {AIRDROP_TITLE.AIRDROP_SETTING}
      </h2>
      {isDeployAirdrop ? (
        <article className="flex flex-col w-[100%] h-[335px] bg-[#ffffff1a] rounded-[20px] p-[48px]">
          <h3 className="mb-[24px] text-[25px] text-white font-['Inter'] font-bold">
            Activated airdrop info
          </h3>
          {/* @TODO 순회하면서 airdrop info 정보 출력 */}
        </article>
      ) : (
        <article className="flex flex-col justify-center items-center w-[100%] h-[335px] bg-[#ffffff1a] rounded-[20px]">
          <h3 className="mb-[24px] text-[25px] text-white font-['Inter'] font-bold">
            No active airdrop
          </h3>
          <NextBtn onClick={handleClick}>Start New Airdrop</NextBtn>
        </article>
      )}
    </section>
  );
}

export default AirdropAdmin;
