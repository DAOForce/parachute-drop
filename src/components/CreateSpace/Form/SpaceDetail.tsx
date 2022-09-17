import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import UploadImage from '../UploadImage';

function SpaceDetail() {
  const { register } = useFormContext();

  return (
    <>
      <UploadImage />
      <div className="form-control w-full mt-[80px]">
        <label className="label w-full" htmlFor="space_name">
          <span className="label-text w-full decoration-white">Name</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full bg-[#ffffff1a] mb-[20px]"
          id="space_name"
          {...register('spaceName')}
        />
        <label className="label w-full" htmlFor="space_intro">
          <span className="label-text w-full decoration-white">Intro</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full bg-[#ffffff1a] mb-[20px]"
          id="space_intro"
          {...register('intro')}
        />
        <label className="label w-full" htmlFor="space_homepace">
          <span className="label-text w-full decoration-white">Homepage</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full bg-[#ffffff1a] mb-[20px]"
          id="space_homepace"
          {...register('homepage')}
        />
      </div>
    </>
  );
}

export default SpaceDetail;
