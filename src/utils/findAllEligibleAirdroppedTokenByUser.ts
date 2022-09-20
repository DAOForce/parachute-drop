import { abi } from '@src/utils/abi';
import { STORE_ADDRESS } from '@src/utils/getAllGovernanceTokenInfo';
import { ethers } from 'ethers';

export const findAllEligibleAirdroppedTokenByUser = async (userAddress: string) => {
  const provider = ethers.providers.getDefaultProvider('goerli');
  const ContractInfoStore = new ethers.Contract(STORE_ADDRESS, abi, provider);

  return await ContractInfoStore.findAirdropTokenAddressListByUserAddr(userAddress);
};
