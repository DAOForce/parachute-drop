import IBC from '@src/assets/Icon/IBC.svg';
import React from 'react';

import Title from '../CreateSpace/Title';

function DetailPortfolio() {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex flex-row justify-between w-[100%]">
        <h2 className="font-bold text-2xl mt-8 mb-8">My Tokens</h2>
        <h2 className="font-bold text-2xl mt-8 mb-8">1,000.00 TEL</h2>
      </div>
      <IBC className="mb-[106px]" />
    </section>
  );
}

export default DetailPortfolio;
