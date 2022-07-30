import styled from '@emotion/styled';
import { FreeObject } from '@src/types';
import Papa from 'papaparse';
import React, { Dispatch, SetStateAction } from 'react';

interface UploadFileProps {
  setFileData: Dispatch<Array<FreeObject> | null>;
}

function UploadFile({ setFileData }: UploadFileProps) {
  const getFileData = () => {
    try {
      const input = document.createElement('input');
      let inputFile;
      let parsedData;

      input.type = 'file';
      input.accept = 'csv';
      input.onchange = (_) => {
        // you can use this method to get file and perform respective operations
        const files = Array.from(input?.files as ArrayLike<File>);

        inputFile = files[0];

        const reader = new FileReader();
        reader.onload = async ({ target }) => {
          const csv = Papa.parse(target?.result as string, { header: true });
          parsedData = csv?.data as Array<FreeObject>;
          setFileData(parsedData);
        };

        reader.readAsText(inputFile);
      };
      input.click();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <StyledRoot>
      <p>No Address yet</p>
      <button className="btn btn-active btn-primary rounded-full" onClick={getFileData}>
        Upload File
      </button>
    </StyledRoot>
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
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #141416;
    width: 172px;
    text-transform: capitalize;
  }
`;
