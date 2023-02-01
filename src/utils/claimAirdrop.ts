import airdropAbi from '@src/lib/ScheduledAirdrop';
import { ethers } from 'ethers';

export const claimAirdrop = async (airdropAddress?: string, addr?: string, round?: number) => {
  airdropAddress = '0xD4205b46BeCddF4Edd6B4886D4780f5DE40Ca838';
  addr = '0x3Bd8C3DF50E915a8174E9bF8A19ec44FfA08fC00';
  round = 1;
  console.log(
    'claimAirdropclaimAirdropclaimAirdropclaimAirdropclaimAirdropclaimAirdropclaimAirdropclaimAirdrop',
  );
  // const provider = ethers.providers.getDefaultProvider('goerli');
  const provider = new ethers.providers.JsonRpcProvider('https://eth.bd.evmos.dev:8545');
  const AirdropContract = new ethers.Contract(airdropAddress, airdropAbi['abi'], provider);

  // return await AirdropContract.getAirdropSnapshotTimestamps();

  const result = await AirdropContract.connect(addr).claimAirdrop(round);

  console.log('result*********************', result);

  return result;
};
