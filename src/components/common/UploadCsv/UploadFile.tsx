import styled from '@emotion/styled';
import { csvFile, FreeObject } from '@src/types';
import { uploadCsvFile } from '@src/utils/uploadFile';
import Papa from 'papaparse';
import React, { Dispatch, SetStateAction } from 'react';

interface UploadFileProps {
  setFileData: Dispatch<csvFile | null>;
}

function UploadFile({ setFileData }: UploadFileProps) {
  const allowedExtensions = ['csv'];
  const getFileData = async () => {
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
          let totalSupply = 0;

          parsedData.map((item) => (totalSupply += Number(item?.amounts)));
          const tokenSupply = Number(localStorage.getItem('tokenSupply'));

          console.log('totalSupply--', totalSupply);
          console.log('tokenSupply (찐)', tokenSupply);
          if (totalSupply > tokenSupply) {
            alert('Total supply must be smaller than token supply');

            return;
          }
          setFileData({ parsedData, originalFile: files[0] });
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
