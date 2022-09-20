import { abi } from '@src/utils/abi';
import { ethers } from 'ethers';

export const STORE_ADDRESS = '0x838D974c4fB94537bFA9e700B1a09b8324743471'; // Goerli

export interface tokenInfo {
  image: string;
  DAOName: string;
  intro: string;
  symbol: string;
  tokenContractAddress: string;
  link: string;
  owner: string;
  totalSupply: string;
  name: string;
}

export const getAllGovernanceTokenInfo = async () => {
  // const provider = ethers.providers.getDefaultProvider('goerli');
  console.log('<<<<<<<<<<<<<<<< SDFSDFDS');
  const provider = new ethers.providers.JsonRpcProvider('https://eth.bd.evmos.dev:8545');

  console.log('>>>>>>>> PROVIDER >>>>>>>>>', provider);
  const ContractInfoStore = new ethers.Contract(STORE_ADDRESS, abi, provider);

  return await ContractInfoStore.getAllGovernanceTokenInfo();
};

export const beautifyAllGovernanceTokenInfoForIndex = async () => {
  const getAllGovernanceTokenInfoResult = await getAllGovernanceTokenInfo();
  const response = [
    getAllGovernanceTokenInfoResult.map(
      (item: {
        airdropTokenAddress: string;
        isAirdropContractOpened: boolean;
        tokenInfo: tokenInfo;
      }) => {
        return {
          image: item.tokenInfo.image,
          spaceName: item.tokenInfo.DAOName,
          intro: item.tokenInfo.intro,
          tokenName: item.tokenInfo.name,
          governanceToken: item.tokenInfo.tokenContractAddress,
          isAirdropContractOpened: item.isAirdropContractOpened,
          airdropTokenAddress: item.airdropTokenAddress,
          homepage: item.tokenInfo.link,
          ownerAddress: item.tokenInfo.owner,
          tokenSupply: item.tokenInfo.totalSupply,
          tokenSymbol: item.tokenInfo.symbol,
        };
      },
    ),
  ][0];

  console.log('>>>>>>>>>>> RESPONSE', response);

  return response;
};
