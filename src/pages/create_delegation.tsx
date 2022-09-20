import styled from '@emotion/styled';
import CreateSpaceNav from '@src/components/common/CreateSpaceNav';
import NextBtn from '@src/components/common/NextBtn';
import SelectableCard from '@src/components/common/SelectableCard';
import Title from '@src/components/CreateSpace/Title';
import { HEADER_NAME, TITLE } from '@src/constants';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

function CreateDelegation() {
  const router = useRouter();
  const [currentAddress, setCurrentAddress] = useState();
  const delegationList = [
    { address: '0xe726c88Ad1BAb6508a251B7995f44fB1C5E3dCF7', amounts: '13K ENS' },
    { address: '0x5Faf1BfEA38824A79fA7fcb601F6EA396dD19D66', amounts: '13K ENS' },
    { address: '0x388C818CA8B9251b393131C08a736A67ccB19297', amounts: '13K ENS' },
    { address: '0xcb65702a9b26f8a643a31a4c84b9392589e03d7c', amounts: '13K ENS' },
    { address: '0x710b3303fb508a84f10793c1106e32be873c24cd', amounts: '13K ENS' },
    { address: '0xdb65702a9b26f8a643a31a4c84b9392589e03d7c', amounts: '13K ENS' },
    { address: '0xe7E6c88Ad1BAb6508a251B7995f44fB1C5E3dCF7', amounts: '13K ENS' },
    { address: '0x5d39abaa161e622b99d45616afc8b837e9f19a25', amounts: '13K ENS' },
    { address: '0x2e59a20f205bb85a89c53f1936454680651e618e', amounts: '13K ENS' },
    { address: '0xa284a45a39a6811a6d812d02ea1355dfebf2e427', amounts: '13K ENS' },
    { address: '0x9dc66584e0fa05714b1734dff082d360c64393ec', amounts: '13K ENS' },
    { address: '0xa184a45a39a6811a6d812d02ea1355dfebf2e427', amounts: '13K ENS' },
  ];

  const handleClick = (e: any) => {
    setCurrentAddress(e.currentTarget.id);
    router.push({
      pathname: '/review_claim',
      query: {
        address: e.currentTarget.id,
      },
    });
  };
  return (
    <section className="flex flex-col items-center justify-center">
      <CreateSpaceNav routingAddress="/" className="mb-[120px]">
        {HEADER_NAME.CLAIM_TOKEN}
      </CreateSpaceNav>
      <div className="mt-[100px]" />
      <Title>{TITLE.CLAIM_TOKEN}</Title>
      <div className="flex flex-row gap-6 flex-wrap justify-center items-center mt-10">
        {delegationList?.map((item) => {
          return (
            <SelectableCard
              key={item.address}
              id={item.address}
              className="w-[286px] h-[155px] break-all p-6 rounded-m flex-col"
              onClick={handleClick}
              isSelected={currentAddress === item.address}
            >
              {item.address}
            </SelectableCard>
          );
        })}
      </div>
    </section>
  );
}

export default CreateDelegation;

export const UL = styled.ul`
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(392px, 1fr)); */
  /* column-gap: 56px; */
  margin-top: 80px;
  margin-bottom: 60px;
  width: 100%;
  max-width: 1280px;
  /* width: 1280px;
  row-gap: 24px;
  place-items: center;
  @media (max-width: 784px) {
    margin-top: 67px;
    margin-bottom: 32px;
  } */
`;
