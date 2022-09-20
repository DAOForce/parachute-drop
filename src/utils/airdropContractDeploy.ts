import { airdropAbi } from '@src/lib/abi';
import { NewAirdropType } from '@src/pages/new_airdrop';
import { ethers, utils } from 'ethers';
import { getTimestampArray } from './getTimstampArray';
import ScheduledAirdrop from '@src/lib/ScheduledAirdrop';
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
  const airdropTimestamp = getTimestampArray(startDate, interval, rounds);

  const targetAddresseList = whiteList?.map((o) => o.address);
  let totalValue = 0;
  const targetAmountList = whiteList?.map((o) => {
    totalValue += Number(o.amounts);
    return utils.parseEther(o.amounts.toString());
  });

  const tokenContractAddress = localStorage.getItem('tokenContractAddress');

  const totalValuePerRound = utils.parseEther(totalValue.toString());

  const infoStoreAddress = '0x838d974c4fb94537bfa9e700b1a09b8324743471';
  const signer = new ethers.providers.Web3Provider((window as any).ethereum).getSigner();

  console.log('SIGNER >>>>>>>>>>>>>>>>>>>>>>>>>>>>', signer);
  const airdropFactory = new ethers.ContractFactory(
    ScheduledAirdrop['abi'],
    ScheduledAirdrop['bytecode'],
    signer,
  );

  console.log('>>>>>>>>>>>>>>>>>>> AIRDROP FACTORY >>>>>>>>>>>>>>>>>', airdropFactory);

  console.log(
    '>>>>>>>>>>>>>>>>>>>>>>>> tokenContractAddress >>>>>>>>>>>>>>>>>>>>>>> ',
    ethers.utils.getAddress(tokenContractAddress.toString()),
  );

  console.log(
    '>>>>>>>>>>>>> input >>>>>>>>',
    tokenContractAddress,
    airdropTimestamp,
    duration,
    rounds,
    targetAddresseList,
    targetAmountList,
    totalValuePerRound,
    '0x24516E7EA22C009288eC666bCaa2593385D096D5',
  );
  const result = await airdropFactory.deploy(
    tokenContractAddress.toString(),
    airdropTimestamp,
    duration,
    rounds,
    targetAddresseList,
    targetAmountList,
    totalValuePerRound,
    '0x24516E7EA22C009288eC666bCaa2593385D096D5',
  );

  console.log('>>>>>>>>>> RESULT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', result);

  console.log(result.address);
};
