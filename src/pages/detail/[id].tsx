import Navbar from '@src/components/common/Navbar';
import AirdropNav from '@src/components/Detail/AirdropNav';
import AirdropResult from '@src/components/Detail/AirdropResult';
import DaoProfile from '@src/components/Detail/DaoProfile';
import DetailPortfolio from '@src/components/Detail/DetailPortfolio';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

// id : token name값을 보냄
// 쿼리에서 보여줄 수 있는 값 -> image, DAOName, symbol, intro, homepage
// 밑의 라인에서 컨트랙트 통신 (상태)

export type CurrentTab = 'Airdrop' | 'Portfolio';

function AirdropDetail() {
  console.log('>http://localhost:3000/create_space');
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState<CurrentTab>('Airdrop');
  const daoDetails = router?.query;

  return (
    <>
      <Navbar />
      <section className="container mx-auto mt-12 mb-2">
        {daoDetails.image && (
          <>
            {/* 프로필 영역 */}
            <DaoProfile daoDetails={daoDetails} />
            <AirdropNav currentTab={currentTab} setCurrentTab={setCurrentTab} />
            {currentTab === 'Airdrop' ? (
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              <AirdropResult />
            ) : (
              <DetailPortfolio />
            )}
          </>
        )}
      </section>
    </>
  );
}

export default AirdropDetail;
