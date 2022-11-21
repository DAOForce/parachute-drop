import airdropAbi from '@src/lib/ScheduledAirdrop';
import { ethers } from 'ethers';

export const getAirdropSnapshotTimestamps = async (airdropAddress: string) => {
  // const provider = ethers.providers.getDefaultProvider('goerli');
  const provider = new ethers.providers.JsonRpcProvider('https://eth.bd.evmos.dev:8545');
  const AirdropContract = new ethers.Contract(airdropAddress, airdropAbi['abi'], provider);

  // return await AirdropContract.getAirdropSnapshotTimestamps();

  const unixTimeList = await AirdropContract.getAirdropSnapshotTimestamps();

  return unixTimeList.map((item: any) => {
    const unixTime = item._hex;
    const parsedUnixTime = new Date(parseInt(unixTime) * 1000);

    return new Date(parsedUnixTime).toLocaleString();
  });
};
