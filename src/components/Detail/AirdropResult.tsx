import useMounted from '@src/hooks/useMounted';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AirdropAdmin from './AirdropAdmin';
import AirdropInfo from './AirdropInfo';

interface DaoProfileProps {
  isAirdropContractOpened: boolean;
  airdropTokenAddress: string;
  governanceToken: string;
  image?: string;
  spaceName?: string;
  intro?: string;
  homepage?: string;
  tokenName?: string;
  tokenSymbol?: string;
  tokenSupply?: string;
  ownerAddress?: string;
}

function AirdropResult() {
  const ownerAddress = localStorage && localStorage.getItem('ownerAddress');
  const router = useRouter();
  const daoDetails = router?.query;

  return daoDetails?.ownerAddress?.toLocaleLowerCase() === ownerAddress?.toLocaleLowerCase() ? (
    <AirdropAdmin />
  ) : (
    <AirdropInfo />
  );
}

export default AirdropResult;
