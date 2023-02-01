import { STORE_ADDRESS } from '@src/constants';
import ScheduledAirdrop from '@src/lib/ScheduledAirdrop';
import { ethers, utils } from 'ethers';

import { getTimestampArray } from './getTimstampArray';
import { uploadCsvFile } from './uploadFile';
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
  const targetAddresseList = whiteList?.parsedData?.map((o: { address: string }) =>
    ethers.utils.getAddress(o?.address),
  );
  let totalValue = 0;
  const targetAmountList = whiteList?.parsedData?.map(
    (o: { amounts: { toString: () => string } | undefined }) => {
      if (o?.amounts === undefined) {
        throw Error('invalid csv file format');
      }
      totalValue += Number(o?.amounts);

      return utils.parseEther(o?.amounts?.toString());
    },
  );

  const tokenContractAddress = localStorage.getItem('tokenContractAddress')
    ? localStorage.getItem('tokenContractAddress')
    : // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      JSON.parse(localStorage.getItem('clickedCardInfo'))?.governanceToken?.contractAddress;

  const totalValuePerRound = utils.parseEther(totalValue.toString());

  console.log('totalValuePerRound', totalValuePerRound);
  console.log('tokenContractAddress', tokenContractAddress);
  const signer = new ethers.providers.Web3Provider((window as any).ethereum).getSigner();

  console.log('SIGNER >>>>>>>>>>>>>>>>>>>>>>>>>>>>', signer);
  const airdropFactory = new ethers.ContractFactory(
    ScheduledAirdrop['abi'],
    ScheduledAirdrop['bytecode'],
    signer,
  );

  console.log('>>>>>>>>>>>>>>>>>>> AIRDROP FACTORY >>>>>>>>>>>>>>>>>', airdropFactory);

  console.log(
    'tokenContractAddr',
    tokenContractAddress,
    'airdrop',
    airdropTimestamp,
    'duration',
    duration,
    'rounds',
    rounds,
    'targetAddresseList',
    targetAddresseList,
    'targetAmountList',
    targetAmountList,
    'totalValuePerRound',
    totalValuePerRound,
    'STORE_ADDRESS',
    STORE_ADDRESS,
  );

  const delegationFileHash = await uploadCsvFile(delegationList.originalFile);
  const whiteListFileHash = await uploadCsvFile(whiteList.originalFile);

  console.log('delegation file hash ', delegationFileHash);
  console.log('whitelist file hash ', whiteListFileHash);

  const result = await airdropFactory.deploy(
    tokenContractAddress,
    airdropTimestamp,
    duration,
    rounds,
    targetAddresseList,
    targetAmountList,
    totalValuePerRound,
    STORE_ADDRESS,
    delegationFileHash,
    whiteListFileHash,
  );

  const receipt2 = await result.deployTransaction.wait();

  console.log('[log] airdrop depoly receipt', receipt2);

  console.log(result.address);

  return result.address;
};
