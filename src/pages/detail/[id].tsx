import Navbar from '@src/components/common/Navbar';
import { useRouter } from 'next/router';
import React from 'react';

// id : token name값을 보냄
// 쿼리에서 보여줄 수 있는 값 -> image, DAOName, symbol, intro, homepage
// 밑의 라인에서 컨트랙트 통신 (상태)

function AirdropDetail() {
  const router = useRouter();
  const daoDetails = router?.query;

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-12 mb-2">
        {/* 프로필 영역 */}
        <div className="flex items-center">
          <div className="avatar mr-5">
            <div className="w-24 rounded-full">
              <img src={daoDetails.image} />
            </div>
          </div>
          <div>
            <div className="flex items-center mb-2">
              <p className="font-bold text-2xl mr-2">{daoDetails.spaceName}</p>
              <p className="text-sm opacity-50">
                $<span>{daoDetails.tokenSymbol}</span>
              </p>
            </div>
            <p className="mb-2">{daoDetails.intro}</p>
            <div>
              <a className="text-sm link link-hover " href={daoDetails.homepage}>
                {daoDetails?.homepage?.split('//')[1]}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AirdropDetail;
