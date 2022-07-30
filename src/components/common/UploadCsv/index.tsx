import React, { Dispatch, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import UploadFile from './UploadFile';
import { FreeObject } from '@src/types';
import AddressList from './AddressList';

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
      <StyledUploadBox>
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

const StyledUploadBox = styled.div`
  width: 100%;
  height: 374px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;
