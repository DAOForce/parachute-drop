import styled from '@emotion/styled';
import BackBtn from '@src/components/common/BackBtn';
import CreateSpaceNav from '@src/components/common/CreateSpaceNav';
import NextBtn from '@src/components/common/NextBtn';
import UploadCsv from '@src/components/common/UploadCsv';
import Subscription from '@src/components/CreateSpace/Subscription';
import Title from '@src/components/CreateSpace/Title';
import { HEADER_NAME, SUBSCRIPTION, TITLE } from '@src/constants';
import { FreeObject } from '@src/types';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

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

  useEffect(() => {
    const storageData = localStorage.getItem('whitelist');

    if (storageData) {
      setFileData(JSON.parse(storageData));
    }
  }, []);

  return (
    <StyleMain>
      <CreateSpaceNav routingAddress="/">{HEADER_NAME.START_NEW_AIRDROP}</CreateSpaceNav>
      <Title>{TITLE.ADD_WHITELIST_ADDRRESS}</Title>
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
