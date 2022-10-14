import { airdropAbi } from '@src/lib/abi';
import ScheduledAirdrop from '@src/lib/ScheduledAirdrop';
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
  console.log('startDate, interval, rounds', startDate, interval, rounds);
  const airdropTimestamp = getTimestampArray(startDate, interval, rounds);

  console.log('airdropTimestamp', airdropTimestamp);
  const targetAddresseList = whiteList?.map((o: { address: string }) =>
    ethers.utils.getAddress(o?.address),
  );
  let totalValue = 0;
  const targetAmountList = whiteList?.map(
    (o: { amounts: { toString: () => string } | undefined }) => {
      if (o?.amounts === undefined) {
        throw Error('invalid csv file format');
      }
      totalValue += Number(o?.amounts);
      console.log('totalValue', totalValue);

      return utils.parseEther(o?.amounts?.toString());
    },
  );

  const tokenContractAddress = localStorage.getItem('tokenContractAddress');

  const totalValuePerRound = utils.parseEther(totalValue.toString());

  console.log('totalValuePerRound', totalValuePerRound);
  console.log('tokenContractAddress', tokenContractAddress);

  const infoStoreAddress = '0x24516E7EA22C009288eC666bCaa2593385D096D5';
  const signer = new ethers.providers.Web3Provider((window as any).ethereum).getSigner();

  console.log('SIGNER >>>>>>>>>>>>>>>>>>>>>>>>>>>>', signer);
  const airdropFactory = new ethers.ContractFactory(
    ScheduledAirdrop['abi'],
    ScheduledAirdrop['bytecode'],
    signer,
  );

  console.log('>>>>>>>>>>>>>>>>>>> AIRDROP FACTORY >>>>>>>>>>>>>>>>>', airdropFactory);

  // console.log(
  //   '>>>>>>>>>>>>>>>>>>>>>>>> tokenContractAddress >>>>>>>>>>>>>>>>>>>>>>> ',
  //   ethers.utils.getAddress(tokenContractAddress.toString()),
  // );

  // 0x24516E7EA22C009288eC666bCaa2593385D096D5
  // 0x838d974c4fb94537bfa9e700b1a09b8324743471

  console.log(
    'tokenContractAddr',
    tokenContractAddress,
    'airdrop',
    airdropTimestamp,
    'duration',
    duration,
    'rounds',
    rounds,
    'targetList',
    targetAddresseList,
    'targetAmount',
    targetAmountList,
    'perRound',
    totalValuePerRound,
    'store',
    '0x24516E7EA22C009288eC666bCaa2593385D096D5',
  );

  const result = await airdropFactory.deploy(
    tokenContractAddress,
    airdropTimestamp,
    duration,
    rounds,
    targetAddresseList,
    targetAmountList,
    totalValuePerRound,
    '0x24516E7EA22C009288eC666bCaa2593385D096D5',
  );

  const receipt = await result.deployed();

  const receipt2 = await result.deployTransaction.wait();

  console.log('>>>>>>>>>> RESULT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', receipt2);

  console.log(result.address);

  return result.address;
};
