import styled from '@emotion/styled';
import { csvFile, FreeObject } from '@src/types';
import React from 'react';

interface AddressListProps {
  fileData: csvFile | null;
}

function AddressList({ fileData }: AddressListProps) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <tbody>
          {fileData?.parsedData.map((item, idx) => {
            return (
              <tr key={idx}>
                <td className="border-b-[1px] border-solid border-slate-500 bg-transparent">
                  {item.address}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AddressList;
