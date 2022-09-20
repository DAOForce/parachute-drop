import BackBtn from '@src/components/common/BackBtn';
import NextBtn from '@src/components/common/NextBtn';
import { AirdropStep, HeaderType } from '@src/pages/new_airdrop';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import ReviewAirdrop from '../ReviewAirdrop';

import StartAirdrop from '../StartAirdrop';
import AddWhiteList from './AddWhiteList';
import EnterDetailAirdrop from './EnterDetailAirdrop';
import SetDelegation from './SetDelegation';

interface NewAirdropFormProps {
  step: AirdropStep;
  setStep: React.Dispatch<React.SetStateAction<AirdropStep>>;
  setHeader: React.Dispatch<React.SetStateAction<HeaderType>>;
}

function NewAirdropForm({ step, setStep, setHeader }: NewAirdropFormProps) {
  const router = useRouter();
  const [isFirstStepDone, setIsFirstStepDone] = useState(false);
  const [isSecondStepDone, setIsSecondSteopDone] = useState(false);
  const [isFinalStepDone, setIsFinalStepDone] = useState(false);
  const { getValues } = useFormContext();

  const currentValue = getValues();
  useEffect(() => {
    console.log('currentValue', currentValue);
    if (
      currentValue?.treasuryAddress !== '' &&
      currentValue?.startDate !== '' &&
      currentValue?.rounds !== null &&
      currentValue?.interval !== null &&
      currentValue?.duration !== null
    ) {
      setIsFirstStepDone(true);
    } else {
      setIsFirstStepDone(false);
    }

    if (currentValue?.isDelegate !== null) {
      setIsSecondSteopDone(true);
    } else {
      setIsSecondSteopDone(false);
    }

    if (currentValue?.whiteList !== null) {
      setIsFinalStepDone(true);
    } else {
      setIsFinalStepDone(false);
    }
  }, [currentValue]);

  const queryClient = useQueryClient();

  const handleTryAgain = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    queryClient.invalidateQueries(['airdropToken']);
  };

  switch (step) {
    case 'ENTER_DETAIL_AIRDROP':
      return (
        <>
          <EnterDetailAirdrop />
          <div className="flex items-center justify-between mt-[30px] mb-[66px]">
            <BackBtn
              onClick={() => {
                window.history.back();
              }}
            />
            <NextBtn
              onClick={(e) => {
                e.preventDefault();
                setStep('SET_DELEGATION');
              }}
              isAbled={isFirstStepDone}
            />
          </div>
        </>
      );
    case 'SET_DELEGATION':
      return (
        <>
          <SetDelegation />
          <div className="flex items-center justify-between mt-[30px] mb-[66px] min-w-[868.5px]">
            <BackBtn
              onClick={(e) => {
                e.preventDefault();
                setStep('ENTER_DETAIL_AIRDROP');
              }}
            />
            <NextBtn
              onClick={(e) => {
                e.preventDefault();
                setStep('ADD_WHITELIST_ADDRRESS');
              }}
              isAbled={isSecondStepDone}
            />
          </div>
        </>
      );
    case 'ADD_WHITELIST_ADDRRESS':
      return (
        <>
          <AddWhiteList />
          <div className="flex items-center justify-between mt-[30px] mb-[66px]">
            <BackBtn
              onClick={(e) => {
                e.preventDefault();
                setStep('SET_DELEGATION');
              }}
            />
            <NextBtn
              onClick={(e) => {
                e.preventDefault();
                setStep('REVIEW_AIRDROP');
              }}
              isAbled={isFinalStepDone}
            />
          </div>
        </>
      );
    case 'REVIEW_AIRDROP':
      return (
        <>
          <ReviewAirdrop />
          <div className="flex items-center justify-between mt-[30px] mb-[66px]">
            <BackBtn
              onClick={(e) => {
                e.preventDefault();
                setStep('ADD_WHITELIST_ADDRRESS');
              }}
            />
            <NextBtn
              onClick={(e) => {
                e.preventDefault();
                setStep('AIRDROP_START');
                setHeader('CLAIM_TOKEN');
              }}
            >
              Done
            </NextBtn>
          </div>
        </>
      );
    default:
      return (
        <>
          <StartAirdrop setStep={setStep} />
          {/* <div className="flex items-center justify-between mt-[30px] mb-[66px]">
            <BackBtn
              onClick={(e) => {
                e.preventDefault();
                setStep('REVIEW_AIRDROP');
              }}
            />
            <BackBtn onClick={handleTryAgain}>Try Again</BackBtn>
          </div> */}
        </>
      );
  }
}

export default NewAirdropForm;
