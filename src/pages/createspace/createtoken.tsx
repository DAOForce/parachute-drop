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
    if (!router?.query?.tokenName && !tokenNameRef?.current.value) {
      alert('Please enter the token name');
      return;
    } else if (!router?.query?.tokenSymbol && !tokenSymbolRef?.current.value) {
      alert('Please enter the token symbol');
      return;
    } else if (!router?.query?.tokenSupply && !tokenSupplyRef?.current.value) {
      alert('Please enter the token supply');
      return;
    } else if (!router?.query?.ownerAdrres && !ownerAddressRef?.current.value) {
      alert('Please upload the owner address');
      return;
    }
    router.push({
      pathname: '/newairdrop/enterairdrop',
      query: {
        ...router.query,
        tokenName: tokenNameRef?.current?.value
          ? tokenNameRef?.current?.value
          : router?.query?.ownerAdrres,
        tokenSymbol: tokenSymbolRef?.current?.value
          ? tokenSymbolRef?.current?.value
          : router?.query?.tokenSymbol,
        tokenSupply: tokenSupplyRef?.current?.value
          ? tokenSupplyRef?.current?.value
          : router?.query?.tokenSupply,
        ownerAdrres: ownerAddressRef?.current?.value
          ? ownerAddressRef?.current?.value
          : router?.query?.ownerAdrres,
      },
    });
  };

  const handleBackClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // router.push('/createspace/spacedetail');
    router.push({
      pathname: '/createspace/spacedetail',
      query: {
        ...router.query,
        tokenName: tokenNameRef?.current?.value
          ? tokenNameRef?.current?.value
          : router?.query?.ownerAdrres,
        tokenSymbol: tokenSymbolRef?.current?.value
          ? tokenSymbolRef?.current?.value
          : router?.query?.tokenSymbol,
        tokenSupply: tokenSupplyRef?.current?.value
          ? tokenSupplyRef?.current?.value
          : router?.query?.tokenSupply,
        ownerAdrres: ownerAddressRef?.current?.value
          ? ownerAddressRef?.current?.value
          : router?.query?.ownerAdrres,
      },
    });
  };

  return (
    <StyledRoot>
      <CreateSpaceNav routingAddress="/">{HEADER_NAME.CREATE_SPACE}</CreateSpaceNav>
      <Title>{TITLE.CREATE_TOKEN}</Title>
      <Subscription>{SUBSCRIPTION.CREATE_TOKEN}</Subscription>
      <StyledForm>
        <div className="form-control w-full">
          <label className="label w-full">
            <span className="label-text w-full">Token Name</span>
          </label>
          <input
            ref={tokenNameRef}
            type="text"
            placeholder={router?.query?.tokenName ? router.query.tokenName.toString() : 'Type here'}
            className="input input-bordered w-full"
          />
          <label className="label w-full">
            <span className="label-text w-full">Token Symbol</span>
          </label>
          <input
            ref={tokenSymbolRef}
            type="number"
            placeholder={router?.query?.tokenSymbol ? router.query.tokenSymbol.toString() : '0.00'}
            className="input input-bordered w-full"
          />
          <label className="label w-full">
            <span className="label-text w-full">Token Supply</span>
          </label>
          <input
            ref={tokenSupplyRef}
            type="text"
            placeholder={
              router?.query?.tokenSupply ? router.query.tokenSupply.toString() : 'Type here'
            }
            className="input input-bordered w-full"
          />
          <label className="label w-full">
            <span className="label-text w-full">Owner Address</span>
          </label>
          <input
            ref={ownerAddressRef}
            type="text"
            placeholder={
              router?.query?.ownerAdrres ? router.query.ownerAdrres.toString() : 'Type here'
            }
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
    margin-top: 125px;
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
