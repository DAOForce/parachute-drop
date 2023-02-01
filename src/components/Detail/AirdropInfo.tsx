import useMounted from '@src/hooks/useMounted';
import { findAllEligibleAirdroppedTokenByUser } from '@src/utils/findAllEligibleAirdroppedTokenByUser';
import { getAirdropAmountsPerRound } from '@src/utils/getAirdropAmounts';
import { getAirdropSnapshotTimestamps } from '@src/utils/getAirdropSnapshotTimestamps';
import { getAirdropTargetAddresses } from '@src/utils/getAirdropTargetAddresses';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';

import CommonError from '../common/ComomonError';
import ErrorBoundary from '../common/ErrorBoundary';
import NextBtn from '../common/NextBtn';
import SSRSafeSuspense from '../common/SSRSafeSuspense';
import AirdropInfoPerUser from './AirdropInfoPerUser';

{
  /* claim 대상자의 경우 airdrop info */
}

const AirdropInfo = () => {
  return (
    <ErrorBoundary
      renderFallback={({ error, reset }) => <CommonError error={error} reset={reset} />}
    >
      {/*  TODO skeleton 추가 */}
      <SSRSafeSuspense fallback={<ClipLoader size={50} color={'#ffffff'} />}>
        <Resolved />
      </SSRSafeSuspense>
    </ErrorBoundary>
  );
};

/* TODO 
1. router에서 값 가져오기
2. findAllEligibleAirdroppedTokenByUser 으로 유저가 받을 수 있는 모든 토큰 어드레스 가져옴 -> 생략
3. 라우터에서 받아온 값으로 timestamps, amountPerRound, airdroWhiteList 가져옴, 그 값을 가지고 유저 파악
4. 클레임 여부에 따라 보여주는 claim버튼 활성화 / 비활성화 제어
*/
function Resolved() {
  const isMounted = useMounted();

  const router = useRouter();
  const [isAirdropContractOpened, setIsAirdropContractOpened] = useState<RouterQuery>();
  const [airdropTokenAddress, setAirdropTokenAddress] = useState<RouterQuery>();
  const [governanceToken, setGovernanceToken] = useState<RouterQuery>();
  const [tokenSupply, setTokenSupply] = useState<RouterQuery>();
  const [tokenSymbol, setTokenSymbol] = useState<RouterQuery>();

  const userAddress = isMounted ? localStorage?.getItem('ownerAddress') : false;

  useEffect(() => {
    const {
      isAirdropContractOpened,
      airdropTokenAddress,
      governanceToken,
      tokenSupply,
      tokenSymbol,
    } = router.query;

    typeof governanceToken === 'string' &&
      localStorage.setItem('tokenContractAddress', governanceToken);
    typeof tokenSupply === 'string' && localStorage.setItem('tokenSupply', tokenSupply);

    setIsAirdropContractOpened(isAirdropContractOpened);
    setAirdropTokenAddress(airdropTokenAddress);
    setGovernanceToken(governanceToken);
    setTokenSupply(tokenSupply);
    setTokenSymbol(tokenSymbol);
  }, [router?.query]);

  // 유저가 받을 수 있는 모든 토큰 가져옴 -> 추후 my airdrop page
  // const getList = async () => {
  //   if (userAddress === false) {
  //     return;
  //   }
  //   const data = await findAllEligibleAirdroppedTokenByUser(userAddress);

  //   setUserEligibleTokenList(data);
  // };

  switch (isAirdropContractOpened) {
    case 'true':
      return (
        <section className="">
          <AirdropInfoPerUser
            airdropTokenAddress={airdropTokenAddress}
            governanceToken={governanceToken}
            tokenSupply={tokenSupply}
            userAddress={userAddress}
            tokenSymbol={tokenSymbol}
          />
        </section>
      );
    default:
      return (
        <>
          <div className="pb-8">
            <div className="flex items-center">
              <div className="grow">
                <h2 className="font-bold text-lg mt-8 mb-2">
                  The owner has not initialized Airdrop Contract for the Governance Token yet.
                </h2>
              </div>
            </div>
          </div>
        </>
      );
  }
}

export default AirdropInfo;
