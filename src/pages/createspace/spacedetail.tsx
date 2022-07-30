import React, { useState } from 'react';
import styled from '@emotion/styled';
import CreateSpaceNav from '@src/components/common/CreateSpaceNav';
import { HEADER_NAME, SUBSCRIPTION, TITLE } from '@src/constants';
import Subscription from '@src/components/CreateSpace/Subscription';
import Title from '@src/components/CreateSpace/Title';
import { useRouter } from 'next/router';
import UploadImage from '@src/components/CreateSpace/UploadImage';

function spacedetail() {
  const router = useRouter();
  const [imageData, setImageData] = useState<string | null>(null);
  const handleClick = () => {
    router.push('/createspace/createtoken');
  };
  return (
    <StyledRoot>
      <CreateSpaceNav routingAddress="/">{HEADER_NAME.CREATE_SPACE}</CreateSpaceNav>
      <Title>{TITLE.SPACE_DETAIL}</Title>
      <Subscription>{SUBSCRIPTION.SPACE_DETAIL}</Subscription>
      <UploadImage setImageData={setImageData} />
      <button className="btn btn-active btn-primary rounded-full" onClick={handleClick}>
        Next
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
  & > p {
    margin-bottom: 87px;
  }
  .upload__image {
    margin-bottom: 87px;
  }
`;
