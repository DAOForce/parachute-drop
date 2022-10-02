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
  // @ts-ignore
  const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
  // Prompt user for account connections
  await provider.send('eth_requestAccounts', []);
  const signer = provider.getSigner();
  console.log('Account:', await signer.getAddress());

  console.log(' PROVIDER >>>>>>>>> ', provider);

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

  console.log(
    '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> TOKEN CONTRACT ',
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
  const receipt1 = await tokenContract.deployTransaction.wait();
  console.log(' >>>>>>>>> RECEIPT 1 >>>>>>>>>>>>>>>> ', receipt1);

  localStorage.setItem('tokenContractAddress', tokenContract.address);
  console.log('token contract address', tokenContract.address);

  const governorFactory = new ethers.ContractFactory(
    DAOForceGovernor['abi'],
    DAOForceGovernor['bytecode'],
    signer,
  );
  const governorContract = await governorFactory.deploy(tokenContract.address);
  const receipt = await governorContract.deployed();

  const receipt2 = await tokenContract.deployTransaction.wait();

  console.log('governor contract address', governorContract.address);
  console.log('receipt >>>>>>>>>>>>>>>>>>>>>>>>>>>>>', receipt2);
};
