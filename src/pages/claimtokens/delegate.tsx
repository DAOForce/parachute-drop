import styled from '@emotion/styled';
import Navbar from '@src/components/common/Navbar';
import type { NextPage } from 'next';
import { useState } from 'react';

const ClaimTokenStart: NextPage = () => {
  const delegationList = [
    { address: '0x9E3EbaA4c1714326426524328Aa1128ef4d7824f', amount: '0.00' },
    { address: '0x9E3EbaA4c1714326426524328Aa1128ef4d7824f', amount: '0.00' },
    { address: '0x9E3EbaA4c1714326426524328Aa1128ef4d7824f', amount: '0.00' },
    { address: '0x9E3EbaA4c1714326426524328Aa1128ef4d7824f', amount: '0.00' },
    { address: '0x9E3EbaA4c1714326426524328Aa1128ef4d7824f', amount: '0.00' },
    { address: '0x9E3EbaA4c1714326426524328Aa1128ef4d7824f', amount: '0.00' },
  ];

  const [selectedNumber, setSelectedNumber] = useState<number>(0);

  return (
    <>
      <Navbar />

      <div className="container mx-auto text-center">
        <h1>Choose a delegate</h1>
        <div className="grid grid-cols-3 gap-4">
          {delegationList?.map((item, idx) => {
            return selectedNumber === idx ? (
              <CardSelected key={idx} onClick={() => setSelectedNumber(idx)}>
                <p>{item.address}</p>
                <p>{item.amount}</p>
              </CardSelected>
            ) : (
              <Card key={idx} onClick={() => setSelectedNumber(idx)}>
                <p>{item.address}</p>
                <p>{item.amount}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ClaimTokenStart;

const CardSelected = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 12px;
  border: 1px solid yellow;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 12px;
`;
