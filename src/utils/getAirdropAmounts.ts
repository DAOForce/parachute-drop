import { airdropAbi } from '@src/utils/airdropAbi';
import { ethers } from 'ethers';

export const getAirdropAmountsPerRound = async (airdropAddress: string) => {
  // const provider = ethers.providers.getDefaultProvider('goerli');
  const provider = new ethers.providers.JsonRpcProvider('https://eth.bd.evmos.dev:8545');
  const AirdropContract = new ethers.Contract(airdropAddress, airdropAbi, provider);

  // return await AirdropContract.getAirdropSnapshotTimestamps();

  const rawAmount = (await AirdropContract.getTotalAirdropVolumePerRound()).toString();

  console.log('RAW AMOUNT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ', rawAmount);

  return parseInt(ethers.utils.formatEther(rawAmount));
};
