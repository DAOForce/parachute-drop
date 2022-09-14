import styled from '@emotion/styled';
import CreateSpaceNav from '@src/components/common/CreateSpaceNav';
import UploadCsv from '@src/components/common/UploadCsv';
import Subscription from '@src/components/CreateSpace/Subscription';
import Title from '@src/components/CreateSpace/Title';
import { HEADER_NAME, SUBSCRIPTION, TITLE } from '@src/constants';
import React from 'react';

function setdelegation() {
  return (
    <StyleMain>
      <CreateSpaceNav routingAddress="/">{HEADER_NAME.START_NEW_AIRDROP}</CreateSpaceNav>
      <Title>{TITLE.SET_DELEGATION}</Title>
      <Subscription>{SUBSCRIPTION.SET_DELEGATION}</Subscription>
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
  & > header {
    margin-bottom: 120px;
  }
`;
