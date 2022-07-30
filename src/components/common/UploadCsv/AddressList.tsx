import styled from '@emotion/styled';
import { FreeObject } from '@src/types';
import React from 'react';

interface AddressListProps {
  fileData: Array<FreeObject>;
}

function AddressList({ fileData }: AddressListProps) {
  return (
    <StyledRoot className="overflow-x-auto">
      <table className="table w-full">
        <tbody>
          {fileData.map((item, idx) => {
            return (
              <tr key={idx}>
                <td>{item.address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </StyledRoot>
  );
}

export default AddressList;

const StyledRoot = styled.div`
  width: 100%;
  & td {
    background: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
`;
