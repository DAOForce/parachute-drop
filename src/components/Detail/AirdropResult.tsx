import AirdropAdmin from './AirdropAdmin';
import AirdropInfo from './AirdropInfo';

interface DaoProfileProps {
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
  console.log(daoDetails.ownerAddress);

  return daoDetails.ownerAddress === ownerAddress ? <AirdropAdmin /> : <AirdropInfo />;
}

export default AirdropResult;
