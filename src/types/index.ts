export interface KeplrWallet {
  address: string;
  algo: string;
  pubkey: Uint8Array;
}

export interface FreeObject {
  [key: string]: string;
}

export interface csvFile {
  parsedData: Array<FreeObject>;
  originalFile: File;
}
export interface CSV {
  data: Array<{ [key: string]: string }>;
  error: any;
  meta: any;
}

export interface postAirdropInfoInfoParams {
  name: string;
  ticker: string;
  DAOName: string;
  intro: string;
  image: string;
  link: string;
  initial_supply: number;
  owner: string;
  airdrop_timestamps: Array<number>;
  airdrop_target_addresses: Array<string>;
  airdrop_round_airdrop_amounts: number;
}
