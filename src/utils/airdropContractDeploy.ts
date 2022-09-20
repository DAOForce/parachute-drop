import { airdropAbi } from '@src/lib/abi';
import { NewAirdropType } from '@src/pages/new_airdrop';
import { ethers, utils } from 'ethers';
import { getTimestampArray } from './getTimstampArray';

export const airdropContractDeploy = async ({
  treasuryAddress,
  startDate,
  rounds,
  interval,
  duration,
  isDelegate,
  delegationList,
  whiteList,
}: any) => {
  const contractAddress = '0x4bAECdBa45727Ce60ee126f871D36D8e74BB36eE';
  const signer = new ethers.providers.Web3Provider((window as any).ethereum).getSigner();
  const AirdropContract = new ethers.Contract(contractAddress, airdropAbi, signer);
  console.log('>>signer', signer);

  const airdropTimestamp = getTimestampArray(startDate, interval, rounds);

  const targetAddresseList = whiteList?.map((o) => o.address);
  let totalValue = 0;
  const targetAmountList = whiteList?.map((o) => {
    totalValue += Number(o.amounts);
    return utils.parseEther(o.amounts.toString());
  });
  // @TODO token contract address
  const tokenContractAddress = '';

  const totalValuePerRound = utils.parseEther(totalValue.toString());

  //  @TODO infostore address
  const infoStoreAddress = '';
  const result = await AirdropContract.deploy(
    tokenContractAddress,
    airdropTimestamp,
    duration,
    rounds,
    targetAddresseList,
    targetAmountList,
    totalValuePerRound,
    infoStoreAddress,
  );
};
