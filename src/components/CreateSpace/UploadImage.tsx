/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from '@emotion/styled';
import PlusIcon from '@src/assets/Icon/PlusIcon.svg';
import { uploadImage } from '@src/utils/uploadImage';
import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { useFormContext } from 'react-hook-form';
import ClipLoader from 'react-spinners/ClipLoader';

function UploadImage() {
  const [isLoadig, setIsLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  const formContext = useFormContext();

  console.log('>>', process.env.NEXT_PUBLIC_DAO_FORCE_IMG_KEY);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    flushSync(() => {
      setIsLoading(true);
    });

    console.log('>>formContext', formContext);

    console.log('e.target.files[0]', e.target.files[0]);
    const file = e.target.files[0];

    try {
      const url = await uploadImage(file);

      console.log('>>url', url);
      // formContext.register('image').onChange(url);
      // formContext.setValue('image', url);
      formContext.setValue('image', url, { shouldDirty: true, shouldValidate: true });
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
    const reader = new FileReader();

    reader.readAsDataURL(file);

    return new Promise((resolve) => {
      reader.onload = () => {
        setPreviewImage(reader.result);
        console.log('>>reader.result', reader.result);

        resolve();
        flushSync(() => {
          setIsLoading(false);
        });
      };
    });
  };

  return (
    <StyledRoot>
      <StyledUploadButton className="upload__image">
        {previewImage ? (
          <img src={previewImage} alt="dao" />
        ) : isLoadig ? (
          <ClipLoader color="#FFE55C" loading={isLoadig} size={50} />
        ) : (
          <>
            <label className="upload__image--input" htmlFor="input-file"></label>
            <input id="input-file" type="file" onChange={handleChange} />
            <PlusIcon />
          </>
        )}
      </StyledUploadButton>
    </StyledRoot>
  );
}

export default UploadImage;

const StyledRoot = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;
const StyledUploadButton = styled.section`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .upload__image--input {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    cursor: pointer;
  }
  & img {
    object-fit: cover;
    min-height: 200px;
    min-width: 200px;
  }
  #input-file {
    display: none;
  }
  & svg {
    cursor: pointer;
  }
`;
