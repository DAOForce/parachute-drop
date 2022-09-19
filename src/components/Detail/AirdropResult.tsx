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
  /**
   * case 1 : owner address === dao space owner address && airdrop 컨트랙트 deploy X
   * case 2 : owner address === dao space owner address && airdrop 컨트랙트 deploy O
   * case 3 : claim 대상자
   * case 4 : claim 비대상자
   */
  return daoDetails.ownerAddress?.toLowerCase() === ownerAddress ? (
    <AirdropAdmin />
  ) : (
    <AirdropInfo />
  );
}

export default AirdropResult;
