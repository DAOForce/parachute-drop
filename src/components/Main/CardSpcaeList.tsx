import { beautifyAllGovernanceTokenInfoForIndex } from '@src/utils/getAllGovernanceTokenInfo';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';

import CommonError from '../common/ComomonError';
import ErrorBoundary from '../common/ErrorBoundary';
import SSRSafeSuspense from '../common/SSRSafeSuspense';
import CardSpace from './CardSpace';

function CardSpcaeList() {
  return (
    <ErrorBoundary
      renderFallback={({ error, reset }) => <CommonError error={error} reset={reset} />}
    >
      {/*  TODO skeleton 추가 */}
      <SSRSafeSuspense
        fallback={
          <div className="h-[70vh] w-[90vw] flex justify-center items-center">
            <ClipLoader size={50} color={'#ffffff'} />
          </div>
        }
      >
        <Resolved />
      </SSRSafeSuspense>
    </ErrorBoundary>
  );
}

const Resolved = () => {
  const { data } = useQuery(['space_info'], () => beautifyAllGovernanceTokenInfoForIndex(), {
    suspense: true,
  });

  useEffect(() => {
    console.log('CArd space list ====>', data);
  }, []);

  return (
    <>
      {data.map(
        (
          card: {
            id: React.Key | null | undefined;
            homepage: any;
            image: string;
            intro: string;
            ownerAddress: any;
            spaceName: any;
            tokenName: string;
            tokenSupply: any;
            tokenSymbol: string;
            governanceToken: string;
            isAirdropContractOpened: string;
            airdropTokenAddress: string;
          },
          index: number,
        ) => (
          <CardSpace
            key={card.id}
            index={index}
            homepage={card.homepage}
            image={card.image}
            intro={card.intro}
            ownerAddress={card.ownerAddress}
            spaceName={card.spaceName}
            tokenName={card.tokenName}
            tokenSupply={card.tokenSupply}
            tokenSymbol={card.tokenSymbol}
            governanceToken={card.governanceToken}
            isAirdropContractOpened={card.isAirdropContractOpened}
            airdropTokenAddress={card.airdropTokenAddress}
          />
        ),
      )}
    </>
  );
};

export default CardSpcaeList;
