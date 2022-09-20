import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import CommonError from '../common/ComomonError';
import ErrorBoundary from '../common/ErrorBoundary';
import SSRSafeSuspense from '../common/SSRSafeSuspense';

const StartAirdrop = () => {
  return (
    <ErrorBoundary
      renderFallback={({ error, reset }) => <CommonError error={error} reset={reset} />}
    >
      {/*  TODO skeleton 추가 */}
      <SSRSafeSuspense
        fallback={
          <div className="w-[512px] h-[130px] bg-[#ffffff1a] rounded-[20px] flex flex-col justify-center items-center">
            <ClipLoader size={50} color={'#FCFF70'} />
          </div>
        }
      >
        <Resolved />
      </SSRSafeSuspense>
    </ErrorBoundary>
  );
};

function Resolved() {
  // const { data } = useQuery(['airdropToken'], () => {}, {
  //   suspense: true,
  // });
  // useEffect(() => {
  //   console.log('data', data);
  // }, [data]);
  const { getValues } = useFormContext();
  console.log('getValues', getValues());
  return <div>StartAirdrop</div>;
}

export default StartAirdrop;
