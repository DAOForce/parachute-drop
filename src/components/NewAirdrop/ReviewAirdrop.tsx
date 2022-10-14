import React from 'react';
import { useFormContext } from 'react-hook-form';

function ReviewAirdrop() {
  const { getValues } = useFormContext();

  return (
    <section className="w-[512px] h-fit p-[64px] bg-[#ffffff1a] rounded-[20px] flex flex-col justify-center items-center ml-[24px]">
      <h2 className="font-normal text-sm">Treasury address</h2>
      <p className="mb-[24px] mt-[10px] text-center font-bold color-white w-[452px] break-words text-[40px]">
        {getValues().treasuryAddress}
      </p>
      <h2 className="font-normal text-sm">Rounds</h2>
      <p className="mb-[24px] mt-[10px] text-center font-bold color-white w-[452px] break-words text-[40px]">
        {getValues().rounds} times
      </p>
      <h2 className="font-normal text-sm">Interval</h2>
      <p className="mb-[24px] mt-[10px] text-center font-bold color-white w-[452px] break-words text-[40px]">
        {getValues().interval} days
      </p>
      <h2 className="font-normal text-sm">Claimable Duration</h2>
      <p className="text-center mt-[10px] font-bold color-white w-[452px] break-words text-[40px]">
        {getValues().duration} days
      </p>
    </section>
  );
}

export default ReviewAirdrop;
