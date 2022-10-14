import CheckIcon from '@src/assets/Icon/CheckIcon.svg';
import CreateSpaceNav from '@src/components/common/CreateSpaceNav';
import NextBtn from '@src/components/common/NextBtn';
import Title from '@src/components/CreateSpace/Title';
import { HEADER_NAME, TITLE } from '@src/constants';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

function ReviewClaim() {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(true);
  const handleHomeClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push({
      pathname: '/',
    });
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <CreateSpaceNav routingAddress="/" className="mb-[120px]">
          {HEADER_NAME.CLAIM_TOKEN}
        </CreateSpaceNav>
        <div className="mt-[100px]" />
        {isSuccess ? (
          <>
            <Title>Review your claim</Title>
            <section className="w-[512px] h-[350px] p-[64px] bg-[#ffffff1a] rounded-[24px] flex flex-col justify-center items-center mb-[50px] mt-[38px]">
              <h2 className="font-normal text-sm">You will receive</h2>
              <p className="mb-[24px] mt-[10px] text-center font-bold color-white w-[452px] break-words text-[40px]">
                {router.query.balance ? router.query.balance : 100.0} TEL
              </p>
              <h2 className="font-normal text-sm">You&rsquo;re delegating to</h2>
              <p className="mb-[24px] mt-[10px] text-center font-bold color-white w-[452px] break-words text-[40px]">
                {router.query.address}
              </p>
            </section>
            <NextBtn
              onClick={() => {
                setIsSuccess(false);
              }}
            >
              Claim
            </NextBtn>
          </>
        ) : (
          <div className="w-[512px] flex flex-col items-center justify-center">
            <CheckIcon className="mt-[140px] mb-[30px]" />
            <Title>{TITLE.CLAIM_SUCCESS}</Title>
            <NextBtn onClick={handleHomeClick} className="mt-[83px]">
              Return To Home
            </NextBtn>
          </div>
        )}
      </section>
    </>
  );
}

export default ReviewClaim;
