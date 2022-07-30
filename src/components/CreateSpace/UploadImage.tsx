import styled from '@emotion/styled';
import React, { Dispatch, SetStateAction, useState, useRef } from 'react';
import PlusIcon from '@src/assets/Icon/PlusIcon.svg';
import { create as ipfsHttpClient } from 'ipfs-http-client';
import { flushSync } from 'react-dom';
import ClipLoader from 'react-spinners/ClipLoader';

interface UploadImageProps {
  imageData: string | null;
  setImageData: Dispatch<SetStateAction<string | null>>;
}

function UploadImage({ imageData, setImageData }: UploadImageProps) {
  const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0');
  const inputRef = useRef(null);
  const [isLoadig, setIsLoading] = useState(false);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    flushSync(() => {
      setIsLoading(true);
    });
    const file = e.target.files[0];
    try {
      const added = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setImageData(url);
      console.log('>>url', url);
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
    flushSync(() => {
      setIsLoading(false);
    });
  };
  const handleImageClick = () => {
    setImageData(null);
    console.log(inputRef);
  };

  return (
    <StyledRoot className="upload__image">
      {imageData ? (
        <img src={imageData} alt="dao image" onClick={handleImageClick} />
      ) : isLoadig ? (
        <ClipLoader color="#FFE55C" loading={isLoadig} size={50} />
      ) : (
        <>
          <label className="upload__image--input" htmlFor="input-file"></label>
          <input ref={inputRef} id="input-file" type="file" name="Asset" onChange={handleChange} />
          <PlusIcon />
        </>
      )}
    </StyledRoot>
  );
}

export default UploadImage;

const StyledRoot = styled.div`
  width: 271px;
  height: 271px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .upload__image--input {
    width: 271px;
    height: 271px;
    border-radius: 50%;
    position: absolute;
    cursor: pointer;
  }
  & img {
    object-fit: cover;
    height: 271px;
  }
  #input-file {
    display: none;
  }
  & svg {
    cursor: pointer;
  }
`;
