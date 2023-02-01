import Navbar from '@src/components/common/Navbar';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const isDelegate = false;

const ClaimTokenStart: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="container mx-auto text-center">
        <h1>Claim your tokens</h1>
        <div className="bg-indigo-500">
          <p>You will recieve</p>
          <p>
            {router.query.balance ? Math.floor(Number(router.query.balance) / 3) : 100.0}{' '}
            {router.query.tokenSymbol ? router.query.tokenSymbol : 'TEL'}
          </p>
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
