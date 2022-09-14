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
          <StyledButtonGroup>
            <div />
            <NextBtn
              onClick={() => {
                setStep('CREATE_TOKEN');
              }}
            />
          </StyledButtonGroup>
        </>
      );
    default:
      return (
        <>
          <CreateToken />
          <StyledButtonGroup>
            <BackBtn
              onClick={() => {
                setStep('SPACE_DETAIL');
              }}
            />
            <NextBtn onClick={handleNextClick} />
          </StyledButtonGroup>
        </>
      );
  }
}

export default CreateSpaceForm;
const StyledButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 66px;
  width: 620px;
`;
