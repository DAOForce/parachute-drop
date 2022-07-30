import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import UploadFile from './UploadFile';
import { FreeObject } from '@src/types';
import AddressList from './AddressList';

function UploadCsv() {
  const [fileData, setFileData] = useState<Array<FreeObject> | null>(null);
  useEffect(() => {
    console.log('>>fileData', fileData);
  }, [fileData]);
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
  width: 1008px;
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
