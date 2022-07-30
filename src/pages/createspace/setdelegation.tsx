import React from 'react';
import styled from '@emotion/styled';
import Title from '@src/components/CreateSpace/Title';
import Subscription from '@src/components/CreateSpace/Subscription';
import UploadCsv from '@src/components/common/UploadCsv';

function setdelegation() {
  return (
    <StyleMain>
      <Title>Set Delegation</Title>
      <Subscription>Check if you want to make user to delegate</Subscription>
      <UploadCsv />
    </StyleMain>
  );
}

export default setdelegation;

const StyleMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
