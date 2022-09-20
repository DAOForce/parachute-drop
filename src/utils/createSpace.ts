import DAOForceToken from '@src/lib/DAOForceToken';
import DAOForceGovernor from '@src/lib/DAOForceGovernor';
import { ethers } from 'ethers';
import { CreateSpaceFormType } from '@src/pages/create_space';

export const createSpace = async ({
  homepage,
  image,
  intro,
  ownerAddress,
  spaceName,
  tokenName,
  tokenSupply,
  tokenSymbol,
}: CreateSpaceFormType) => {
  const signer = new ethers.providers.Web3Provider((window as any).ethereum).getSigner();

  const tokenFactory = new ethers.ContractFactory(
    DAOForceToken['abi'],
    DAOForceToken['bytecode'],
    signer,
  );
  const tokenContract = await tokenFactory.deploy(
    tokenName,
    tokenSymbol,
    spaceName,
    intro,
    image,
    homepage,
    tokenSupply,
    '0x24516E7EA22C009288eC666bCaa2593385D096D5',
  );

  const receipt0 = await tokenContract.deployed();
  console.log(' >>>>>>>>> RECEIPT ) >>>>>>>>>>>>>>>> ', receipt0);

  localStorage.setItem('tokenContractAddress', tokenContract.address);
  console.log('token contract address', tokenContract.address);

  const governorFactory = new ethers.ContractFactory(
    DAOForceGovernor['abi'],
    DAOForceGovernor['bytecode'],
    signer,
  );
  const governorContract = await governorFactory.deploy(tokenContract.address);
  const receipt = await governorContract.deployed();

  console.log('governor contract address', governorContract.address);
  console.log('receipt >>>>>>>>>>>>>>>>>>>>>>>>>>>>>', receipt);
};
