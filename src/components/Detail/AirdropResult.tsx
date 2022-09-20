import useMounted from '@src/hooks/useMounted';
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

interface DaoDetails {
  daoDetails: DaoProfileProps;
}

function AirdropResult({ daoDetails }: DaoDetails) {
  const isMounted = useMounted();
  const [currentOwnerAddress, setCurrentOwnerAddress] = useState<string | null>(null);
  if (isMounted) {
    const ownerAddress = localStorage && localStorage.getItem('ownerAddress');
    setCurrentOwnerAddress(ownerAddress);
  }

  console.log('>>>>>>>>>>>>>>>>>>>>>>>> daoDetails Raw', daoDetails);

  const isAirdropContractOpened: boolean = JSON.parse(String(daoDetails?.isAirdropContractOpened));
  const airdropTokenAddress: string = daoDetails?.airdropTokenAddress;
  const governanceToken: string = daoDetails?.governanceToken;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const tokenSupply = parseInt(daoDetails?.tokenSupply);

  return daoDetails?.ownerAddress === currentOwnerAddress ? (
    <AirdropAdmin />
  ) : (
    <AirdropInfo
      isAirdropContractOpened={isAirdropContractOpened}
      airdropTokenAddress={airdropTokenAddress}
      governanceToken={governanceToken}
      tokenSupply={tokenSupply}
    />
  );
}

export default AirdropResult;
