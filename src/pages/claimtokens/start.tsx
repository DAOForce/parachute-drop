import Navbar from '@src/components/common/Navbar';
import type { NextPage } from 'next';

const isDelegate = false;

const ClaimTokenStart: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto text-center">
        <h1>Claim your tokens</h1>
        <div className="bg-indigo-500">
          <p>You will recieve</p>
          <p>100.00 TEL</p>
        </div>
        {isDelegate ? (
          <button className="btn btn-active btn-primary rounded-full">Delegation</button>
        ) : (
          <button className="btn btn-active btn-primary rounded-full">Claim</button>
        )}
      </div>
    </>
  );
};

export default ClaimTokenStart;
