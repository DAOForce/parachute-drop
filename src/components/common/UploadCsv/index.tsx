import React, { Dispatch, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import UploadFile from './UploadFile';
import { FreeObject } from '@src/types';
import AddressList from './AddressList';
import { css } from '@emotion/react';

interface UploadCsvProps {
  fileData: Array<FreeObject> | null;
  setFileData: Dispatch<Array<FreeObject> | null>;
}
function UploadCsv({ fileData, setFileData }: UploadCsvProps) {
  return (
    <StyledRoot>
      <StyledAddressBox>
        <p>Address</p>
      </StyledAddressBox>
      <StyledUploadBox fileData={fileData}>
        {fileData ? <AddressList fileData={fileData} /> : <UploadFile setFileData={setFileData} />}
      </StyledUploadBox>
    </StyledRoot>
  );
}

export default UploadCsv;

const StyledRoot = styled.section`
  width: 868.5px;
`;
const StyledAddressBox = styled.div`
  width: 100%;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-left: 16px;
`;

const StyledUploadBox = styled.div<{ fileData: any }>`
  width: 100%;
  ${({ fileData }) =>
    fileData
      ? css`
          height: fit-content;
        `
      : css`
          height: 374px;
        `}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;
