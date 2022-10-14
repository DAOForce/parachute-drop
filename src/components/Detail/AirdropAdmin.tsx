import { AIRDROP_TITLE } from '@src/constants';
import { useRouter } from 'next/router';
import React from 'react';
import { ClipLoader } from 'react-spinners';

import CommonError from '../common/ComomonError';
import ErrorBoundary from '../common/ErrorBoundary';
import NextBtn from '../common/NextBtn';
import SSRSafeSuspense from '../common/SSRSafeSuspense';

const AirdropAdmin = (daoDetails: any) => {
  console.log(' DAO DETAILS >>>>>>>>>>>>>>>>>>>>>>>>> ', daoDetails);

  return (
    <ErrorBoundary
      renderFallback={({ error, reset }) => <CommonError error={error} reset={reset} />}
    >
      {/*  TODO skeleton 추가 */}
      <SSRSafeSuspense fallback={<ClipLoader size={50} color={'#ffffff'} />}>
        <Resolved daoDetails={daoDetails} />
      </SSRSafeSuspense>
    </ErrorBoundary>
  );
};

function Resolved({ daoDetails }: any) {
  // @TODO 왜 nested지?
  const nestedDaoDetails = daoDetails.daoDetails;
  const isDeployAirdrop = nestedDaoDetails.isAirdropContractOpened === 'true';

  console.log(' nestedDaoDetails >>>>>>>>>>>>> ', nestedDaoDetails);
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
          <h4 className="mb-[20px] text-[20px] text-white font-['Inter']">
            airdropTokenAddress: {nestedDaoDetails.airdropTokenAddress}
          </h4>
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
