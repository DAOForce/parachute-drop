/* eslint-disable react-hooks/rules-of-hooks */
import styled from '@emotion/styled';
import BackBtn from '@src/components/common/BackBtn';
import CreateSpaceNav from '@src/components/common/CreateSpaceNav';
import NextBtn from '@src/components/common/NextBtn';
import Subscription from '@src/components/CreateSpace/Subscription';
import Title from '@src/components/CreateSpace/Title';
import { HEADER_NAME, SUBSCRIPTION, TITLE } from '@src/constants';
import { getTimestampArray } from '@src/utils/getTimstampArray';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';

function spacedetail() {
  const router = useRouter();
  const treasuryAddressRef = useRef(null);
  const amountsRef = useRef(null);
  const startDateRef = useRef(null);
  const roundsRef = useRef(null);
  const intervaleRef = useRef(null);
  const durationRef = useRef(null);

  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!router?.query?.treasuryAddress && !treasuryAddressRef?.current.value) {
      alert('Please enter the token name');

      return;
    } else if (!router?.query?.amounts && !amountsRef?.current.value) {
      alert('Please enter the token symbol');

      return;
    } else if (!router?.query?.startDate && !startDateRef?.current.value) {
      alert('Please enter the token supply');

      return;
    } else if (!router?.query?.rounds && !roundsRef?.current.value) {
      alert('Please upload the owner address');

      return;
    } else if (!router?.query?.interval && !intervaleRef?.current.value) {
      alert('Please upload the owner address');

      return;
    } else if (!router?.query?.duration && !durationRef?.current.value) {
      alert('Please upload the owner address');

      return;
    }
    router.push({
      pathname: '/newairdrop/add_whitelist_address',
      query: {
        ...router.query,
        treasuryAddress: treasuryAddressRef?.current?.value
          ? treasuryAddressRef?.current?.value
          : router?.query?.treasuryAddress,
        amounts: amountsRef?.current?.value ? amountsRef?.current?.value : router?.query?.amounts,
        startDate: startDateRef?.current?.value
          ? startDateRef?.current?.value
          : router?.query?.startDate,
        rounds: roundsRef?.current?.value ? roundsRef?.current?.value : router?.query?.rounds,
        interval: intervaleRef?.current?.value
          ? intervaleRef?.current?.value
          : router?.query?.interval,
        duration: durationRef?.current?.value
          ? durationRef?.current?.value
          : router?.query?.duration,
      },
    });
    const startDateVal = startDateRef?.current?.value
      ? startDateRef?.current?.value
      : router?.query?.startDate;
    const roundsVal = roundsRef?.current?.value ? roundsRef?.current?.value : router?.query?.rounds;
    const intervalVal = intervaleRef?.current?.value
      ? intervaleRef?.current?.value
      : router?.query?.interval;
    const timestampArray = getTimestampArray(startDateVal, Number(roundsVal), Number(intervalVal));

    localStorage.setItem('timestampArray', JSON.stringify(timestampArray));
  };

  const handleBackClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push({
      pathname: '/createspace/createtoken',
      query: {
        ...router.query,
        treasuryAddress: treasuryAddressRef?.current?.value
          ? treasuryAddressRef?.current?.value
          : router?.query?.treasuryAddress,
        amounts: amountsRef?.current?.value ? amountsRef?.current?.value : router?.query?.amounts,
        startDate: startDateRef?.current?.value
          ? startDateRef?.current?.value
          : router?.query?.startDate,
        rounds: roundsRef?.current?.value ? roundsRef?.current?.value : router?.query?.rounds,
        interval: intervaleRef?.current?.value
          ? intervaleRef?.current?.value
          : router?.query?.interval,
        duration: durationRef?.current?.value
          ? durationRef?.current?.value
          : router?.query?.duration,
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
          <label className="label w-full" htmlFor="TreasuryAddress">
            <span className="label-text w-full">Treasury address</span>
          </label>
          <input
            id="TreasuryAddress"
            ref={treasuryAddressRef}
            type="text"
            placeholder={
              router?.query?.treasuryAddress ? router.query.treasuryAddress.toString() : 'Type here'
            }
            className="input input-bordered w-full"
          />
          <label className="label w-full" htmlFor="Amounts">
            <span className="label-text w-full">Amounts</span>
          </label>
          <input
            id="Amounts"
            ref={amountsRef}
            type="number"
            placeholder={router?.query?.amounts ? router.query.amounts.toString() : '0.00'}
            className="input input-bordered w-full"
          />
          <label className="label w-full" htmlFor="StartDate">
            <span className="label-text w-full">Start Date</span>
          </label>
          <input
            id="StartDate"
            ref={startDateRef}
            type="text"
            placeholder={
              router?.query?.startDate ? router.query.startDate.toString() : 'yyyy-mm-dd'
            }
            className="input input-bordered w-full"
          />
          <label className="label w-full" htmlFor="Rounds">
            <span className="label-text w-full">Rounds</span>
          </label>
          <input
            id="Rounds"
            ref={roundsRef}
            type="number"
            placeholder={router?.query?.rounds ? router.query.rounds.toString() : '0'}
            className="input input-bordered w-full"
          />
          <label className="label w-full" htmlFor="Interval">
            <span className="label-text w-full">Interval (Days)</span>
          </label>
          <input
            id="Interval"
            ref={intervaleRef}
            type="number"
            placeholder={router?.query?.interval ? router.query.interval.toString() : '0'}
            className="input input-bordered w-full"
          />
          <label className="label w-full" htmlFor="ClaimableDuration">
            <span className="label-text w-full">Claimable Duration (Days)</span>
          </label>
          <input
            id="ClaimableDuration"
            ref={durationRef}
            type="number"
            placeholder={router?.query?.duration ? router.query.duration.toString() : '0'}
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
    margin-top: 80px;
    width: 100%;
  }
  & label {
    & span {
      color: #ffffff;
    }
  }
  & input {
    background: rgba(255, 255, 255, 0.1);
    margin-bottom: 20px;
  }
`;
const StyledButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 150px;
`;
