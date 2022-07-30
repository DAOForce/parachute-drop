import React, { useState } from 'react';
import styled from '@emotion/styled';

function UploadCsv() {
  const [fileData, setFileData] = useState<string | null>(null);
  return (
    <StyledRoot>
      <StyledAddressBox>
        <p>Address</p>
      </StyledAddressBox>
      <StyledUploadBox>
        {fileData ? <p>데이터 있음 우헿ㅎ</p> : <p>No Address yet</p>}
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
`;

const StyledUploadBox = styled.div`
  width: 100%;
  height: 243px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
