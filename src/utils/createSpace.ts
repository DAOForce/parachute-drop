import { STORE_ADDRESS } from '@src/constants';
import DAOForceGovernor from '@src/lib/DAOForceGovernor';
import DAOForceToken from '@src/lib/DAOForceToken';
import { CreateSpaceFormType } from '@src/pages/create_space';
import { ethers } from 'ethers';

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
  // get ether provider
  const provider = new ethers.providers.Web3Provider(window.ethereum as any, 'any');

  // Prompt user for account connections
  await provider.send('eth_requestAccounts', []);
  const signer = provider.getSigner();

  // deploy token contract
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
    STORE_ADDRESS,
  );

  console.log(
    '[log] TOKEN CONTRACT params',
    tokenName,
    tokenSymbol,
    spaceName,
    intro,
    image,
    homepage,
    tokenSupply,
    STORE_ADDRESS,
  );
  const receipt1 = await tokenContract.deployTransaction.wait();

  localStorage.setItem('tokenContractAddress', tokenContract.address);

  console.log('[log] TOKEN CONTRACT tx Receipt', receipt1);
  console.log('[log] TOKEN CONTRACT address', tokenContract.address);

  // deploy governor contract
  const governorFactory = new ethers.ContractFactory(
    DAOForceGovernor['abi'],
    DAOForceGovernor['bytecode'],
    signer,
  );
  const governorContract = await governorFactory.deploy(tokenContract.address);

  const receipt2 = await tokenContract.deployTransaction.wait();

  localStorage.setItem('governorContractAddress', tokenContract.address);

  console.log('[log] GOVERNOR CONTRACT address', governorContract.address);
  console.log('[log] GOVERNOR CONTRACT tx Receipt', receipt2);
};
