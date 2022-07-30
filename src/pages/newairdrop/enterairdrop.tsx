import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import CreateSpaceNav from '@src/components/common/CreateSpaceNav';
import { HEADER_NAME, SUBSCRIPTION, TITLE } from '@src/constants';
import Subscription from '@src/components/CreateSpace/Subscription';
import Title from '@src/components/CreateSpace/Title';
import UploadImage from '@src/components/CreateSpace/UploadImage';
import { useRouter } from 'next/router';
import BackBtn from '@src/components/common/BackBtn';
import NextBtn from '@src/components/common/NextBtn';

function spacedetail() {
  const router = useRouter();
  const tokenNameRef = useRef(null);
  const tokenSymbolRef = useRef(null);
  const tokenSupplyRef = useRef(null);
  const ownerAddressRef = useRef(null);
  const [isAbled, setIsAbled] = useState<boolean>();
  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(tokenNameRef?.current.value);
    console.log(tokenSymbolRef?.current.value);
    console.log(tokenSupplyRef?.current.value);
    console.log(ownerAddressRef?.current.value);
    if (!tokenNameRef?.current.value) {
      alert('Please enter the token name');
      return;
    } else if (!tokenSymbolRef?.current.value) {
      alert('Please enter the token symbol');
      return;
    } else if (!tokenSupplyRef?.current.value) {
      alert('Please enter the token supply');
      return;
    } else if (!ownerAddressRef?.current.value) {
      alert('Please upload the owner address');
      return;
    }
    router.push({
      pathname: '/createspace/createtoken',
      query: {
        ...router.query,
        tokenName: tokenNameRef?.current.value,
        tokenSymbol: tokenSymbolRef?.current.value,
        tokenSupply: tokenSupplyRef?.current.value,
        ownerAdrres: ownerAddressRef?.current.value,
      },
    });
  };

  const handleBackClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push({
      pathname: '/createspace/createtoken',
      query: {
        ...router.query,
      },
    });
  };

  return (
    <StyledRoot>
      <CreateSpaceNav routingAddress="/">{HEADER_NAME.START_NEW_AIRDROP}</CreateSpaceNav>
      <Title>{TITLE.ENTER_DETAIL_AIRDROP}</Title>
      <Subscription>{SUBSCRIPTION.ENTER_DETAIL_AIRDROP}</Subscription>
      <StyledForm>
        <div className="form-control w-full">
          <label className="label w-full">
            <span className="label-text w-full">Token Name</span>
          </label>
          <input
            ref={tokenNameRef}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <label className="label w-full">
            <span className="label-text w-full">Token Symbol</span>
          </label>
          <input
            ref={tokenSymbolRef}
            type="text"
            placeholder="0.00"
            className="input input-bordered w-full"
          />
          <label className="label w-full">
            <span className="label-text w-full">Token Supply</span>
          </label>
          <input
            ref={tokenSupplyRef}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <label className="label w-full">
            <span className="label-text w-full">Owner Address</span>
          </label>
          <input
            ref={ownerAddressRef}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <StyledButtonGroup>
          <BackBtn onClick={handleBackClick} />
          <NextBtn onClick={handleNextClick} />
        </StyledButtonGroup>
      </StyledForm>
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
    margin-bottom: 120px;
  }
`;

const StyledForm = styled.form`
  width: 560px;
  & div {
    width: 100%;
  }
  & label {
    & span {
      color: #ffffff;
    }
  }
  & input {
    background: rgba(255, 255, 255, 0.1);
    margin-bottom: 36px;
  }
`;
const StyledButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 150px;
`;
