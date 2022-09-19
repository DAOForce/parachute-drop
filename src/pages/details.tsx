import Navbar from '@src/components/common/Navbar';
import NextBtn from '@src/components/common/NextBtn';
import { airdropAbi, daoAbi } from '@src/lib/abi';
import dayjs from 'dayjs';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
const ethers = require('ethers');

const Details: NextPage = () => {
  const provider = new ethers.providers.JsonRpcProvider('https://eth.bd.evmos.dev:8545');
  const providerGetBlockNumber = async () => await provider.getBlockNumber();
  const providerGetNetwork = async () => await provider.getNetwork();

  // console.log(providerGetBlockNumber());
  // console.log(provider);
  // console.log(providerGetNetwork());

  const balance = async () =>
    await provider.getBalance('0x49388dCC82D36B6338871C00F26bF49fF9369A1D');

  // ethers.utils.formatUtils(balance);

  const testContractAddr = 0xd750a1d50f2018abb27747a0316685294b5d16d0;

  // console.log(testContractAddr);
  const contractAddr = '0xd750a1d50f2018abb27747a0316685294b5d16d0';
  // console.log(contractAddr);

  const signer = new ethers.Wallet(
    'd8f5d2f82fcceb4f7564364d25b23fc9fca1ad48d2570aceb376f738cf4b970c',
    provider,
  );
  const testTokenContract = new ethers.Contract(contractAddr, daoAbi, signer);
  const testTokenContract4 = new ethers.Contract(
    '0x65751ae0dD90FD2008D179c0F83b528959bdBE50',
    daoAbi,
    signer,
  );

  const [DAOName, setDAOName] = useState('');
  const [intro, setIntro] = useState('');

  const getDAOName = async () => await testTokenContract4.getDAOName();
  const getIntro = async () => await testTokenContract4.getIntro();

  const getDAONameFromPromise = async () => {
    const result = await getDAOName();

    setDAOName(result);
  };

  const getIntroFromPromise = async () => {
    const result = await getIntro();

    setIntro(result);
  };

  useEffect(() => {
    getDAONameFromPromise();
    getIntroFromPromise();
  }, []);

  const testTokenContract5 = new ethers.Contract(
    '0x577D6Ca4073baC31A41e74F5d90137611fd3Ba60',
    daoAbi,
    signer,
  );

  const daoDetails = {
    ticker: 'TELE',
    DAOName,
    intro: 'Telescope DAO is changing the world',
    image: 'https://m.media-amazon.com/images/I/41ViEgmMrOL._SY355_.jpg',
    link: 'https://telescope.dao',
  };

  const airdrop_timestamps = [1651354641, 1653946641, 1656625041];
  const airdrop_round_airdrop_amounts = 4000;

  const date1 = dayjs(airdrop_timestamps[1]);
  const date2 = dayjs(airdrop_timestamps[0]);

  const airdropDetails = [
    { label: 'Start Date', value: airdrop_timestamps[0] },
    { label: 'Rounds', value: airdrop_timestamps.length },
    { label: 'Interval', value: date1.diff(date2, 'day') + ' Days' },
  ];

  const total = airdrop_timestamps.length * airdrop_round_airdrop_amounts;

  const amounts = [{ label: 'Total Amounts', amount: total, color: '#FFE55C' }];

  // get tokens from localstorage

  const [airRoundData, setAirRoundData] = useState<number>(0);
  const [airBalance, setAirBalance] = useState<number>(0);
  const [airWhiteList, setAirWhiteList] = useState<Array<string> | undefined>();
  const [airTimestamps, setAirTimestamps] = useState<Array<number> | undefined>();
  const [initialBlockNumber, setInitialBlockNumber] = useState<number>(0);
  const [ownerAddress, setOwnerAddress] = useState<string>('');

  const contractInfo = JSON.parse(localStorage.getItem('clickedCardInfo') as string);

  const isAirdropContractIntialized = () => {
    // TODO: receive isAirdropContractOpened field value to check if airdrop contract is initialized
    return (
      contractInfo.airdropContract.contractAddress !== '0x0000000000000000000000000000000000000000'
    );
  };

  const getAirdropInfo = async () => {
    console.log('==============================');
    const ownerAddressTemp = '0x49388dCC82D36B6338871C00F26bF49fF9369A1D';

    setOwnerAddress(ownerAddressTemp);
    const airdropContract = new ethers.Contract(
      contractInfo.airdropContract.contractAddress,
      airdropAbi,
      signer,
    );

    // console.log('>>airdropContractairdropContract', airdropContract);

    const roundData = await airdropContract?.getNumOfTotalRounds();
    const airdropBalance = await airdropContract?.getTotalAirdropVolumePerRound();
    const airdropWhiteList = await airdropContract?.getAirdropTargetAddresses();
    const AirdropTimestamps = await airdropContract?.getAirdropSnapshotTimestamps();
    const initialBlockNumberByRound = await airdropContract?.getInitialBlockNumberByRound(1);

    console.log('--------------------------------[');
    console.log(roundData);
    console.log(airdropBalance.toNumber());
    console.log(airdropWhiteList);
    console.log(AirdropTimestamps.map((item: any) => item.toNumber()));
    console.log(initialBlockNumberByRound);
    console.log('--------------------------------[');
    setAirRoundData(roundData);
    setAirBalance(airdropBalance.toNumber());
    setAirWhiteList(airdropWhiteList);
    setAirTimestamps(AirdropTimestamps.map((item: any) => item.toNumber()));
    setInitialBlockNumber(initialBlockNumberByRound);
  };

  useEffect(() => {
    if (typeof window !== undefined && isAirdropContractIntialized()) {
      getAirdropInfo().then((r) => console.log('getAirdropInfo', r));
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-12 mb-2">
        {/* 프로필 영역 */}
        <div className="flex items-center">
          <div className="avatar mr-5">
            <div className="w-24 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div>
            <div className="flex items-center mb-2">
              <p className="font-bold text-2xl mr-2">{daoDetails.DAOName}</p>
              <p className="text-sm opacity-50">
                $<span>{daoDetails.ticker}</span>
              </p>
            </div>
            <p className="mb-2">{daoDetails.intro}</p>
            <div>
              <a className="text-sm link link-hover " href={daoDetails.link}>
                {daoDetails.link.split('//')[1]}
              </a>
            </div>
          </div>
        </div>
        {/* 에어드롭 영역 */}
        <div className="pb-8">
          <div className="flex items-center">
            <div className="grow">
              <h2 className="font-bold text-lg mt-8 mb-2">Airdrop</h2>
            </div>
            {/* {airWhiteList?.includes(ownerAddress) && (
              <div className="flex-none">
                <div className="flex items-center">
                  <div>
                    <span>100.00</span>
                    <span> ENS</span>
                  </div> *
                  <div>
                    <NextBtn>Claim</NextBtn>
                  </div>
                </div>
              </div>
            )} */}
          </div>

          <div className="bg-[#191919] p-8 mb-3 rounded-lg">
            {/* {amounts.map((amount, index) => {
              return (
                <>
                  <div className="mb-4">
                    <span className="opacity-50 w-40 inline-block">{amount.label}</span>
                    <span>{amount.amount}</span>
                  </div>
                  <div
                    className="rounded-full"
                    style={{
                      backgroundColor: amount.color,
                      height: '16px',
                      width: `${(amount.amount / total) * 100}%`,
                    }}
                  />
                </>
              );
            })} */}
            <>
              <div className="mb-4">
                <span className="opacity-50 w-40 inline-block">Total Amounts</span>
                <span>{airBalance}</span>
              </div>
              <div
                className="rounded-full"
                style={{
                  backgroundColor: '#FFE55C',
                  height: '16px',
                  width: `${(airBalance / total) * 100}%`,
                }}
              />
            </>
          </div>

          <div className="bg-[#191919] p-8 rounded-lg">
            {airdropDetails.map((airdrop, index) => (
              <div className="mb-4">
                <span className="opacity-50 w-40 inline-block">{airdrop.label}</span>
                <span>{airdrop.value}</span>
              </div>
            ))}
            <h5 className="text-base mb-4 mt-8 ">Vest Events</h5>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Round</th>
                  </tr>
                </thead>
                <tbody>
                  {airTimestamps?.map((airdrop, index) => (
                    <tr>
                      <td>{dayjs(airdrop).format('DD/MM/YYYY')}</td>
                      <td>{index + 1} Round</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
