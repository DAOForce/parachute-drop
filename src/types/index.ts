export interface KeplrWallet {
  address: string;
  algo: string;
  pubkey: Uint8Array;
}

export interface FreeObject {
  [key: string]: string;
}
export interface CSV {
  data: Array<{ [key: string]: string }>;
  error: any;
  meta: any;
}
