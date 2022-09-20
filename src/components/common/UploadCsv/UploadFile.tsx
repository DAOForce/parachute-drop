import styled from '@emotion/styled';
import { FreeObject } from '@src/types';
import Papa from 'papaparse';
import React, { Dispatch, SetStateAction } from 'react';

interface UploadFileProps {
  setFileData: Dispatch<Array<FreeObject> | null>;
}

function UploadFile({ setFileData }: UploadFileProps) {
  const allowedExtensions = ['csv'];
  const getFileData = () => {
    try {
      const input = document.createElement('input');
      let inputFile;
      let parsedData;

      input.type = 'file';
      input.accept = 'csv';
      // @TODO 에러처리
      input.onchange = (_) => {
        const files = Array.from(input?.files as ArrayLike<File>);

        inputFile = files[0];

        const fileExtension = inputFile?.type.split('/')[1];

        if (!allowedExtensions.includes(fileExtension)) {
          alert('Please input a csv file');

          return;
        }

        const reader = new FileReader();

        reader.onload = async ({ target }) => {
          const csv = Papa.parse(target?.result as string, { header: true });

          parsedData = csv?.data as Array<FreeObject>;
          setFileData(parsedData);
          localStorage.setItem('whitelist', JSON.stringify(parsedData));
        };

        reader.readAsText(inputFile);
      };
      input.click();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="mb-6 inline-block text-white">No Address yet</p>
      <button
        className="btn btn-active btn-warning rounded-full font-normal text-base text-[#141416] w-[172px] capitalize"
        onClick={getFileData}
      >
        Upload File
      </button>
    </div>
  );
}

export default UploadFile;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > p {
    color: #ffffff;
    margin-bottom: 12px;
  }
  & > button {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #141416;
    width: 172px;
    text-transform: capitalize;
  }
`;
