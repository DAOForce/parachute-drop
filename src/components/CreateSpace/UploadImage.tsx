/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from '@emotion/styled';
import PlusIcon from '@src/assets/Icon/PlusIcon.svg';
import { uploadImage } from '@src/utils/uploadImage';
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { useFormContext } from 'react-hook-form';
import ClipLoader from 'react-spinners/ClipLoader';

function UploadImage() {
  const [isLoadig, setIsLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>('');
  const inputFileRef = useRef<HTMLInputElement | null>(null);

  const { setValue, getValues } = useFormContext();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    flushSync(() => {
      setIsLoading(true);
    });

    const file = e.target.files[0];

    try {
      const url = await uploadImage(file);

      setValue('image', url, { shouldDirty: true, shouldValidate: true });
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
    const reader = new FileReader();

    reader.readAsDataURL(file);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setPreviewImage(reader.result as string);

        resolve();
        flushSync(() => {
          setIsLoading(false);
        });
      };
    });
  };

  const handleClick = () => {
    inputFileRef.current?.click();
  };

  useEffect(() => {
    if (getValues().image) {
      setPreviewImage(getValues().image);
    }
  }, []);

  return (
    <section className="w-full flex justify-center items-center mt-[80px]">
      <div className="w-[200px] h-[200px] rounded-[50%] bg-[#ffffff4d] flex justify-center items-center overflow-hidden">
        {previewImage && (
          <img
            src={previewImage}
            alt="dao"
            className="object-cover min-h-[200px] min-w-[200px] z-10"
            onClick={handleClick}
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
            role="button"
            tabIndex={0}
          />
        )}
        {isLoadig ? (
          <ClipLoader color="#FFE55C" loading={isLoadig} size={50} className="z-20 absolute" />
        ) : (
          <>
            <label
              className="w-[200px] h-[200px] rounded-[50%] absolute cursor-pointer"
              htmlFor="input-file"
            ></label>
            <input
              ref={inputFileRef}
              className="hidden"
              type="file"
              onChange={handleChange}
              id="input-file"
            />
            <PlusIcon className="cursor-pointer" />
          </>
        )}
      </div>
    </section>
  );
}

export default UploadImage;
