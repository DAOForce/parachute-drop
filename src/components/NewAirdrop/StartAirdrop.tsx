import { TITLE } from '@src/constants';
import CheckIcon from '@src/assets/Icon/CheckIcon.svg';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import CommonError from '../common/ComomonError';
import ErrorBoundary from '../common/ErrorBoundary';
import NextBtn from '../common/NextBtn';
import SSRSafeSuspense from '../common/SSRSafeSuspense';
import { useRouter } from 'next/router';
import { AirdropStep } from '@src/pages/new_airdrop';
import Title from '../CreateSpace/Title';
import { airdropContractDeploy } from '@src/utils/airdropContractDeploy';

interface StartAirdropProps {
  setStep: React.Dispatch<React.SetStateAction<AirdropStep>>;
}

const StartAirdrop = ({ setStep }: StartAirdropProps) => {
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
        <Resolved setStep={setStep} />
      </SSRSafeSuspense>
    </ErrorBoundary>
  );
};

function Resolved({ setStep }: StartAirdropProps) {
  const { getValues } = useFormContext();

  const currentValue = getValues();
  // const { data } = useQuery(['airdropToken'], () => airdropContractDeploy({ ...currentValue }), {
  //   suspense: true,
  // });
  // useEffect(() => {
  //   console.log('data', data);
  // }, [data]);
  const router = useRouter();
  const handleHomeClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push({
      pathname: '/',
    });
  };
  setStep('NONE');
  return (
    <div className="w-[512px] flex flex-col items-center justify-center">
      <CheckIcon className="mt-[140px] mb-[30px]" />
      <Title>{TITLE.CLAIM_SUCCESS}</Title>
      <NextBtn onClick={handleHomeClick} className="mt-[83px]">
        Return To Home
      </NextBtn>
    </div>
  );
}

export default StartAirdrop;
