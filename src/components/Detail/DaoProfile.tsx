import Image from 'next/image';
import React from 'react';

interface DaoProfileProps {
  image?: string;
  spaceName?: string;
  intro?: string;
  homepage?: string;
  tokenName?: string;
  tokenSymbol?: string;
  tokenSupply?: string;
  ownerAddress?: string;
}

interface DaoDetails {
  daoDetails: DaoProfileProps;
}

function DaoProfile({ daoDetails }: DaoDetails) {
  return (
    <div className="flex items-center">
      <div className="avatar mr-5">
        <div className="w-24 rounded-full overflow-hidden">
          <Image
            src={daoDetails.image as string}
            alt="dao"
            layout="fill"
            blurDataURL={daoDetails.image as string}
            placeholder="blur"
            className="rounded-full"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center mb-2">
          <p className="font-bold text-3xl mr-2">{daoDetails.spaceName}</p>
          <p className="text-sm font-medium opacity-50">
            $<span>{daoDetails.tokenSymbol}</span>
          </p>
        </div>
        <p className="mb-2 opacity-80">{daoDetails.intro}</p>
        <div>
          <a className="link text-sm opacity-60 font-bold" href={daoDetails.homepage}>
            {daoDetails.homepage?.split('//')[1]}
          </a>
        </div>
      </div>
    </div>
  );
}

export default DaoProfile;
