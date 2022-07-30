import React from 'react';
import styled from '@emotion/styled';
import Title from '@src/components/CreateSpace/Title';
import Subscription from '@src/components/CreateSpace/Subscription';

function setdelegation() {
  return (
    <StyleMain>
      <Title>Set Delegation</Title>
      <Subscription>Check if you want to make user to delegate</Subscription>
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
