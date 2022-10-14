import React from 'react';
import { useFormContext } from 'react-hook-form';

function EnterDetailAirdrop() {
  const { register } = useFormContext();

  return (
    <div className="form-control w-full mt-[80px]">
      <label className="label w-full" htmlFor="treasuryAddress">
        <span className="label-text w-full decoration-white">Treasury Address</span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full bg-[#ffffff1a] mb-[20px]"
        id="treasuryAddress"
        {...register('treasuryAddress')}
      />
      <label className="label w-full" htmlFor="space_homepace">
        <span className="label-text w-full decoration-white">Start Date</span>
      </label>
      <input
        type="text"
        placeholder="dd/mm/yy"
        className="input input-bordered w-full bg-[#ffffff1a] mb-[20px]"
        id="space_homepace"
        {...register('startDate')}
      />
      <label className="relative label w-full" htmlFor="rounds">
        <span className="label-text w-full decoration-white">Rounds</span>
        <p className="absolute label-text text-white left-[90%] top-[142%]">Times</p>
      </label>
      <input
        type="number"
        placeholder="0"
        className="input input-bordered w-full bg-[#ffffff1a] mb-[20px]"
        id="rounds"
        {...register('rounds')}
      />
      <label className="relative label w-full" htmlFor="interval">
        <span className="label-text w-full decoration-white">Interval</span>
        <p className="absolute label-text text-white left-[90%] top-[142%]">Days</p>
      </label>
      <input
        type="number"
        placeholder="0"
        className="input input-bordered w-full bg-[#ffffff1a] mb-[20px]"
        id="interval"
        {...register('interval')}
      />
      <label className="relative label w-full" htmlFor="duration">
        <span className="label-text w-full decoration-white">Claimable Duration</span>
        <p className="absolute label-text text-white left-[90%] top-[142%]">Days</p>
      </label>
      <input
        type="number"
        placeholder="0"
        className="input input-bordered w-full bg-[#ffffff1a] mb-[20px]"
        id="duration"
        {...register('duration')}
      />
    </div>
  );
}

export default EnterDetailAirdrop;
