import BackBtn from '@src/components/common/BackBtn';
import NextBtn from '@src/components/common/NextBtn';
import { AirdropStep } from '@src/pages/new_airdrop';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import StartAirdrop from '../StartAirdrop';

interface NewAirdropFormProps {
  step: AirdropStep;
  setStep: React.Dispatch<React.SetStateAction<AirdropStep>>;
}

function NewAirdropForm({ step, setStep }: NewAirdropFormProps) {
  const router = useRouter();
  const [isFirstStepDone, setIsFirstStepDone] = useState(false);
  const [isSecondStepDone, setIsSecondSteopDone] = useState(false);
  const [isFinalStepDone, setIsFinalStepDone] = useState(false);
  const { getValues } = useFormContext();

  useEffect(() => {
    const currentValue = getValues();

    if (
      currentValue?.treasuryAddress !== '' &&
      currentValue?.amounts !== '' &&
      currentValue?.startDate !== '' &&
      currentValue?.rounds !== '' &&
      currentValue?.interval !== '' &&
      currentValue?.duration !== ''
    ) {
      setIsFirstStepDone(true);
    } else {
      setIsFirstStepDone(false);
    }

    if (currentValue?.isDelegate !== '') {
      setIsSecondSteopDone(true);
    } else {
      setIsSecondSteopDone(false);
    }

    if (currentValue?.whiteList !== '') {
      setIsFinalStepDone(true);
    } else {
      setIsFinalStepDone(false);
    }
  }, [getValues()]);

  switch (step) {
    case 'ENTER_DETAIL_AIRDROP':
      return (
        <>
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
              // isAbled={isFirstStepDone}
            />
          </div>
        </>
      );
    case 'SET_DELEGATION':
      return (
        <>
          <div className="flex items-center justify-between mt-[30px] mb-[66px]">
            <BackBtn
              onClick={() => {
                setStep('ENTER_DETAIL_AIRDROP');
              }}
            />
            <NextBtn
              onClick={(e) => {
                e.preventDefault();
                setStep('ADD_WHITELIST_ADDRRESS');
              }}
              // isAbled={isSecondStepDone}
            />
          </div>
        </>
      );
    case 'ADD_WHITELIST_ADDRRESS':
      return (
        <>
          <div className="flex items-center justify-between mt-[30px] mb-[66px]">
            <BackBtn
              onClick={() => {
                setStep('SET_DELEGATION');
              }}
            />
            <NextBtn
              onClick={(e) => {
                e.preventDefault();
                setStep('REVIEW_AIRDROP');
              }}
              // isAbled={isFinalStepDone}
            />
          </div>
        </>
      );
    case 'REVIEW_AIRDROP':
      return (
        <>
          <div className="flex items-center justify-between mt-[30px] mb-[66px]">
            <BackBtn
              onClick={() => {
                setStep('ADD_WHITELIST_ADDRRESS');
              }}
            />
            <NextBtn
              onClick={() => {
                setStep('AIRDROP_START');
              }}
            >
              Done
            </NextBtn>
          </div>
        </>
      );
    default:
      return <StartAirdrop />;
  }
}

export default NewAirdropForm;
