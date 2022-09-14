import React, { useState } from 'react';

import UploadImage from '../UploadImage';

function SpaceDetail() {
  const [imageData, setImageData] = useState<string | null>(null);

  return (
    <>
      <UploadImage setImageData={setImageData} />
      <div className="form-control w-full">
        <label className="label w-full" htmlFor="space_name">
          <span className="label-text w-full">Name</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
          id="space_name"
        />
        <label className="label w-full" htmlFor="space_intro">
          <span className="label-text w-full">Intro</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
          id="space_intro"
        />
        <label className="label w-full" htmlFor="space_homepace">
          <span className="label-text w-full">Homepage</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
          id="space_homepace"
        />
      </div>
    </>
  );
}

export default SpaceDetail;
