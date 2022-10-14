import { AirdropInfoPerUserProps } from '@src/components/Detail/AirdropInfoPerUser';

import { getAirdropAmountsPerRound } from './getAirdropAmounts';
import { getAirdropSnapshotTimestamps } from './getAirdropSnapshotTimestamps';
import { getAirdropTargetAddresses } from './getAirdropTargetAddresses';

interface returnType {
  airdropTimestamps: Array<string | number>;
  airdropAmountsPerRound: number;
  airdropWhiteList: Array<string>;
  isWhiteList: boolean;
}
export const getAirdropDetailData = async ({
  airdropTokenAddress,
  governanceToken,
  tokenSupply,
  userAddress,
}: AirdropInfoPerUserProps): Promise<any> => {
  if (typeof airdropTokenAddress === 'string') {
    const airdropWhiteList = await getAirdropTargetAddresses(airdropTokenAddress);

    const isWhiteList = airdropWhiteList.filter(
      (whiteAddr: string) => whiteAddr?.toLowerCase() === userAddress?.toLowerCase(),
    );

    if (!isWhiteList) {
      return {
        airdropTimestamps: [0],
        airdropAmountsPerRound: 0,
        airdropWhiteList,
        isWhiteList: false,
      };
    }
    const airdropTimestamps = await getAirdropSnapshotTimestamps(airdropTokenAddress);
    const airdropAmountsPerRound = await getAirdropAmountsPerRound(airdropTokenAddress);

    // 여기서 리턴할 값
    // airdropTimestamps, airdropAmountsPerRound, airdropWhiteList, isWhiteList
    const result = {
      airdropTimestamps: airdropTimestamps ? airdropTimestamps : [0],
      airdropAmountsPerRound: airdropAmountsPerRound ? airdropAmountsPerRound : 100,
      airdropWhiteList,
      isWhiteList: isWhiteList.length > 0,
    };

    return result;
  }

  return {
    airdropTimestamps: [0],
    airdropAmountsPerRound: 0,
    airdropWhiteList: [],
    isWhiteList: false,
  };
};
