import React, { useState } from 'react';
function CreateToken() {
  return (
    <>
      <div className="form-control w-full">
        <label className="label w-full" htmlFor="token_name">
          <span className="label-text w-full">Token Name</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
          id="token_name"
        />
        <label className="label w-full" htmlFor="symbol">
          <span className="label-text w-full" id="symbol">
            Token Symbol
          </span>
        </label>
        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
        <label className="label w-full" htmlFor="token_supply">
          <span className="label-text w-full">Token Supply</span>
        </label>
        <input
          type="number"
          placeholder="0.00"
          className="input input-bordered w-full"
          id="token_supply"
        />
        <label className="label w-full" htmlFor="owner_address">
          <span className="label-text w-full">Owner Address</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
          id="owner_address"
        />
      </div>
    </>
  );
}

export default CreateToken;
