import { postAirdropInfoInfoParams } from '@src/types';
import axios from 'axios';

const BASE_URL = 'http://3.38.106.130:8080';

export const client = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export const postAirdropInfo = async ({
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
  console.log(
    '>>post api',
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
  );
  const post = await client.post('/mint', {
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
  });

  console.log('>>post data result', post);

  return post;
};
