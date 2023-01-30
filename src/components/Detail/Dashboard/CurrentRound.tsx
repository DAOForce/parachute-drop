import React from 'react';

interface CurrentRoundProps {
  round?: string;
  dumpingRate?: string;
  subDumpingRate?: string;
}

function CurrentRound({
  round = '3/10',
  dumpingRate = '32.00%',
  subDumpingRate = '(450,000.00 / 1,000,000.00)',
}: CurrentRoundProps) {
  return (
    <section className="flex w-100 justify-between">
      <div className="flex flex-col w-[48%] h-[157px] rounded-[20px] bg-[#191919] justify-center items-center">
        <p className="text-[16px]">Round</p>
        <h3 className="font-[700] text-[32px] mt-[16px]">{round}</h3>
      </div>
      <div className="flex flex-col w-[48%] h-[157px] rounded-[20px] bg-[#191919] justify-center items-center">
        <p className="text-[16px]">Dumping Rate</p>
        <h3 className="font-[700] text-[32px] mt-[16px]">{dumpingRate}</h3>
        <p className="text-[12px] mt-[4px]">{subDumpingRate}</p>
      </div>
    </section>
  );
}

export default CurrentRound;
