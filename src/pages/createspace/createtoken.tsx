import React, { use } from 'react';
import styled from '@emotion/styled';
import CreateSpaceNav from '@src/components/common/CreateSpaceNav';
import { HEADER_NAME, SUBSCRIPTION, TITLE } from '@src/constants';
import Subscription from '@src/components/CreateSpace/Subscription';
import Title from '@src/components/CreateSpace/Title';
import UploadImage from '@src/components/CreateSpace/UploadImage';
import { useRouter } from 'next/router';

function spacedetail() {
  const router = useRouter();
  const handleClick = () => {
    console.log('>>서버통신 해야됨');
  };
  return (
    <StyledRoot>
      <CreateSpaceNav routingAddress="/">{HEADER_NAME.CREATE_SPACE}</CreateSpaceNav>
      <Title>{TITLE.CREATE_TOKEN}</Title>
      <Subscription>{SUBSCRIPTION.CREATE_TOKEN}</Subscription>
      <UploadImage />
      <button className="btn btn-active btn-primary rounded-full" onClick={handleClick}>
        Upload File
      </button>
    </StyledRoot>
  );
}

export default spacedetail;

const StyledRoot = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & > header {
    margin-bottom: 181px;
  }
`;
