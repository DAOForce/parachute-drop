import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
function CreateToken() {
  const { register } = useFormContext();

  return (
    <>
      <div className="form-control w-full mt-[80px]">
        <label className="label w-full" htmlFor="token_name">
          <span className="label-text w-full decoration-white">Token Name</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full bg-[#ffffff1a] mb-[20px]"
          id="token_name"
          {...register('tokenName')}
        />
        <label className="label w-full" htmlFor="symbol">
          <span className="label-text w-full decoration-white" id="symbol">
            Token Symbol
          </span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full bg-[#ffffff1a] mb-[20px]"
          {...register('tokenSymbol')}
        />
        <label className="label w-full" htmlFor="token_supply">
          <span className="label-text w-full decoration-white">Token Supply</span>
        </label>
        <input
          type="number"
          placeholder="0.00"
          className="input input-bordered w-full bg-[#ffffff1a] mb-[20px]"
          id="token_supply"
          {...register('tokenSupply')}
        />
        <label className="label w-full" htmlFor="owner_address">
          <span className="label-text w-full decoration-white">Owner Address</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full bg-[#ffffff1a] mb-[20px]"
          id="owner_address"
          {...register('ownerAddress')}
        />
      </div>
    </>
  );
}

export default CreateToken;
