export default {
  _format: 'hh-sol-artifact-1',
  contractName: 'DAOForceToken',
  sourceName: 'contracts/DAOForceToken.sol',
  abi: [
    {
      inputs: [
        {
          internalType: 'string',
          name: '_name',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_symbol',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_DAOName',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_intro',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_image',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_link',
          type: 'string',
        },
        {
          internalType: 'uint256',
          name: '_initial_supply',
          type: 'uint256',
        },
        {
          internalType: 'contract ContractInfoStore',
          name: '_contractInfoStoreAddress',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'delegator',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'fromDelegate',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'toDelegate',
          type: 'address',
        },
      ],
      name: 'DelegateChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'delegate',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'previousBalance',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newBalance',
          type: 'uint256',
        },
      ],
      name: 'DelegateVotesChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      inputs: [],
      name: 'DOMAIN_SEPARATOR',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint16',
          name: '_roundNumber',
          type: 'uint16',
        },
        {
          internalType: 'address',
          name: '_userAddress',
          type: 'address',
        },
        {
          components: [
            {
              internalType: 'uint32',
              name: 'blockNumber',
              type: 'uint32',
            },
            {
              internalType: 'uint256',
              name: 'balanceAfterCommit',
              type: 'uint256',
            },
          ],
          internalType: 'struct CommonStructs.BalanceCommit',
          name: 'newCommit',
          type: 'tuple',
        },
      ],
      name: 'addBalanceCommitHistoryByAddress',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_tokenHolder',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_convertedAmount',
          type: 'uint256',
        },
      ],
      name: 'addIBCVotingPower',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'airdropFromContractAccount',
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
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
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
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
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
          name: 'account',
          type: 'address',
        },
      ],
      name: 'balanceOf',
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
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'uint32',
          name: 'pos',
          type: 'uint32',
        },
      ],
      name: 'checkpoints',
      outputs: [
        {
          components: [
            {
              internalType: 'uint32',
              name: 'fromBlock',
              type: 'uint32',
            },
            {
              internalType: 'uint224',
              name: 'votes',
              type: 'uint224',
            },
          ],
          internalType: 'struct ERC20Votes.Checkpoint',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'subtractedValue',
          type: 'uint256',
        },
      ],
      name: 'decreaseAllowance',
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
          name: 'delegatee',
          type: 'address',
        },
      ],
      name: 'delegate',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'delegatee',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'nonce',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'expiry',
          type: 'uint256',
        },
        {
          internalType: 'uint8',
          name: 'v',
          type: 'uint8',
        },
        {
          internalType: 'bytes32',
          name: 'r',
          type: 'bytes32',
        },
        {
          internalType: 'bytes32',
          name: 's',
          type: 'bytes32',
        },
      ],
      name: 'delegateBySig',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'delegates',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint16',
          name: '_roundNumber',
          type: 'uint16',
        },
        {
          internalType: 'address',
          name: '_userAddress',
          type: 'address',
        },
      ],
      name: 'getBalanceCommitHistoryByAddress',
      outputs: [
        {
          components: [
            {
              internalType: 'uint32',
              name: 'blockNumber',
              type: 'uint32',
            },
            {
              internalType: 'uint256',
              name: 'balanceAfterCommit',
              type: 'uint256',
            },
          ],
          internalType: 'struct CommonStructs.BalanceCommit[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getDAOName',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getImage',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getIntro',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getLink',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getOwner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'blockNumber',
          type: 'uint256',
        },
      ],
      name: 'getPastTotalSupply',
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
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'blockNumber',
          type: 'uint256',
        },
      ],
      name: 'getPastVotes',
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
      name: 'getRoundNumber',
      outputs: [
        {
          internalType: 'uint16',
          name: '',
          type: 'uint16',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getTicker',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getTokenName',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getVotes',
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
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'addedValue',
          type: 'uint256',
        },
      ],
      name: 'increaseAllowance',
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
      inputs: [],
      name: 'incrementRoundNumber',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'nonces',
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
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'numCheckpoints',
      outputs: [
        {
          internalType: 'uint32',
          name: '',
          type: 'uint32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'deadline',
          type: 'uint256',
        },
        {
          internalType: 'uint8',
          name: 'v',
          type: 'uint8',
        },
        {
          internalType: 'bytes32',
          name: 'r',
          type: 'bytes32',
        },
        {
          internalType: 'bytes32',
          name: 's',
          type: 'bytes32',
        },
      ],
      name: 'permit',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_tokenHolder',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_convertedAmount',
          type: 'uint256',
        },
      ],
      name: 'subtractIBCVotingPower',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalSupply',
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
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
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
          name: 'from',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
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
  ],
  bytecode:
    '0x6101406040526001600a60146101000a81548161ffff021916908361ffff1602179055503480156200003057600080fd5b50604051620062c4380380620062c48339818101604052810190620000569190620012fa565b87878787878787308888806040518060400160405280600181526020017f31000000000000000000000000000000000000000000000000000000000000008152508b8b8160039080519060200190620000b192919062000ff9565b508060049080519060200190620000ca92919062000ff9565b50505060008280519060200120905060008280519060200120905060007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f90508260e081815250508161010081815250504660a08181525050620001368184846200043060201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff168152505080610120818152505050505050505086600b90805190602001906200019892919062000ff9565b5085600c9080519060200190620001b192919062000ff9565b5084600d9080519060200190620001ca92919062000ff9565b5083600e9080519060200190620001e392919062000ff9565b5033600f60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000604051806101200160405280620002436200046c60201b60201c565b60ff16600a62000254919062001600565b8662000261919062001651565b81526020018b81526020018a8152602001898152602001888152602001878152602001868152602001600f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff16815250905081600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166350534b65826040518263ffffffff1660e01b81526004016200038291906200182b565b602060405180830381600087803b1580156200039d57600080fd5b505af1158015620003b2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003d891906200188c565b50505050505050505050506200042230620003f86200046c60201b60201c565b60ff16600a62000409919062001600565b8462000416919062001651565b6200047560201b60201c565b505050505050505062001d19565b600083838346306040516020016200044d959493929190620018fb565b6040516020818303038152906040528051906020012090509392505050565b60006012905090565b6200048c82826200049060201b620017791760201c565b5050565b620004a782826200054e60201b620018061760201c565b620004b7620006c760201b60201c565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16620004e5620006eb60201b60201c565b111562000529576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200052090620019df565b60405180910390fd5b620005486009620006f560201b6200196617836200070d60201b60201c565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620005c1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620005b89062001a51565b60405180910390fd5b620005d560008383620009be60201b60201c565b8060026000828254620005e9919062001a73565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825462000640919062001a73565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620006a7919062001ad0565b60405180910390a3620006c360008383620009c360201b60201c565b5050565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b6000600254905090565b6000818362000705919062001a73565b905092915050565b6000806000858054905090506000811462000782578560018262000732919062001aed565b8154811062000746576200074562001b28565b5b9060005260206000200160000160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1662000785565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169250620007b183858760201c565b91506000811180156200080a57504386600183620007d0919062001aed565b81548110620007e457620007e362001b28565b5b9060005260206000200160000160009054906101000a900463ffffffff1663ffffffff16145b15620008ab57620008268262000bf460201b6200197c1760201c565b8660018362000836919062001aed565b815481106200084a576200084962001b28565b5b9060005260206000200160000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff160217905550620009b5565b856040518060400160405280620008cd4362000c6260201b620019e71760201c565b63ffffffff168152602001620008ee8562000bf460201b6200197c1760201c565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548163ffffffff021916908363ffffffff16021790555060208201518160000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555050505b50935093915050565b505050565b620009db83838362000cb860201b62001a3a1760201c565b6000620009ee8462000d0860201b60201c565b9050600062000a038462000d0860201b60201c565b905060106000600a60149054906101000a900461ffff1661ffff1661ffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806040016040528062000a8e4362000c6260201b620019e71760201c565b63ffffffff16815260200184815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000160006101000a81548163ffffffff021916908363ffffffff16021790555060208201518160010155505060106000600a60149054906101000a900461ffff1661ffff1661ffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806040016040528062000b824362000c6260201b620019e71760201c565b63ffffffff16815260200183815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000160006101000a81548163ffffffff021916908363ffffffff1602179055506020820151816001015550505050505050565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff801682111562000c5a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000c519062001bcd565b60405180910390fd5b819050919050565b600063ffffffff801682111562000cb0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000ca79062001c65565b60405180910390fd5b819050919050565b62000cd083838362000d5060201b62001a651760201c565b62000d0362000ce58462000d5560201b60201c565b62000cf68462000d5560201b60201c565b8362000dbe60201b60201c565b505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b505050565b6000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801562000dfb5750600081115b1562000fdc57600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161462000eee5760008062000e95600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002062000fe160201b62001a6a17856200070d60201b60201c565b915091508473ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724838360405162000ee392919062001c87565b60405180910390a250505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161462000fdb5760008062000f82600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020620006f560201b6200196617856200070d60201b60201c565b915091508373ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724838360405162000fd092919062001c87565b60405180910390a250505b5b505050565b6000818362000ff1919062001aed565b905092915050565b828054620010079062001ce3565b90600052602060002090601f0160209004810192826200102b576000855562001077565b82601f106200104657805160ff191683800117855562001077565b8280016001018555821562001077579182015b828111156200107657825182559160200191906001019062001059565b5b5090506200108691906200108a565b5090565b5b80821115620010a55760008160009055506001016200108b565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200111282620010c7565b810181811067ffffffffffffffff82111715620011345762001133620010d8565b5b80604052505050565b600062001149620010a9565b905062001157828262001107565b919050565b600067ffffffffffffffff8211156200117a5762001179620010d8565b5b6200118582620010c7565b9050602081019050919050565b60005b83811015620011b257808201518184015260208101905062001195565b83811115620011c2576000848401525b50505050565b6000620011df620011d9846200115c565b6200113d565b905082815260208101848484011115620011fe57620011fd620010c2565b5b6200120b84828562001192565b509392505050565b600082601f8301126200122b576200122a620010bd565b5b81516200123d848260208601620011c8565b91505092915050565b6000819050919050565b6200125b8162001246565b81146200126757600080fd5b50565b6000815190506200127b8162001250565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620012ae8262001281565b9050919050565b6000620012c282620012a1565b9050919050565b620012d481620012b5565b8114620012e057600080fd5b50565b600081519050620012f481620012c9565b92915050565b600080600080600080600080610100898b0312156200131e576200131d620010b3565b5b600089015167ffffffffffffffff8111156200133f576200133e620010b8565b5b6200134d8b828c0162001213565b985050602089015167ffffffffffffffff811115620013715762001370620010b8565b5b6200137f8b828c0162001213565b975050604089015167ffffffffffffffff811115620013a357620013a2620010b8565b5b620013b18b828c0162001213565b965050606089015167ffffffffffffffff811115620013d557620013d4620010b8565b5b620013e38b828c0162001213565b955050608089015167ffffffffffffffff811115620014075762001406620010b8565b5b620014158b828c0162001213565b94505060a089015167ffffffffffffffff811115620014395762001438620010b8565b5b620014478b828c0162001213565b93505060c06200145a8b828c016200126a565b92505060e06200146d8b828c01620012e3565b9150509295985092959890939650565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b60018511156200150b57808604811115620014e357620014e26200147d565b5b6001851615620014f35780820291505b80810290506200150385620014ac565b9450620014c3565b94509492505050565b600082620015265760019050620015f9565b81620015365760009050620015f9565b81600181146200154f57600281146200155a5762001590565b6001915050620015f9565b60ff8411156200156f576200156e6200147d565b5b8360020a9150848211156200158957620015886200147d565b5b50620015f9565b5060208310610133831016604e8410600b8410161715620015ca5782820a905083811115620015c457620015c36200147d565b5b620015f9565b620015d98484846001620014b9565b92509050818404811115620015f357620015f26200147d565b5b81810290505b9392505050565b60006200160d8262001246565b91506200161a8362001246565b9250620016497fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848462001514565b905092915050565b60006200165e8262001246565b91506200166b8362001246565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615620016a757620016a66200147d565b5b828202905092915050565b620016bd8162001246565b82525050565b600081519050919050565b600082825260208201905092915050565b6000620016ec82620016c3565b620016f88185620016ce565b93506200170a81856020860162001192565b6200171581620010c7565b840191505092915050565b6200172b81620012a1565b82525050565b6000610120830160008301516200174c6000860182620016b2565b5060208301518482036020860152620017668282620016df565b91505060408301518482036040860152620017828282620016df565b915050606083015184820360608601526200179e8282620016df565b91505060808301518482036080860152620017ba8282620016df565b91505060a083015184820360a0860152620017d68282620016df565b91505060c083015184820360c0860152620017f28282620016df565b91505060e08301516200180960e086018262001720565b506101008301516200182061010086018262001720565b508091505092915050565b6000602082019050818103600083015262001847818462001731565b905092915050565b60008115159050919050565b62001866816200184f565b81146200187257600080fd5b50565b60008151905062001886816200185b565b92915050565b600060208284031215620018a557620018a4620010b3565b5b6000620018b58482850162001875565b91505092915050565b6000819050919050565b620018d381620018be565b82525050565b620018e48162001246565b82525050565b620018f581620012a1565b82525050565b600060a082019050620019126000830188620018c8565b620019216020830187620018c8565b620019306040830186620018c8565b6200193f6060830185620018d9565b6200194e6080830184620018ea565b9695505050505050565b600082825260208201905092915050565b7f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60008201527f766572666c6f77696e6720766f74657300000000000000000000000000000000602082015250565b6000620019c760308362001958565b9150620019d48262001969565b604082019050919050565b60006020820190508181036000830152620019fa81620019b8565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600062001a39601f8362001958565b915062001a468262001a01565b602082019050919050565b6000602082019050818103600083015262001a6c8162001a2a565b9050919050565b600062001a808262001246565b915062001a8d8362001246565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562001ac55762001ac46200147d565b5b828201905092915050565b600060208201905062001ae76000830184620018d9565b92915050565b600062001afa8262001246565b915062001b078362001246565b92508282101562001b1d5762001b1c6200147d565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f53616665436173743a2076616c756520646f65736e27742066697420696e203260008201527f3234206269747300000000000000000000000000000000000000000000000000602082015250565b600062001bb560278362001958565b915062001bc28262001b57565b604082019050919050565b6000602082019050818103600083015262001be88162001ba6565b9050919050565b7f53616665436173743a2076616c756520646f65736e27742066697420696e203360008201527f3220626974730000000000000000000000000000000000000000000000000000602082015250565b600062001c4d60268362001958565b915062001c5a8262001bef565b604082019050919050565b6000602082019050818103600083015262001c808162001c3e565b9050919050565b600060408201905062001c9e6000830185620018d9565b62001cad6020830184620018d9565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168062001cfc57607f821691505b6020821081141562001d135762001d1262001cb4565b5b50919050565b60805160a05160c05160e051610100516101205161455b62001d69600039600061200e015260006120500152600061202f01526000611f6401526000611fba01526000611fe3015261455b6000f3fe608060405234801561001057600080fd5b506004361061021c5760003560e01c806380d83eab11610125578063c0004213116100ad578063e2d84e231161007c578063e2d84e23146106a1578063e98f517f146106bf578063f1127ed8146106ef578063f19539fa1461071f578063f3651cbb1461073b5761021c565b8063c00042131461061b578063c3cda52014610639578063d505accf14610655578063dd62ed3e146106715761021c565b80638e539e8c116100f45780638e539e8c1461053d57806395d89b411461056d5780639ab24eb01461058b578063a457c2d7146105bb578063a9059cbb146105eb5761021c565b806380d83eab146104d9578063862b092b146104e35780638694b8cc14610501578063893d20e81461051f5761021c565b8063587cde1e116101a85780636e7b9758116101775780636e7b97581461040f5780636fcfff451461042b57806370a082311461045b578063788599611461048b5780637ecebe00146104a95761021c565b8063587cde1e146103775780635a82641b146103a75780635c19a95c146103c35780636108154c146103df5761021c565b806323b872dd116101ef57806323b872dd146102ab578063313ce567146102db5780633644e515146102f957806339509351146103175780633a46b1a8146103475761021c565b806306fdde0314610221578063095ea7b31461023f5780630cde04561461026f57806318160ddd1461028d575b600080fd5b610229610759565b6040516102369190612e73565b60405180910390f35b61025960048036038101906102549190612f38565b6107eb565b6040516102669190612f93565b60405180910390f35b61027761080e565b6040516102849190612fcb565b60405180910390f35b610295610826565b6040516102a29190612ff5565b60405180910390f35b6102c560048036038101906102c09190613010565b610830565b6040516102d29190612f93565b60405180910390f35b6102e361085f565b6040516102f0919061307f565b60405180910390f35b610301610868565b60405161030e91906130b3565b60405180910390f35b610331600480360381019061032c9190612f38565b610877565b60405161033e9190612f93565b60405180910390f35b610361600480360381019061035c9190612f38565b6108ae565b60405161036e9190612ff5565b60405180910390f35b610391600480360381019061038c91906130ce565b610942565b60405161039e919061310a565b60405180910390f35b6103c160048036038101906103bc9190612f38565b6109ab565b005b6103dd60048036038101906103d891906130ce565b610a95565b005b6103f960048036038101906103f49190613151565b610aa9565b604051610406919061329d565b60405180910390f35b61042960048036038101906104249190612f38565b610b91565b005b610445600480360381019061044091906130ce565b610c7b565b60405161045291906132ce565b60405180910390f35b610475600480360381019061047091906130ce565b610ccf565b6040516104829190612ff5565b60405180910390f35b610493610d17565b6040516104a09190612e73565b60405180910390f35b6104c360048036038101906104be91906130ce565b610da9565b6040516104d09190612ff5565b60405180910390f35b6104e1610df9565b005b6104eb610e35565b6040516104f89190612e73565b60405180910390f35b610509610e44565b6040516105169190612e73565b60405180910390f35b610527610ed6565b604051610534919061310a565b60405180910390f35b610557600480360381019061055291906132e9565b610f00565b6040516105649190612ff5565b60405180910390f35b610575610f56565b6040516105829190612e73565b60405180910390f35b6105a560048036038101906105a091906130ce565b610fe8565b6040516105b29190612ff5565b60405180910390f35b6105d560048036038101906105d09190612f38565b6110f9565b6040516105e29190612f93565b60405180910390f35b61060560048036038101906106009190612f38565b611170565b6040516106129190612f93565b60405180910390f35b610623611193565b6040516106309190612e73565b60405180910390f35b610653600480360381019061064e919061336e565b6111a2565b005b61066f600480360381019061066a91906133fb565b6112a6565b005b61068b6004803603810190610686919061349d565b6113e8565b6040516106989190612ff5565b60405180910390f35b6106a961146f565b6040516106b69190612e73565b60405180910390f35b6106d960048036038101906106d49190612f38565b611501565b6040516106e69190612f93565b60405180910390f35b61070960048036038101906107049190613509565b61151d565b60405161071691906135af565b60405180910390f35b6107396004803603810190610734919061369a565b61162d565b005b6107436116e7565b6040516107509190612e73565b60405180910390f35b6060600380546107689061371c565b80601f01602080910402602001604051908101604052809291908181526020018280546107949061371c565b80156107e15780601f106107b6576101008083540402835291602001916107e1565b820191906000526020600020905b8154815290600101906020018083116107c457829003601f168201915b5050505050905090565b6000806107f6611a80565b9050610803818585611a88565b600191505092915050565b6000600a60149054906101000a900461ffff16905090565b6000600254905090565b60008061083b611a80565b9050610848858285611c53565b610853858585611cdf565b60019150509392505050565b60006012905090565b6000610872611f60565b905090565b600080610882611a80565b90506108a381858561089485896113e8565b61089e919061377d565b611a88565b600191505092915050565b60004382106108f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e99061381f565b60405180910390fd5b61093a600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208361207a565b905092915050565b6000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600081116109b857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610a9157600080610a3a600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206121868561219c565b915091508373ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051610a8692919061383f565b60405180910390a250505b5050565b610aa6610aa0611a80565b82612414565b50565b6060601060008461ffff1661ffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015610b8557838290600052602060002090600202016040518060400160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff16815260200160018201548152505081526020019060010190610b23565b50505050905092915050565b60008111610b9e57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610c7757600080610c20600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061252e8561219c565b915091508373ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051610c6c92919061383f565b60405180910390a250505b5050565b6000610cc8600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506119e7565b9050919050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600c8054610d269061371c565b80601f0160208091040260200160405190810160405280929190818152602001828054610d529061371c565b8015610d9f5780601f10610d7457610100808354040283529160200191610d9f565b820191906000526020600020905b815481529060010190602001808311610d8257829003601f168201915b5050505050905090565b6000610df2600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612544565b9050919050565b6001600a60148282829054906101000a900461ffff16610e199190613868565b92506101000a81548161ffff021916908361ffff160217905550565b6060610e3f610759565b905090565b6060600b8054610e539061371c565b80601f0160208091040260200160405190810160405280929190818152602001828054610e7f9061371c565b8015610ecc5780601f10610ea157610100808354040283529160200191610ecc565b820191906000526020600020905b815481529060010190602001808311610eaf57829003601f168201915b5050505050905090565b6000600f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000438210610f44576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3b9061381f565b60405180910390fd5b610f4f60098361207a565b9050919050565b606060048054610f659061371c565b80601f0160208091040260200160405190810160405280929190818152602001828054610f919061371c565b8015610fde5780601f10610fb357610100808354040283529160200191610fde565b820191906000526020600020905b815481529060010190602001808311610fc157829003601f168201915b5050505050905090565b600080600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050600081146110d057600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060018261108491906138a0565b81548110611095576110946138d4565b5b9060005260206000200160000160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166110d3565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16915050919050565b600080611104611a80565b9050600061111282866113e8565b905083811015611157576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161114e90613975565b60405180910390fd5b6111648286868403611a88565b60019250505092915050565b60008061117b611a80565b9050611188818585611cdf565b600191505092915050565b606061119d610f56565b905090565b834211156111e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111dc906139e1565b60405180910390fd5b600061124761123f7fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf8989896040516020016112249493929190613a01565b60405160208183030381529060405280519060200120612552565b85858561256c565b905061125281612597565b8614611293576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161128a90613a92565b60405180910390fd5b61129d8188612414565b50505050505050565b834211156112e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112e090613afe565b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886113188c612597565b8960405160200161132e96959493929190613b1e565b604051602081830303815290604052805190602001209050600061135182612552565b905060006113618287878761256c565b90508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146113d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113c890613bcb565b60405180910390fd5b6113dc8a8a8a611a88565b50505050505050505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6060600e805461147e9061371c565b80601f01602080910402602001604051908101604052809291908181526020018280546114aa9061371c565b80156114f75780601f106114cc576101008083540402835291602001916114f7565b820191906000526020600020905b8154815290600101906020018083116114da57829003601f168201915b5050505050905090565b600080309050611512818585611cdf565b600191505092915050565b611525612d9c565b600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208263ffffffff168154811061157c5761157b6138d4565b5b906000526020600020016040518060400160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1681525050905092915050565b601060008461ffff1661ffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000160006101000a81548163ffffffff021916908363ffffffff160217905550602082015181600101555050505050565b6060600d80546116f69061371c565b80601f01602080910402602001604051908101604052809291908181526020018280546117229061371c565b801561176f5780601f106117445761010080835404028352916020019161176f565b820191906000526020600020905b81548152906001019060200180831161175257829003601f168201915b5050505050905090565b6117838282611806565b61178b6125f5565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166117b1610826565b11156117f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117e990613c5d565b60405180910390fd5b61180060096119668361219c565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611876576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161186d90613cc9565b60405180910390fd5b61188260008383612619565b8060026000828254611894919061377d565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546118e9919061377d565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161194e9190612ff5565b60405180910390a36119626000838361261e565b5050565b60008183611974919061377d565b905092915050565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff80168211156119df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119d690613d5b565b60405180910390fd5b819050919050565b600063ffffffff8016821115611a32576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a2990613ded565b60405180910390fd5b819050919050565b611a45838383611a65565b611a60611a5184610942565b611a5a84610942565b83612818565b505050565b505050565b60008183611a7891906138a0565b905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611af8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611aef90613e7f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611b68576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b5f90613f11565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051611c469190612ff5565b60405180910390a3505050565b6000611c5f84846113e8565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114611cd95781811015611ccb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cc290613f7d565b60405180910390fd5b611cd88484848403611a88565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611d4f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d469061400f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611dbf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611db6906140a1565b60405180910390fd5b611dca838383612619565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611e50576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e4790614133565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611ee3919061377d565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611f479190612ff5565b60405180910390a3611f5a84848461261e565b50505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16148015611fdc57507f000000000000000000000000000000000000000000000000000000000000000046145b15612009577f00000000000000000000000000000000000000000000000000000000000000009050612077565b6120747f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612a11565b90505b90565b6000808380549050905060005b818110156120f957600061209b8284612a4b565b9050848682815481106120b1576120b06138d4565b5b9060005260206000200160000160009054906101000a900463ffffffff1663ffffffff1611156120e3578092506120f3565b6001816120f0919061377d565b91505b50612087565b6000821461215b578460018361210f91906138a0565b815481106121205761211f6138d4565b5b9060005260206000200160000160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1661215e565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169250505092915050565b60008183612194919061377d565b905092915050565b6000806000858054905090506000811461220a57856001826121be91906138a0565b815481106121cf576121ce6138d4565b5b9060005260206000200160000160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1661220d565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16925061223b83858763ffffffff16565b915060008111801561228e5750438660018361225791906138a0565b81548110612268576122676138d4565b5b9060005260206000200160000160009054906101000a900463ffffffff1663ffffffff16145b1561231b5761229c8261197c565b866001836122aa91906138a0565b815481106122bb576122ba6138d4565b5b9060005260206000200160000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555061240b565b856040518060400160405280612330436119e7565b63ffffffff1681526020016123448561197c565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548163ffffffff021916908363ffffffff16021790555060208201518160000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555050505b50935093915050565b600061241f83610942565b9050600061242c84610ccf565b905082600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f60405160405180910390a4612528828483612818565b50505050565b6000818361253c91906138a0565b905092915050565b600081600001549050919050565b600061256561255f611f60565b83612a71565b9050919050565b600080600061257d87878787612aa4565b9150915061258a81612bb1565b8192505050949350505050565b600080600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506125e481612544565b91506125ef81612d86565b50919050565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b505050565b612629838383611a3a565b600061263484610ccf565b9050600061264184610ccf565b905060106000600a60149054906101000a900461ffff1661ffff1661ffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180604001604052806126bf436119e7565b63ffffffff16815260200184815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000160006101000a81548163ffffffff021916908363ffffffff16021790555060208201518160010155505060106000600a60149054906101000a900461ffff1661ffff1661ffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180604001604052806127a6436119e7565b63ffffffff16815260200183815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000160006101000a81548163ffffffff021916908363ffffffff1602179055506020820151816001015550505050505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156128545750600081115b15612a0c57600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614612932576000806128db600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611a6a8561219c565b915091508473ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724838360405161292792919061383f565b60405180910390a250505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614612a0b576000806129b4600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206119668561219c565b915091508373ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051612a0092919061383f565b60405180910390a250505b5b505050565b60008383834630604051602001612a2c959493929190614153565b6040516020818303038152906040528051906020012090509392505050565b60006002828418612a5c91906141d5565b828416612a69919061377d565b905092915050565b60008282604051602001612a8692919061427e565b60405160208183030381529060405280519060200120905092915050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c1115612adf576000600391509150612ba8565b601b8560ff1614158015612af75750601c8560ff1614155b15612b09576000600491509150612ba8565b600060018787878760405160008152602001604052604051612b2e94939291906142b5565b6020604051602081039080840390855afa158015612b50573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415612b9f57600060019250925050612ba8565b80600092509250505b94509492505050565b60006004811115612bc557612bc46142fa565b5b816004811115612bd857612bd76142fa565b5b1415612be357612d83565b60016004811115612bf757612bf66142fa565b5b816004811115612c0a57612c096142fa565b5b1415612c4b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c4290614375565b60405180910390fd5b60026004811115612c5f57612c5e6142fa565b5b816004811115612c7257612c716142fa565b5b1415612cb3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612caa906143e1565b60405180910390fd5b60036004811115612cc757612cc66142fa565b5b816004811115612cda57612cd96142fa565b5b1415612d1b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612d1290614473565b60405180910390fd5b600480811115612d2e57612d2d6142fa565b5b816004811115612d4157612d406142fa565b5b1415612d82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612d7990614505565b60405180910390fd5b5b50565b6001816000016000828254019250508190555050565b6040518060400160405280600063ffffffff16815260200160007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1681525090565b600081519050919050565b600082825260208201905092915050565b60005b83811015612e14578082015181840152602081019050612df9565b83811115612e23576000848401525b50505050565b6000601f19601f8301169050919050565b6000612e4582612dda565b612e4f8185612de5565b9350612e5f818560208601612df6565b612e6881612e29565b840191505092915050565b60006020820190508181036000830152612e8d8184612e3a565b905092915050565b6000604051905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000612ecf82612ea4565b9050919050565b612edf81612ec4565b8114612eea57600080fd5b50565b600081359050612efc81612ed6565b92915050565b6000819050919050565b612f1581612f02565b8114612f2057600080fd5b50565b600081359050612f3281612f0c565b92915050565b60008060408385031215612f4f57612f4e612e9f565b5b6000612f5d85828601612eed565b9250506020612f6e85828601612f23565b9150509250929050565b60008115159050919050565b612f8d81612f78565b82525050565b6000602082019050612fa86000830184612f84565b92915050565b600061ffff82169050919050565b612fc581612fae565b82525050565b6000602082019050612fe06000830184612fbc565b92915050565b612fef81612f02565b82525050565b600060208201905061300a6000830184612fe6565b92915050565b60008060006060848603121561302957613028612e9f565b5b600061303786828701612eed565b935050602061304886828701612eed565b925050604061305986828701612f23565b9150509250925092565b600060ff82169050919050565b61307981613063565b82525050565b60006020820190506130946000830184613070565b92915050565b6000819050919050565b6130ad8161309a565b82525050565b60006020820190506130c860008301846130a4565b92915050565b6000602082840312156130e4576130e3612e9f565b5b60006130f284828501612eed565b91505092915050565b61310481612ec4565b82525050565b600060208201905061311f60008301846130fb565b92915050565b61312e81612fae565b811461313957600080fd5b50565b60008135905061314b81613125565b92915050565b6000806040838503121561316857613167612e9f565b5b60006131768582860161313c565b925050602061318785828601612eed565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600063ffffffff82169050919050565b6131d6816131bd565b82525050565b6131e581612f02565b82525050565b60408201600082015161320160008501826131cd565b50602082015161321460208501826131dc565b50505050565b600061322683836131eb565b60408301905092915050565b6000602082019050919050565b600061324a82613191565b613254818561319c565b935061325f836131ad565b8060005b83811015613290578151613277888261321a565b975061328283613232565b925050600181019050613263565b5085935050505092915050565b600060208201905081810360008301526132b7818461323f565b905092915050565b6132c8816131bd565b82525050565b60006020820190506132e360008301846132bf565b92915050565b6000602082840312156132ff576132fe612e9f565b5b600061330d84828501612f23565b91505092915050565b61331f81613063565b811461332a57600080fd5b50565b60008135905061333c81613316565b92915050565b61334b8161309a565b811461335657600080fd5b50565b60008135905061336881613342565b92915050565b60008060008060008060c0878903121561338b5761338a612e9f565b5b600061339989828a01612eed565b96505060206133aa89828a01612f23565b95505060406133bb89828a01612f23565b94505060606133cc89828a0161332d565b93505060806133dd89828a01613359565b92505060a06133ee89828a01613359565b9150509295509295509295565b600080600080600080600060e0888a03121561341a57613419612e9f565b5b60006134288a828b01612eed565b97505060206134398a828b01612eed565b965050604061344a8a828b01612f23565b955050606061345b8a828b01612f23565b945050608061346c8a828b0161332d565b93505060a061347d8a828b01613359565b92505060c061348e8a828b01613359565b91505092959891949750929550565b600080604083850312156134b4576134b3612e9f565b5b60006134c285828601612eed565b92505060206134d385828601612eed565b9150509250929050565b6134e6816131bd565b81146134f157600080fd5b50565b600081359050613503816134dd565b92915050565b600080604083850312156135205761351f612e9f565b5b600061352e85828601612eed565b925050602061353f858286016134f4565b9150509250929050565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff82169050919050565b61357a81613549565b82525050565b60408201600082015161359660008501826131cd565b5060208201516135a96020850182613571565b50505050565b60006040820190506135c46000830184613580565b92915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61360782612e29565b810181811067ffffffffffffffff82111715613626576136256135cf565b5b80604052505050565b6000613639612e95565b905061364582826135fe565b919050565b6000604082840312156136605761365f6135ca565b5b61366a604061362f565b9050600061367a848285016134f4565b600083015250602061368e84828501612f23565b60208301525092915050565b6000806000608084860312156136b3576136b2612e9f565b5b60006136c18682870161313c565b93505060206136d286828701612eed565b92505060406136e38682870161364a565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061373457607f821691505b60208210811415613748576137476136ed565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061378882612f02565b915061379383612f02565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156137c8576137c761374e565b5b828201905092915050565b7f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e656400600082015250565b6000613809601f83612de5565b9150613814826137d3565b602082019050919050565b60006020820190508181036000830152613838816137fc565b9050919050565b60006040820190506138546000830185612fe6565b6138616020830184612fe6565b9392505050565b600061387382612fae565b915061387e83612fae565b92508261ffff038211156138955761389461374e565b5b828201905092915050565b60006138ab82612f02565b91506138b683612f02565b9250828210156138c9576138c861374e565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b600061395f602583612de5565b915061396a82613903565b604082019050919050565b6000602082019050818103600083015261398e81613952565b9050919050565b7f4552433230566f7465733a207369676e61747572652065787069726564000000600082015250565b60006139cb601d83612de5565b91506139d682613995565b602082019050919050565b600060208201905081810360008301526139fa816139be565b9050919050565b6000608082019050613a1660008301876130a4565b613a2360208301866130fb565b613a306040830185612fe6565b613a3d6060830184612fe6565b95945050505050565b7f4552433230566f7465733a20696e76616c6964206e6f6e636500000000000000600082015250565b6000613a7c601983612de5565b9150613a8782613a46565b602082019050919050565b60006020820190508181036000830152613aab81613a6f565b9050919050565b7f45524332305065726d69743a206578706972656420646561646c696e65000000600082015250565b6000613ae8601d83612de5565b9150613af382613ab2565b602082019050919050565b60006020820190508181036000830152613b1781613adb565b9050919050565b600060c082019050613b3360008301896130a4565b613b4060208301886130fb565b613b4d60408301876130fb565b613b5a6060830186612fe6565b613b676080830185612fe6565b613b7460a0830184612fe6565b979650505050505050565b7f45524332305065726d69743a20696e76616c6964207369676e61747572650000600082015250565b6000613bb5601e83612de5565b9150613bc082613b7f565b602082019050919050565b60006020820190508181036000830152613be481613ba8565b9050919050565b7f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60008201527f766572666c6f77696e6720766f74657300000000000000000000000000000000602082015250565b6000613c47603083612de5565b9150613c5282613beb565b604082019050919050565b60006020820190508181036000830152613c7681613c3a565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000613cb3601f83612de5565b9150613cbe82613c7d565b602082019050919050565b60006020820190508181036000830152613ce281613ca6565b9050919050565b7f53616665436173743a2076616c756520646f65736e27742066697420696e203260008201527f3234206269747300000000000000000000000000000000000000000000000000602082015250565b6000613d45602783612de5565b9150613d5082613ce9565b604082019050919050565b60006020820190508181036000830152613d7481613d38565b9050919050565b7f53616665436173743a2076616c756520646f65736e27742066697420696e203360008201527f3220626974730000000000000000000000000000000000000000000000000000602082015250565b6000613dd7602683612de5565b9150613de282613d7b565b604082019050919050565b60006020820190508181036000830152613e0681613dca565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000613e69602483612de5565b9150613e7482613e0d565b604082019050919050565b60006020820190508181036000830152613e9881613e5c565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000613efb602283612de5565b9150613f0682613e9f565b604082019050919050565b60006020820190508181036000830152613f2a81613eee565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000613f67601d83612de5565b9150613f7282613f31565b602082019050919050565b60006020820190508181036000830152613f9681613f5a565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000613ff9602583612de5565b915061400482613f9d565b604082019050919050565b6000602082019050818103600083015261402881613fec565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b600061408b602383612de5565b91506140968261402f565b604082019050919050565b600060208201905081810360008301526140ba8161407e565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b600061411d602683612de5565b9150614128826140c1565b604082019050919050565b6000602082019050818103600083015261414c81614110565b9050919050565b600060a08201905061416860008301886130a4565b61417560208301876130a4565b61418260408301866130a4565b61418f6060830185612fe6565b61419c60808301846130fb565b9695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006141e082612f02565b91506141eb83612f02565b9250826141fb576141fa6141a6565b5b828204905092915050565b600081905092915050565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b6000614247600283614206565b915061425282614211565b600282019050919050565b6000819050919050565b6142786142738261309a565b61425d565b82525050565b60006142898261423a565b91506142958285614267565b6020820191506142a58284614267565b6020820191508190509392505050565b60006080820190506142ca60008301876130a4565b6142d76020830186613070565b6142e460408301856130a4565b6142f160608301846130a4565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b600061435f601883612de5565b915061436a82614329565b602082019050919050565b6000602082019050818103600083015261438e81614352565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b60006143cb601f83612de5565b91506143d682614395565b602082019050919050565b600060208201905081810360008301526143fa816143be565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b600061445d602283612de5565b915061446882614401565b604082019050919050565b6000602082019050818103600083015261448c81614450565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202776272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b60006144ef602283612de5565b91506144fa82614493565b604082019050919050565b6000602082019050818103600083015261451e816144e2565b905091905056fea2646970667358221220aeea8bd203d520ed39a3ec852fd7ad8d49867219fe89599199b2e75069f8003e64736f6c63430008090033',
  deployedBytecode:
    '0x608060405234801561001057600080fd5b506004361061021c5760003560e01c806380d83eab11610125578063c0004213116100ad578063e2d84e231161007c578063e2d84e23146106a1578063e98f517f146106bf578063f1127ed8146106ef578063f19539fa1461071f578063f3651cbb1461073b5761021c565b8063c00042131461061b578063c3cda52014610639578063d505accf14610655578063dd62ed3e146106715761021c565b80638e539e8c116100f45780638e539e8c1461053d57806395d89b411461056d5780639ab24eb01461058b578063a457c2d7146105bb578063a9059cbb146105eb5761021c565b806380d83eab146104d9578063862b092b146104e35780638694b8cc14610501578063893d20e81461051f5761021c565b8063587cde1e116101a85780636e7b9758116101775780636e7b97581461040f5780636fcfff451461042b57806370a082311461045b578063788599611461048b5780637ecebe00146104a95761021c565b8063587cde1e146103775780635a82641b146103a75780635c19a95c146103c35780636108154c146103df5761021c565b806323b872dd116101ef57806323b872dd146102ab578063313ce567146102db5780633644e515146102f957806339509351146103175780633a46b1a8146103475761021c565b806306fdde0314610221578063095ea7b31461023f5780630cde04561461026f57806318160ddd1461028d575b600080fd5b610229610759565b6040516102369190612e73565b60405180910390f35b61025960048036038101906102549190612f38565b6107eb565b6040516102669190612f93565b60405180910390f35b61027761080e565b6040516102849190612fcb565b60405180910390f35b610295610826565b6040516102a29190612ff5565b60405180910390f35b6102c560048036038101906102c09190613010565b610830565b6040516102d29190612f93565b60405180910390f35b6102e361085f565b6040516102f0919061307f565b60405180910390f35b610301610868565b60405161030e91906130b3565b60405180910390f35b610331600480360381019061032c9190612f38565b610877565b60405161033e9190612f93565b60405180910390f35b610361600480360381019061035c9190612f38565b6108ae565b60405161036e9190612ff5565b60405180910390f35b610391600480360381019061038c91906130ce565b610942565b60405161039e919061310a565b60405180910390f35b6103c160048036038101906103bc9190612f38565b6109ab565b005b6103dd60048036038101906103d891906130ce565b610a95565b005b6103f960048036038101906103f49190613151565b610aa9565b604051610406919061329d565b60405180910390f35b61042960048036038101906104249190612f38565b610b91565b005b610445600480360381019061044091906130ce565b610c7b565b60405161045291906132ce565b60405180910390f35b610475600480360381019061047091906130ce565b610ccf565b6040516104829190612ff5565b60405180910390f35b610493610d17565b6040516104a09190612e73565b60405180910390f35b6104c360048036038101906104be91906130ce565b610da9565b6040516104d09190612ff5565b60405180910390f35b6104e1610df9565b005b6104eb610e35565b6040516104f89190612e73565b60405180910390f35b610509610e44565b6040516105169190612e73565b60405180910390f35b610527610ed6565b604051610534919061310a565b60405180910390f35b610557600480360381019061055291906132e9565b610f00565b6040516105649190612ff5565b60405180910390f35b610575610f56565b6040516105829190612e73565b60405180910390f35b6105a560048036038101906105a091906130ce565b610fe8565b6040516105b29190612ff5565b60405180910390f35b6105d560048036038101906105d09190612f38565b6110f9565b6040516105e29190612f93565b60405180910390f35b61060560048036038101906106009190612f38565b611170565b6040516106129190612f93565b60405180910390f35b610623611193565b6040516106309190612e73565b60405180910390f35b610653600480360381019061064e919061336e565b6111a2565b005b61066f600480360381019061066a91906133fb565b6112a6565b005b61068b6004803603810190610686919061349d565b6113e8565b6040516106989190612ff5565b60405180910390f35b6106a961146f565b6040516106b69190612e73565b60405180910390f35b6106d960048036038101906106d49190612f38565b611501565b6040516106e69190612f93565b60405180910390f35b61070960048036038101906107049190613509565b61151d565b60405161071691906135af565b60405180910390f35b6107396004803603810190610734919061369a565b61162d565b005b6107436116e7565b6040516107509190612e73565b60405180910390f35b6060600380546107689061371c565b80601f01602080910402602001604051908101604052809291908181526020018280546107949061371c565b80156107e15780601f106107b6576101008083540402835291602001916107e1565b820191906000526020600020905b8154815290600101906020018083116107c457829003601f168201915b5050505050905090565b6000806107f6611a80565b9050610803818585611a88565b600191505092915050565b6000600a60149054906101000a900461ffff16905090565b6000600254905090565b60008061083b611a80565b9050610848858285611c53565b610853858585611cdf565b60019150509392505050565b60006012905090565b6000610872611f60565b905090565b600080610882611a80565b90506108a381858561089485896113e8565b61089e919061377d565b611a88565b600191505092915050565b60004382106108f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e99061381f565b60405180910390fd5b61093a600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208361207a565b905092915050565b6000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600081116109b857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610a9157600080610a3a600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206121868561219c565b915091508373ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051610a8692919061383f565b60405180910390a250505b5050565b610aa6610aa0611a80565b82612414565b50565b6060601060008461ffff1661ffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015610b8557838290600052602060002090600202016040518060400160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff16815260200160018201548152505081526020019060010190610b23565b50505050905092915050565b60008111610b9e57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610c7757600080610c20600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061252e8561219c565b915091508373ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051610c6c92919061383f565b60405180910390a250505b5050565b6000610cc8600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506119e7565b9050919050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600c8054610d269061371c565b80601f0160208091040260200160405190810160405280929190818152602001828054610d529061371c565b8015610d9f5780601f10610d7457610100808354040283529160200191610d9f565b820191906000526020600020905b815481529060010190602001808311610d8257829003601f168201915b5050505050905090565b6000610df2600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612544565b9050919050565b6001600a60148282829054906101000a900461ffff16610e199190613868565b92506101000a81548161ffff021916908361ffff160217905550565b6060610e3f610759565b905090565b6060600b8054610e539061371c565b80601f0160208091040260200160405190810160405280929190818152602001828054610e7f9061371c565b8015610ecc5780601f10610ea157610100808354040283529160200191610ecc565b820191906000526020600020905b815481529060010190602001808311610eaf57829003601f168201915b5050505050905090565b6000600f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000438210610f44576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3b9061381f565b60405180910390fd5b610f4f60098361207a565b9050919050565b606060048054610f659061371c565b80601f0160208091040260200160405190810160405280929190818152602001828054610f919061371c565b8015610fde5780601f10610fb357610100808354040283529160200191610fde565b820191906000526020600020905b815481529060010190602001808311610fc157829003601f168201915b5050505050905090565b600080600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050600081146110d057600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060018261108491906138a0565b81548110611095576110946138d4565b5b9060005260206000200160000160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166110d3565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16915050919050565b600080611104611a80565b9050600061111282866113e8565b905083811015611157576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161114e90613975565b60405180910390fd5b6111648286868403611a88565b60019250505092915050565b60008061117b611a80565b9050611188818585611cdf565b600191505092915050565b606061119d610f56565b905090565b834211156111e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111dc906139e1565b60405180910390fd5b600061124761123f7fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf8989896040516020016112249493929190613a01565b60405160208183030381529060405280519060200120612552565b85858561256c565b905061125281612597565b8614611293576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161128a90613a92565b60405180910390fd5b61129d8188612414565b50505050505050565b834211156112e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112e090613afe565b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886113188c612597565b8960405160200161132e96959493929190613b1e565b604051602081830303815290604052805190602001209050600061135182612552565b905060006113618287878761256c565b90508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146113d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113c890613bcb565b60405180910390fd5b6113dc8a8a8a611a88565b50505050505050505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6060600e805461147e9061371c565b80601f01602080910402602001604051908101604052809291908181526020018280546114aa9061371c565b80156114f75780601f106114cc576101008083540402835291602001916114f7565b820191906000526020600020905b8154815290600101906020018083116114da57829003601f168201915b5050505050905090565b600080309050611512818585611cdf565b600191505092915050565b611525612d9c565b600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208263ffffffff168154811061157c5761157b6138d4565b5b906000526020600020016040518060400160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1681525050905092915050565b601060008461ffff1661ffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000160006101000a81548163ffffffff021916908363ffffffff160217905550602082015181600101555050505050565b6060600d80546116f69061371c565b80601f01602080910402602001604051908101604052809291908181526020018280546117229061371c565b801561176f5780601f106117445761010080835404028352916020019161176f565b820191906000526020600020905b81548152906001019060200180831161175257829003601f168201915b5050505050905090565b6117838282611806565b61178b6125f5565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166117b1610826565b11156117f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117e990613c5d565b60405180910390fd5b61180060096119668361219c565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611876576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161186d90613cc9565b60405180910390fd5b61188260008383612619565b8060026000828254611894919061377d565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546118e9919061377d565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161194e9190612ff5565b60405180910390a36119626000838361261e565b5050565b60008183611974919061377d565b905092915050565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff80168211156119df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119d690613d5b565b60405180910390fd5b819050919050565b600063ffffffff8016821115611a32576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a2990613ded565b60405180910390fd5b819050919050565b611a45838383611a65565b611a60611a5184610942565b611a5a84610942565b83612818565b505050565b505050565b60008183611a7891906138a0565b905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611af8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611aef90613e7f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611b68576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b5f90613f11565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051611c469190612ff5565b60405180910390a3505050565b6000611c5f84846113e8565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114611cd95781811015611ccb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cc290613f7d565b60405180910390fd5b611cd88484848403611a88565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611d4f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d469061400f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611dbf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611db6906140a1565b60405180910390fd5b611dca838383612619565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611e50576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e4790614133565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611ee3919061377d565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611f479190612ff5565b60405180910390a3611f5a84848461261e565b50505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16148015611fdc57507f000000000000000000000000000000000000000000000000000000000000000046145b15612009577f00000000000000000000000000000000000000000000000000000000000000009050612077565b6120747f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612a11565b90505b90565b6000808380549050905060005b818110156120f957600061209b8284612a4b565b9050848682815481106120b1576120b06138d4565b5b9060005260206000200160000160009054906101000a900463ffffffff1663ffffffff1611156120e3578092506120f3565b6001816120f0919061377d565b91505b50612087565b6000821461215b578460018361210f91906138a0565b815481106121205761211f6138d4565b5b9060005260206000200160000160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1661215e565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169250505092915050565b60008183612194919061377d565b905092915050565b6000806000858054905090506000811461220a57856001826121be91906138a0565b815481106121cf576121ce6138d4565b5b9060005260206000200160000160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1661220d565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16925061223b83858763ffffffff16565b915060008111801561228e5750438660018361225791906138a0565b81548110612268576122676138d4565b5b9060005260206000200160000160009054906101000a900463ffffffff1663ffffffff16145b1561231b5761229c8261197c565b866001836122aa91906138a0565b815481106122bb576122ba6138d4565b5b9060005260206000200160000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555061240b565b856040518060400160405280612330436119e7565b63ffffffff1681526020016123448561197c565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548163ffffffff021916908363ffffffff16021790555060208201518160000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555050505b50935093915050565b600061241f83610942565b9050600061242c84610ccf565b905082600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f60405160405180910390a4612528828483612818565b50505050565b6000818361253c91906138a0565b905092915050565b600081600001549050919050565b600061256561255f611f60565b83612a71565b9050919050565b600080600061257d87878787612aa4565b9150915061258a81612bb1565b8192505050949350505050565b600080600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506125e481612544565b91506125ef81612d86565b50919050565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b505050565b612629838383611a3a565b600061263484610ccf565b9050600061264184610ccf565b905060106000600a60149054906101000a900461ffff1661ffff1661ffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180604001604052806126bf436119e7565b63ffffffff16815260200184815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000160006101000a81548163ffffffff021916908363ffffffff16021790555060208201518160010155505060106000600a60149054906101000a900461ffff1661ffff1661ffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180604001604052806127a6436119e7565b63ffffffff16815260200183815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000160006101000a81548163ffffffff021916908363ffffffff1602179055506020820151816001015550505050505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156128545750600081115b15612a0c57600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614612932576000806128db600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611a6a8561219c565b915091508473ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724838360405161292792919061383f565b60405180910390a250505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614612a0b576000806129b4600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206119668561219c565b915091508373ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051612a0092919061383f565b60405180910390a250505b5b505050565b60008383834630604051602001612a2c959493929190614153565b6040516020818303038152906040528051906020012090509392505050565b60006002828418612a5c91906141d5565b828416612a69919061377d565b905092915050565b60008282604051602001612a8692919061427e565b60405160208183030381529060405280519060200120905092915050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c1115612adf576000600391509150612ba8565b601b8560ff1614158015612af75750601c8560ff1614155b15612b09576000600491509150612ba8565b600060018787878760405160008152602001604052604051612b2e94939291906142b5565b6020604051602081039080840390855afa158015612b50573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415612b9f57600060019250925050612ba8565b80600092509250505b94509492505050565b60006004811115612bc557612bc46142fa565b5b816004811115612bd857612bd76142fa565b5b1415612be357612d83565b60016004811115612bf757612bf66142fa565b5b816004811115612c0a57612c096142fa565b5b1415612c4b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c4290614375565b60405180910390fd5b60026004811115612c5f57612c5e6142fa565b5b816004811115612c7257612c716142fa565b5b1415612cb3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612caa906143e1565b60405180910390fd5b60036004811115612cc757612cc66142fa565b5b816004811115612cda57612cd96142fa565b5b1415612d1b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612d1290614473565b60405180910390fd5b600480811115612d2e57612d2d6142fa565b5b816004811115612d4157612d406142fa565b5b1415612d82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612d7990614505565b60405180910390fd5b5b50565b6001816000016000828254019250508190555050565b6040518060400160405280600063ffffffff16815260200160007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1681525090565b600081519050919050565b600082825260208201905092915050565b60005b83811015612e14578082015181840152602081019050612df9565b83811115612e23576000848401525b50505050565b6000601f19601f8301169050919050565b6000612e4582612dda565b612e4f8185612de5565b9350612e5f818560208601612df6565b612e6881612e29565b840191505092915050565b60006020820190508181036000830152612e8d8184612e3a565b905092915050565b6000604051905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000612ecf82612ea4565b9050919050565b612edf81612ec4565b8114612eea57600080fd5b50565b600081359050612efc81612ed6565b92915050565b6000819050919050565b612f1581612f02565b8114612f2057600080fd5b50565b600081359050612f3281612f0c565b92915050565b60008060408385031215612f4f57612f4e612e9f565b5b6000612f5d85828601612eed565b9250506020612f6e85828601612f23565b9150509250929050565b60008115159050919050565b612f8d81612f78565b82525050565b6000602082019050612fa86000830184612f84565b92915050565b600061ffff82169050919050565b612fc581612fae565b82525050565b6000602082019050612fe06000830184612fbc565b92915050565b612fef81612f02565b82525050565b600060208201905061300a6000830184612fe6565b92915050565b60008060006060848603121561302957613028612e9f565b5b600061303786828701612eed565b935050602061304886828701612eed565b925050604061305986828701612f23565b9150509250925092565b600060ff82169050919050565b61307981613063565b82525050565b60006020820190506130946000830184613070565b92915050565b6000819050919050565b6130ad8161309a565b82525050565b60006020820190506130c860008301846130a4565b92915050565b6000602082840312156130e4576130e3612e9f565b5b60006130f284828501612eed565b91505092915050565b61310481612ec4565b82525050565b600060208201905061311f60008301846130fb565b92915050565b61312e81612fae565b811461313957600080fd5b50565b60008135905061314b81613125565b92915050565b6000806040838503121561316857613167612e9f565b5b60006131768582860161313c565b925050602061318785828601612eed565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600063ffffffff82169050919050565b6131d6816131bd565b82525050565b6131e581612f02565b82525050565b60408201600082015161320160008501826131cd565b50602082015161321460208501826131dc565b50505050565b600061322683836131eb565b60408301905092915050565b6000602082019050919050565b600061324a82613191565b613254818561319c565b935061325f836131ad565b8060005b83811015613290578151613277888261321a565b975061328283613232565b925050600181019050613263565b5085935050505092915050565b600060208201905081810360008301526132b7818461323f565b905092915050565b6132c8816131bd565b82525050565b60006020820190506132e360008301846132bf565b92915050565b6000602082840312156132ff576132fe612e9f565b5b600061330d84828501612f23565b91505092915050565b61331f81613063565b811461332a57600080fd5b50565b60008135905061333c81613316565b92915050565b61334b8161309a565b811461335657600080fd5b50565b60008135905061336881613342565b92915050565b60008060008060008060c0878903121561338b5761338a612e9f565b5b600061339989828a01612eed565b96505060206133aa89828a01612f23565b95505060406133bb89828a01612f23565b94505060606133cc89828a0161332d565b93505060806133dd89828a01613359565b92505060a06133ee89828a01613359565b9150509295509295509295565b600080600080600080600060e0888a03121561341a57613419612e9f565b5b60006134288a828b01612eed565b97505060206134398a828b01612eed565b965050604061344a8a828b01612f23565b955050606061345b8a828b01612f23565b945050608061346c8a828b0161332d565b93505060a061347d8a828b01613359565b92505060c061348e8a828b01613359565b91505092959891949750929550565b600080604083850312156134b4576134b3612e9f565b5b60006134c285828601612eed565b92505060206134d385828601612eed565b9150509250929050565b6134e6816131bd565b81146134f157600080fd5b50565b600081359050613503816134dd565b92915050565b600080604083850312156135205761351f612e9f565b5b600061352e85828601612eed565b925050602061353f858286016134f4565b9150509250929050565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff82169050919050565b61357a81613549565b82525050565b60408201600082015161359660008501826131cd565b5060208201516135a96020850182613571565b50505050565b60006040820190506135c46000830184613580565b92915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61360782612e29565b810181811067ffffffffffffffff82111715613626576136256135cf565b5b80604052505050565b6000613639612e95565b905061364582826135fe565b919050565b6000604082840312156136605761365f6135ca565b5b61366a604061362f565b9050600061367a848285016134f4565b600083015250602061368e84828501612f23565b60208301525092915050565b6000806000608084860312156136b3576136b2612e9f565b5b60006136c18682870161313c565b93505060206136d286828701612eed565b92505060406136e38682870161364a565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061373457607f821691505b60208210811415613748576137476136ed565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061378882612f02565b915061379383612f02565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156137c8576137c761374e565b5b828201905092915050565b7f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e656400600082015250565b6000613809601f83612de5565b9150613814826137d3565b602082019050919050565b60006020820190508181036000830152613838816137fc565b9050919050565b60006040820190506138546000830185612fe6565b6138616020830184612fe6565b9392505050565b600061387382612fae565b915061387e83612fae565b92508261ffff038211156138955761389461374e565b5b828201905092915050565b60006138ab82612f02565b91506138b683612f02565b9250828210156138c9576138c861374e565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b600061395f602583612de5565b915061396a82613903565b604082019050919050565b6000602082019050818103600083015261398e81613952565b9050919050565b7f4552433230566f7465733a207369676e61747572652065787069726564000000600082015250565b60006139cb601d83612de5565b91506139d682613995565b602082019050919050565b600060208201905081810360008301526139fa816139be565b9050919050565b6000608082019050613a1660008301876130a4565b613a2360208301866130fb565b613a306040830185612fe6565b613a3d6060830184612fe6565b95945050505050565b7f4552433230566f7465733a20696e76616c6964206e6f6e636500000000000000600082015250565b6000613a7c601983612de5565b9150613a8782613a46565b602082019050919050565b60006020820190508181036000830152613aab81613a6f565b9050919050565b7f45524332305065726d69743a206578706972656420646561646c696e65000000600082015250565b6000613ae8601d83612de5565b9150613af382613ab2565b602082019050919050565b60006020820190508181036000830152613b1781613adb565b9050919050565b600060c082019050613b3360008301896130a4565b613b4060208301886130fb565b613b4d60408301876130fb565b613b5a6060830186612fe6565b613b676080830185612fe6565b613b7460a0830184612fe6565b979650505050505050565b7f45524332305065726d69743a20696e76616c6964207369676e61747572650000600082015250565b6000613bb5601e83612de5565b9150613bc082613b7f565b602082019050919050565b60006020820190508181036000830152613be481613ba8565b9050919050565b7f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60008201527f766572666c6f77696e6720766f74657300000000000000000000000000000000602082015250565b6000613c47603083612de5565b9150613c5282613beb565b604082019050919050565b60006020820190508181036000830152613c7681613c3a565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000613cb3601f83612de5565b9150613cbe82613c7d565b602082019050919050565b60006020820190508181036000830152613ce281613ca6565b9050919050565b7f53616665436173743a2076616c756520646f65736e27742066697420696e203260008201527f3234206269747300000000000000000000000000000000000000000000000000602082015250565b6000613d45602783612de5565b9150613d5082613ce9565b604082019050919050565b60006020820190508181036000830152613d7481613d38565b9050919050565b7f53616665436173743a2076616c756520646f65736e27742066697420696e203360008201527f3220626974730000000000000000000000000000000000000000000000000000602082015250565b6000613dd7602683612de5565b9150613de282613d7b565b604082019050919050565b60006020820190508181036000830152613e0681613dca565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000613e69602483612de5565b9150613e7482613e0d565b604082019050919050565b60006020820190508181036000830152613e9881613e5c565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000613efb602283612de5565b9150613f0682613e9f565b604082019050919050565b60006020820190508181036000830152613f2a81613eee565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000613f67601d83612de5565b9150613f7282613f31565b602082019050919050565b60006020820190508181036000830152613f9681613f5a565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000613ff9602583612de5565b915061400482613f9d565b604082019050919050565b6000602082019050818103600083015261402881613fec565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b600061408b602383612de5565b91506140968261402f565b604082019050919050565b600060208201905081810360008301526140ba8161407e565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b600061411d602683612de5565b9150614128826140c1565b604082019050919050565b6000602082019050818103600083015261414c81614110565b9050919050565b600060a08201905061416860008301886130a4565b61417560208301876130a4565b61418260408301866130a4565b61418f6060830185612fe6565b61419c60808301846130fb565b9695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006141e082612f02565b91506141eb83612f02565b9250826141fb576141fa6141a6565b5b828204905092915050565b600081905092915050565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b6000614247600283614206565b915061425282614211565b600282019050919050565b6000819050919050565b6142786142738261309a565b61425d565b82525050565b60006142898261423a565b91506142958285614267565b6020820191506142a58284614267565b6020820191508190509392505050565b60006080820190506142ca60008301876130a4565b6142d76020830186613070565b6142e460408301856130a4565b6142f160608301846130a4565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b600061435f601883612de5565b915061436a82614329565b602082019050919050565b6000602082019050818103600083015261438e81614352565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b60006143cb601f83612de5565b91506143d682614395565b602082019050919050565b600060208201905081810360008301526143fa816143be565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b600061445d602283612de5565b915061446882614401565b604082019050919050565b6000602082019050818103600083015261448c81614450565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202776272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b60006144ef602283612de5565b91506144fa82614493565b604082019050919050565b6000602082019050818103600083015261451e816144e2565b905091905056fea2646970667358221220aeea8bd203d520ed39a3ec852fd7ad8d49867219fe89599199b2e75069f8003e64736f6c63430008090033',
  linkReferences: {},
  deployedLinkReferences: {},
};
