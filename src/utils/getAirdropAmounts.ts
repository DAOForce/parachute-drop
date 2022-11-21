import airdropAbi from '@src/lib/ScheduledAirdrop';
import { ethers } from 'ethers';

export const getAirdropAmountsPerRound = async (airdropAddress: string) => {
  // const provider = ethers.providers.getDefaultProvider('goerli');
  const provider = new ethers.providers.JsonRpcProvider('https://eth.bd.evmos.dev:8545');
  const AirdropContract = new ethers.Contract(airdropAddress, airdropAbi['abi'], provider);

  // return await AirdropContract.getAirdropSnapshotTimestamps();
  const bigintValue = await AirdropContract.getTotalAirdropVolumePerRound();

  console.log('bigintValue', bigintValue);
  // console.log('bigintValue', bigintValue.toNumber());
  // const intValue = BigNumber.toNumber(bigintValue);

  const rawAmount = bigintValue.toString();

  console.log('RAW AMOUNT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ', rawAmount);
  console.log(
    'RAW AMOUNT2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ',
    parseInt(ethers.utils.formatEther(rawAmount)),
  );

  return parseInt(ethers.utils.formatEther(rawAmount));
};
