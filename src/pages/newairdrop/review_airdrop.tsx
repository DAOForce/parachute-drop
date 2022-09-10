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

function review_airdrop() {
  const router = useRouter();
  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    router.push({
      pathname: '/claimtoken',
      query: {
        ...router.query,
      },
    });
  };
  const handleBackClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push({
      pathname: '/newairdrop/add_whitelist_address',
      query: {
        ...router.query,
      },
    });
  };

  return (
    <StyleMain>
      <CreateSpaceNav routingAddress="/">{HEADER_NAME.START_NEW_AIRDROP}</CreateSpaceNav>
      <Title>{TITLE.REVIEW_AIRDROP}</Title>
      <StyledRecipt>
        <h2>Treasury address</h2>
        <p>{router?.query?.treasuryAddress}</p>
        <h2>Rounds</h2>
        <p>{router?.query?.rounds} times</p>
        <h2>Interval</h2>
        <p>{router?.query?.interval} days</p>
        <h2>Claimable Duration</h2>
        <p>{router?.query?.duration} weeks</p>
      </StyledRecipt>
      <StyledButtonGroup>
        <BackBtn onClick={handleBackClick} />
        <NextBtn onClick={handleNextClick}>Done</NextBtn>
      </StyledButtonGroup>
    </StyleMain>
  );
}

export default review_airdrop;

const StyleMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & > header {
    margin-bottom: 120px;
  }
  & > h1 {
    margin-bottom: 76px;
  }
`;

const StyledRecipt = styled.section`
  width: 512px;
  height: fit-content;
  padding: 64px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 145%;

    letter-spacing: 0.005em;

    opacity: 0.75;
  }

  & p {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 48px;

    color: #ffffff;
    margin-bottom: 24px;
    width: 452px;
    text-align: center;
    word-break: break-all;
    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

const StyledButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 150px;
  width: 582px;
`;
