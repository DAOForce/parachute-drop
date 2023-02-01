import CreateSpaceNav from '@src/components/common/CreateSpaceNav';
import NextBtn from '@src/components/common/NextBtn';
import CreateSpaceForm from '@src/components/CreateSpace/Form';
import Subscription from '@src/components/CreateSpace/Subscription';
import Title from '@src/components/CreateSpace/Title';
import { HEADER_NAME, SUBSCRIPTION, TITLE } from '@src/constants';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider } from 'react-hook-form';

function ClaimToken() {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center justify-center">
      <CreateSpaceNav routingAddress="/" className="mb-[120px]">
        {HEADER_NAME.CLAIM_TOKEN}
      </CreateSpaceNav>
      <div className="mt-[100px]" />
      <Title>{TITLE.CLAIM_TOKEN}</Title>
      <section className="w-[512px] h-[136px] p-[64px] bg-[#ffffff1a] rounded-[20px] flex flex-col justify-center items-center mb-[50px]">
        <h2 className="font-normal text-sm">You will receive</h2>
        <p className="mb-[24px] mt-[10px] text-center font-bold color-white w-[452px] break-words text-[40px]">
          {router.query.balance ? Math.floor(Number(router.query.balance) / 3) : 100.0}{' '}
          {router.query.tokenSymbol ? router.query.tokenSymbol : 'TEL'}
        </p>
      </section>
      <NextBtn
        onClick={() => {
          router.push({
            pathname: '/create_delegation',
            query: {
              balance: router.query.balance,
              tokenSymbol: router.query.tokenSymbol,
            },
          });
        }}
      >
        Delegation
      </NextBtn>
    </section>
  );
}

export default ClaimToken;
