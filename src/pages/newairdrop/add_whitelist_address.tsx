import React, { useState } from 'react';
import styled from '@emotion/styled';
import Title from '@src/components/CreateSpace/Title';
import Subscription from '@src/components/CreateSpace/Subscription';
import UploadCsv from '@src/components/common/UploadCsv';
import CreateSpaceNav from '@src/components/common/CreateSpaceNav';
import { HEADER_NAME, SUBSCRIPTION, TITLE } from '@src/constants';
import BackBtn from '@src/components/common/BackBtn';
import NextBtn from '@src/components/common/NextBtn';
import { useRouter } from 'next/router';
import { FreeObject } from '@src/types';

function add_whitelist_address() {
  const router = useRouter();
  const [fileData, setFileData] = useState<Array<FreeObject> | null>(null);
  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    router.push({
      pathname: '/newairdrop/review_airdrop',
      query: {
        ...router.query,
      },
    });
  };
  const handleBackClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push({
      pathname: '/newairdrop/enterairdrop',
      query: {
        ...router.query,
      },
    });
  };
  return (
    <StyleMain>
      <CreateSpaceNav routingAddress="/">{HEADER_NAME.START_NEW_AIRDROP}</CreateSpaceNav>
      <Title>{TITLE.ADD_WISHLIST_ADDRRESS}</Title>
      <UploadCsv fileData={fileData} setFileData={setFileData} />
      <StyledButtonGroup>
        <BackBtn onClick={handleBackClick} />
        <NextBtn onClick={handleNextClick} isAbled={!!fileData} />
      </StyledButtonGroup>
    </StyleMain>
  );
}

export default add_whitelist_address;

const StyleMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & > header {
    margin-bottom: 120px;
  }
  & > h1 {
    margin-bottom: 100px;
  }
`;

const StyledButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 150px;
  width: 868.5px;
`;
