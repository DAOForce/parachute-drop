// getAirdropTargetAddresses

import { airdropAbi } from '@src/utils/airdropAbi';
import { ethers } from 'ethers';

export const getAirdropTargetAddresses = async (airdropAddress: string) => {
  const provider = new ethers.providers.JsonRpcProvider('https://eth.bd.evmos.dev:8545');
  const AirdropContract = new ethers.Contract(airdropAddress, airdropAbi, provider);

  return await AirdropContract.getAirdropTargetAddresses();
};
