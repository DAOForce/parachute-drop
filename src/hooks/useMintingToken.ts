import { postAirdropInfo } from '@src/lib/api';
import { postAirdropInfoInfoParams } from '@src/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
const ethers = require('ethers');

const useMintingToken = ({
  name,
  ticker,
  DAOName,
  intro,
  image,
  link,
  initial_supply,
  owner,
  airdrop_timestamps,
  airdrop_target_addresses,
  airdrop_round_airdrop_amounts,
}: postAirdropInfoInfoParams) => {
  const queryClient = useQueryClient();
  // const queryKeys = [flag] as string[];

  return useMutation(
    async () =>
      postAirdropInfo({
        name,
        ticker,
        DAOName,
        intro,
        image,
        link,
        initial_supply,
        owner,
        airdrop_timestamps,
        airdrop_target_addresses,
        airdrop_round_airdrop_amounts,
      }),
    {
      onMutate: async () => {},
      onSuccess: ({ data }) => {
        localStorage.setItem('airdropInfo', JSON.stringify(data));
        // try {
        //   const provider = new ethers.providers.JsonRpcProvider('https://eth.bd.evmos.dev:8545');
        //   const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
        //   const airdropContract = new ethers.Contract(contractAddr, abi, signer);

        //   const receipt = await airdropContract.executeAirdropRound(tokenContractAddress);
        // } catch (err) {}
      },
    },
  );
};

export default useMintingToken;
