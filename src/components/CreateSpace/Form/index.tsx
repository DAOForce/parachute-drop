import styled from '@emotion/styled';
import BackBtn from '@src/components/common/BackBtn';
import NextBtn from '@src/components/common/NextBtn';
import { Step } from '@src/pages/create_space';
import React from 'react';

import CreateToken from './CreateToken';
import SpaceDetail from './SpaceDetail';
interface CreateSpaceFormProps {
  step: Step;
  setStep: React.Dispatch<React.SetStateAction<Step>>;
}

function CreateSpaceForm({ step, setStep }: CreateSpaceFormProps) {
  const handleNextClick = () => {};

  console.log('stop', step);

  switch (step) {
    case 'SPACE_DETAIL':
      return (
        <>
          <SpaceDetail />
          <div className="flex items-center justify-between mt-[30px] mb-[66px]">
            <div />
            <NextBtn
              onClick={() => {
                setStep('CREATE_TOKEN');
              }}
            />
          </div>
        </>
      );
    default:
      return (
        <>
          <CreateToken />
          <div className="flex items-center justify-between mt-[30px] mb-[66px]">
            <BackBtn
              onClick={() => {
                setStep('SPACE_DETAIL');
              }}
            />
            <NextBtn onClick={handleNextClick} />
          </div>
        </>
      );
  }
}

export default CreateSpaceForm;
