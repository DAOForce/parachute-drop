import Navbar from '@src/components/common/Navbar';
import AirdropNav from '@src/components/Detail/AirdropNav';
import DaoProfile from '@src/components/Detail/DaoProfile';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

// id : token name값을 보냄
// 쿼리에서 보여줄 수 있는 값 -> image, DAOName, symbol, intro, homepage
// 밑의 라인에서 컨트랙트 통신 (상태)

export type CurrentTab = 'Airdrop' | 'Portfolio';

function AirdropDetail() {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState<CurrentTab>('Airdrop');
  const daoDetails = router?.query;
  console.log('>>>daoDetails', daoDetails);

  return (
    <>
      <Navbar />
      <section className="container mx-auto mt-12 mb-2">
        {/* 프로필 영역 */}
        {daoDetails.image && <DaoProfile daoDetails={daoDetails} />}
        <AirdropNav currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </section>
    </>
  );
}

export default AirdropDetail;
