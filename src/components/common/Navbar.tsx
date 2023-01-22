import { MetaMaskInpageProvider } from '@metamask/providers';
import Logo from '@src/assets/logo.svg';
import useMounted from '@src/hooks/useMounted';
// import TestEvmos from '@src/components/main/TestEvmos';
import { communicateWithWallet, isLogout, walletIdType } from '@src/utils/connectWallet';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Add from '@src/assets/Icon/add.svg';

function Navbar() {
  const router = useRouter();
  const isMounted = useMounted();
  const [ownerAddress, setOwnerAddress] = useState<string | undefined | null>('');

  const handleCreateSpace = async () => {
    await router.push('/create_space');
  };

  useEffect(() => {
    if (isMounted) {
      setOwnerAddress(localStorage.getItem('ownerAddress'));
    }
  }, [ownerAddress, isMounted]);

  const handleClick = () => {
    router.push('/');
  };

  const ownerAddressShort = ownerAddress?.substring(0, 5);
  const ownerAddressShort2 = ownerAddress?.substring(ownerAddress.length - 5, ownerAddress.length);

  const handleWalletClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const targetId = e.currentTarget.id as walletIdType;
    const address = await communicateWithWallet(targetId);

    setOwnerAddress(address);
  };

  const [isHover, setIsHover] = useState(false);

  const handleConnect = () => {
    if (isLogout()) {
      return;
    }
    setOwnerAddress('');
    localStorage.removeItem('ownerAddress');
  };

  return (
    <div className="navbar bg-[#000]">
      <div className="flex-1">
        <button className="btn btn-ghost normal-case text-xl" onClick={handleClick}>
          <Logo />
        </button>
      </div>

      {ownerAddress ? (
        <>
          <button
            className="btn btn-sm btn-custom hover:btn-custom-hover"
            onClick={() => handleCreateSpace()}
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <div className="flex items-center">
              <Add
                viewBox="0 0 24 24"
                fill={`${isHover ? '#111111' : '#ffffff'}`}
                style={{ width: '20', height: '20' }}
              />
              Create Space
            </div>
          </button>
          <button
            className="btn btn-sm btn-custom hover:btn-custom-hover ml-1"
            onClick={handleConnect}
          >
            {ownerAddressShort}...{ownerAddressShort2}
          </button>
        </>
      ) : (
        <div className="flex-none">
          <label
            htmlFor="my-modal-4"
            className="btn btn-sm modal-button btn-text-custom hover:btn-text-custom-hover"
          >
            Connect Wallet
          </label>

          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer bg-black bg-opacity-50">
            <div className="modal-box relative bg-[#222]">
              <h3 className="font-bold text-xl text-center">Connect Wallet</h3>
              <p className="py-4 text-center">Choose wallet to connect to the blockchain.</p>
              <div className="grid gap-4 mt-2">
                <button
                  className="btn btn-custom2 btn-block btn-custom hover:btn-custom-hover"
                  onClick={handleWalletClick}
                  type="button"
                  id="metamask"
                >
                  Metamask Wallet
                </button>

                <button
                  className="btn btn-custom2 btn-block btn-custom hover:btn-custom-hover"
                  onClick={handleWalletClick}
                  type="button"
                  id="keplr"
                >
                  Keplr Wallet
                </button>
              </div>
            </div>
          </label>

          {/* <TestEvmos ownerAddress={ownerAddress} /> */}
        </div>
      )}
    </div>
  );
}

export default Navbar;
