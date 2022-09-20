export const abi = [
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
