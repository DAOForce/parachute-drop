import { ethers } from 'ethers';

const address = '0xfb6a4661e035b58e6eac9c713ab9ba59ee657022'; // Goerli
const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'governanceTokenAddr',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'message',
        type: 'string',
      },
    ],
    name: 'NewGovernanceTokenStored',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'governanceTokenAddr',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'airdropTokenAddr',
        type: 'address',
      },
      {
        internalType: 'address[]',
        name: '_airdropTargetAddresses',
        type: 'address[]',
      },
    ],
    name: 'addAirdropTokenAddress',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'userTokenAddr',
        type: 'address',
      },
    ],
    name: 'findAirdropTokenAddressListByUserAddr',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'airdropTokenAddress',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'governanceTokenAddress',
            type: 'address',
          },
        ],
        internalType: 'struct MatchedGovAirdropTokenDTO[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'governanceTokenAddr',
        type: 'address',
      },
    ],
    name: 'findGovernanceTokenListIdByAddr',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAllGovernanceTokenInfo',
    outputs: [
      {
        components: [
          {
            internalType: 'bool',
            name: 'isAirdropContractOpened',
            type: 'bool',
          },
          {
            internalType: 'address',
            name: 'airdropTokenAddress',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'totalSupply',
                type: 'uint256',
              },
              {
                internalType: 'string',
                name: 'name',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'symbol',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'DAOName',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'intro',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'image',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'link',
                type: 'string',
              },
              {
                internalType: 'address',
                name: 'owner',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'tokenContractAddress',
                type: 'address',
              },
            ],
            internalType: 'struct CommonStructs.TokenInfo',
            name: 'tokenInfo',
            type: 'tuple',
          },
          {
            internalType: 'address[]',
            name: 'airdropTargetAddressList',
            type: 'address[]',
          },
        ],
        internalType: 'struct GovernanceTokenInfo[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'totalSupply',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'symbol',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'DAOName',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'intro',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'image',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'link',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'tokenContractAddress',
            type: 'address',
          },
        ],
        internalType: 'struct CommonStructs.TokenInfo',
        name: '_tokenInfo',
        type: 'tuple',
      },
    ],
    name: 'storeNewGovernanceToken',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export const getAllGovernanceTokenInfo = async () => {
  const provider = ethers.providers.getDefaultProvider('goerli');
  console.log('>>>>>>>> PROVIDER >>>>>>>>>', provider);
  const ContractInfoStore = new ethers.Contract(address, abi, provider);

  return await ContractInfoStore.getAllGovernanceTokenInfo();
};

export const beautifyAllGovernanceTokenInfoForIndex = async () => {
  const getAllGovernanceTokenInfoResult = await getAllGovernanceTokenInfo();
  const response = [
    getAllGovernanceTokenInfoResult.map((item: { tokenInfo: any }) => {
      return {
        image: item.tokenInfo.image,
        DAOName: item.tokenInfo.DAOName,
        intro: item.tokenInfo.intro,
        ticker: item.tokenInfo.symbol,
      };
    }),
  ][0];
  console.log('>>>>>>>>>>> RESPONSE', response);
  return response;
};
