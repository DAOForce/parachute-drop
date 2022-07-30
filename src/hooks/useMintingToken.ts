import { postAirdropInfo } from '@src/lib/api';
import { postAirdropInfoInfoParams } from '@src/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

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
      onMutate: async () => {
        console.log('>>during onMutate');
      },
      onSuccess: () => {
        console.log('>>success');
      },
    },
  );
};

export default useMintingToken;
