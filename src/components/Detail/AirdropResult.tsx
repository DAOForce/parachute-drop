import AirdropAdmin from './AirdropAdmin';
import AirdropInfo from './AirdropInfo';

interface DaoProfileProps {
  isAirdropContractOpened: boolean;
  airdropTokenAddress: string;
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
  const ownerAddress = localStorage.getItem('ownerAddress');
  const isAirdropContractOpened: boolean = JSON.parse(String(daoDetails.isAirdropContractOpened));
  const airdropTokenAddress: string = daoDetails.airdropTokenAddress;

  console.log(daoDetails.ownerAddress);

  return daoDetails.ownerAddress === ownerAddress ? (
    <AirdropAdmin />
  ) : (
    <AirdropInfo
      isAirdropContractOpened={isAirdropContractOpened}
      airdropTokenAddress={airdropTokenAddress}
    />
  );
}

export default AirdropResult;
