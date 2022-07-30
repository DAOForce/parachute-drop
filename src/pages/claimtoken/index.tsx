import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Title from '@src/components/CreateSpace/Title';
import Subscription from '@src/components/CreateSpace/Subscription';
import UploadCsv from '@src/components/common/UploadCsv';
import CreateSpaceNav from '@src/components/common/CreateSpaceNav';
import { HEADER_NAME, SUBSCRIPTION, TITLE } from '@src/constants';
import BackBtn from '@src/components/common/BackBtn';
import NextBtn from '@src/components/common/NextBtn';
import { useRouter } from 'next/router';
import useMintingToken from '@src/hooks/useMintingToken';
import ClipLoader from 'react-spinners/ClipLoader';

function review_airdrop() {
  const router = useRouter();
  const storageWhiteList = JSON.parse(localStorage.getItem('whitelist'));
  const storageTimeList = JSON.parse(localStorage.getItem('timestampArray'));
  const { mutate, isLoading, isError, error } = useMintingToken({
    name: router?.query?.tokenName,
    ticker: router?.query?.tokenSymbol,
    DAOName: router?.query?.name,
    intro: router?.query?.intro,
    image: router?.query?.imageData,
    link: router?.query?.homepage,
    initial_supply: Number(router?.query?.tokenSupply),
    owner: router?.query?.ownerAddrress,
    airdrop_timestamps: storageTimeList,
    airdrop_target_addresses: storageWhiteList.map((o: { address: string }) => o.address),
    airdrop_round_airdrop_amounts: Number(router?.query?.amounts),
  });
  const handleAgainClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    mutate();
  };
  const handleBackClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push({
      pathname: '/newairdrop/review_airdrop',
      query: {
        ...router.query,
      },
    });
  };

  useEffect(() => {
    console.log(router?.query);
    window && mutate();
  }, [window]);

  useEffect(() => {
    console.log('>.status', status);
  }, [status]);

  return (
    <StyleMain>
      <CreateSpaceNav routingAddress="/">{HEADER_NAME.CLAIM_TOKEN}</CreateSpaceNav>
      <Title>{TITLE.CONFIRM_WALLET}</Title>
      <StyledRecipt>
        {isLoading && <ClipLoader color="#FFE55C" loading={isLoading} size={50} />}
        {isError && <div>{error?.message}</div>}
      </StyledRecipt>
      <StyledButtonGroup>
        <BackBtn onClick={handleBackClick} />
        <BackBtn onClick={handleAgainClick}>Try Again</BackBtn>
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
  height: 130px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & h2 {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 145%;

    letter-spacing: 0.005em;

    color: #f5f5f5;
    margin-bottom: 10px;
  }

  & p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;

    color: #ffffff;
    margin-bottom: 48px;
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
  margin-bottom: 400px;
  width: 582px;
`;
