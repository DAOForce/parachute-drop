import React from 'react';
import IBC from '@src/assets/Icon/IBC.svg';
import Title from '../CreateSpace/Title';

function DetailPortfolio() {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex flex-row justify-between w-[98%] mt-[37.5px] mb-[32.5px]">
        <Title>My Tokens</Title>
        <Title>1,000.00 TEL</Title>
      </div>
      <IBC className="mb-[106px]" />
    </section>
  );
}

export default DetailPortfolio;
