// abi for new governor (create space)
export default {
  _format: 'hh-sol-artifact-1',
  contractName: 'DAOForceGovernor',
  sourceName: 'contracts/DAOForceGovernor.sol',
  abi: [
    {
      inputs: [
        {
          internalType: 'contract IVotes',
          name: '_token',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'Empty',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
      ],
      name: 'ProposalCanceled',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'proposer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address[]',
          name: 'targets',
          type: 'address[]',
        },
        {
          indexed: false,
          internalType: 'uint256[]',
          name: 'values',
          type: 'uint256[]',
        },
        {
          indexed: false,
          internalType: 'string[]',
          name: 'signatures',
          type: 'string[]',
        },
        {
          indexed: false,
          internalType: 'bytes[]',
          name: 'calldatas',
          type: 'bytes[]',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'startBlock',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'endBlock',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'description',
          type: 'string',
        },
      ],
      name: 'ProposalCreated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
      ],
      name: 'ProposalExecuted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldQuorumNumerator',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newQuorumNumerator',
          type: 'uint256',
        },
      ],
      name: 'QuorumNumeratorUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'voter',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint8',
          name: 'support',
          type: 'uint8',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'weight',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'reason',
          type: 'string',
        },
      ],
      name: 'VoteCast',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'voter',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint8',
          name: 'support',
          type: 'uint8',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'weight',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'reason',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'bytes',
          name: 'params',
          type: 'bytes',
        },
      ],
      name: 'VoteCastWithParams',
      type: 'event',
    },
    {
      inputs: [],
      name: 'BALLOT_TYPEHASH',
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
      inputs: [],
      name: 'COUNTING_MODE',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [],
      name: 'EXTENDED_BALLOT_TYPEHASH',
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
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
        {
          internalType: 'uint8',
          name: 'support',
          type: 'uint8',
        },
      ],
      name: 'castVote',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
        {
          internalType: 'uint8',
          name: 'support',
          type: 'uint8',
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
      name: 'castVoteBySig',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
        {
          internalType: 'uint8',
          name: 'support',
          type: 'uint8',
        },
        {
          internalType: 'string',
          name: 'reason',
          type: 'string',
        },
      ],
      name: 'castVoteWithReason',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
        {
          internalType: 'uint8',
          name: 'support',
          type: 'uint8',
        },
        {
          internalType: 'string',
          name: 'reason',
          type: 'string',
        },
        {
          internalType: 'bytes',
          name: 'params',
          type: 'bytes',
        },
      ],
      name: 'castVoteWithReasonAndParams',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
        {
          internalType: 'uint8',
          name: 'support',
          type: 'uint8',
        },
        {
          internalType: 'string',
          name: 'reason',
          type: 'string',
        },
        {
          internalType: 'bytes',
          name: 'params',
          type: 'bytes',
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
      name: 'castVoteWithReasonAndParamsBySig',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address[]',
          name: 'targets',
          type: 'address[]',
        },
        {
          internalType: 'uint256[]',
          name: 'values',
          type: 'uint256[]',
        },
        {
          internalType: 'bytes[]',
          name: 'calldatas',
          type: 'bytes[]',
        },
        {
          internalType: 'bytes32',
          name: 'descriptionHash',
          type: 'bytes32',
        },
      ],
      name: 'execute',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'payable',
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
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'blockNumber',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: 'params',
          type: 'bytes',
        },
      ],
      name: 'getVotesWithParams',
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
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'hasVoted',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address[]',
          name: 'targets',
          type: 'address[]',
        },
        {
          internalType: 'uint256[]',
          name: 'values',
          type: 'uint256[]',
        },
        {
          internalType: 'bytes[]',
          name: 'calldatas',
          type: 'bytes[]',
        },
        {
          internalType: 'bytes32',
          name: 'descriptionHash',
          type: 'bytes32',
        },
      ],
      name: 'hashProposal',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'pure',
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
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'uint256[]',
          name: '',
          type: 'uint256[]',
        },
        {
          internalType: 'uint256[]',
          name: '',
          type: 'uint256[]',
        },
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes',
        },
      ],
      name: 'onERC1155BatchReceived',
      outputs: [
        {
          internalType: 'bytes4',
          name: '',
          type: 'bytes4',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes',
        },
      ],
      name: 'onERC1155Received',
      outputs: [
        {
          internalType: 'bytes4',
          name: '',
          type: 'bytes4',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes',
        },
      ],
      name: 'onERC721Received',
      outputs: [
        {
          internalType: 'bytes4',
          name: '',
          type: 'bytes4',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
      ],
      name: 'proposalDeadline',
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
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
      ],
      name: 'proposalSnapshot',
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
      name: 'proposalThreshold',
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
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
      ],
      name: 'proposalVotes',
      outputs: [
        {
          internalType: 'uint256',
          name: 'againstVotes',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'forVotes',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'abstainVotes',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address[]',
          name: 'targets',
          type: 'address[]',
        },
        {
          internalType: 'uint256[]',
          name: 'values',
          type: 'uint256[]',
        },
        {
          internalType: 'bytes[]',
          name: 'calldatas',
          type: 'bytes[]',
        },
        {
          internalType: 'string',
          name: 'description',
          type: 'string',
        },
      ],
      name: 'propose',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
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
      name: 'quorum',
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
      name: 'quorumDenominator',
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
          internalType: 'uint256',
          name: 'blockNumber',
          type: 'uint256',
        },
      ],
      name: 'quorumNumerator',
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
      name: 'quorumNumerator',
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
          name: 'target',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
      ],
      name: 'relay',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
      ],
      name: 'state',
      outputs: [
        {
          internalType: 'enum IGovernor.ProposalState',
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
          internalType: 'bytes4',
          name: 'interfaceId',
          type: 'bytes4',
        },
      ],
      name: 'supportsInterface',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'token',
      outputs: [
        {
          internalType: 'contract IVotes',
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
          name: 'newQuorumNumerator',
          type: 'uint256',
        },
      ],
      name: 'updateQuorumNumerator',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'version',
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
      name: 'votingDelay',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [],
      name: 'votingPeriod',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      stateMutability: 'payable',
      type: 'receive',
    },
  ],
  bytecode:
    '0x6101606040523480156200001257600080fd5b506040516200685838038062006858833981810160405281019062000038919062000908565b600a816040518060400160405280601081526020017f44414f466f726365476f7665726e6f720000000000000000000000000000000081525080620000826200019d60201b60201c565b60008280519060200120905060008280519060200120905060007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f90508260e081815250508161010081815250504660a08181525050620000eb818484620001da60201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1681525050806101208181525050505050505080600090805190602001906200014c929190620007da565b50508073ffffffffffffffffffffffffffffffffffffffff166101408173ffffffffffffffffffffffffffffffffffffffff16815250505062000195816200021660201b60201c565b505062000d08565b60606040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250905090565b60008383834630604051602001620001f795949392919062000981565b6040516020818303038152906040528051906020012090509392505050565b62000226620003f560201b60201c565b8111156200026b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002629062000a8b565b60405180910390fd5b60006200027d620003fe60201b60201c565b9050600081141580156200029957506000600660000180549050145b15620003995760066000016040518060400160405280600063ffffffff168152602001620002d2846200043660201b62001a401760201c565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548163ffffffff021916908363ffffffff16021790555060208201518160000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555050505b620003b4826006620004a460201b62001aab1790919060201c565b50507f0553476bf02ef2726e8ce5ced78d63e26e602e4a2257b1f559418e24b46339978183604051620003e992919062000aad565b60405180910390a15050565b60006064905090565b600080600660000180549050146200042d57620004276006620006e260201b62001cad1760201c565b62000431565b6005545b905090565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff80168211156200049c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004939062000b50565b60405180910390fd5b819050919050565b6000806000846000018054905090506000620004c686620006e260201b60201c565b90506000821180156200052257504386600001600184620004e8919062000ba1565b81548110620004fc57620004fb62000bdc565b5b9060005260206000200160000160009054906101000a900463ffffffff1663ffffffff16145b15620005c6576200053e856200043660201b62001a401760201c565b8660000160018462000551919062000ba1565b8154811062000565576200056462000bdc565b5b9060005260206000200160000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff160217905550620006d3565b856000016040518060400160405280620005eb436200078460201b62001d481760201c565b63ffffffff1681526020016200060c886200043660201b62001a401760201c565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548163ffffffff021916908363ffffffff16021790555060208201518160000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555050505b80859350935050509250929050565b60008082600001805490509050600081146200075b57826000016001826200070b919062000ba1565b815481106200071f576200071e62000bdc565b5b9060005260206000200160000160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166200075e565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16915050919050565b600063ffffffff8016821115620007d2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620007c99062000c81565b60405180910390fd5b819050919050565b828054620007e89062000cd2565b90600052602060002090601f0160209004810192826200080c576000855562000858565b82601f106200082757805160ff191683800117855562000858565b8280016001018555821562000858579182015b82811115620008575782518255916020019190600101906200083a565b5b5090506200086791906200086b565b5090565b5b80821115620008865760008160009055506001016200086c565b5090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620008bc826200088f565b9050919050565b6000620008d082620008af565b9050919050565b620008e281620008c3565b8114620008ee57600080fd5b50565b6000815190506200090281620008d7565b92915050565b6000602082840312156200092157620009206200088a565b5b60006200093184828501620008f1565b91505092915050565b6000819050919050565b6200094f816200093a565b82525050565b6000819050919050565b6200096a8162000955565b82525050565b6200097b81620008af565b82525050565b600060a08201905062000998600083018862000944565b620009a7602083018762000944565b620009b6604083018662000944565b620009c560608301856200095f565b620009d4608083018462000970565b9695505050505050565b600082825260208201905092915050565b7f476f7665726e6f72566f74657351756f72756d4672616374696f6e3a2071756f60008201527f72756d4e756d657261746f72206f7665722071756f72756d44656e6f6d696e6160208201527f746f720000000000000000000000000000000000000000000000000000000000604082015250565b600062000a73604383620009de565b915062000a8082620009ef565b606082019050919050565b6000602082019050818103600083015262000aa68162000a64565b9050919050565b600060408201905062000ac460008301856200095f565b62000ad360208301846200095f565b9392505050565b7f53616665436173743a2076616c756520646f65736e27742066697420696e203260008201527f3234206269747300000000000000000000000000000000000000000000000000602082015250565b600062000b38602783620009de565b915062000b458262000ada565b604082019050919050565b6000602082019050818103600083015262000b6b8162000b29565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600062000bae8262000955565b915062000bbb8362000955565b92508282101562000bd15762000bd062000b72565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f53616665436173743a2076616c756520646f65736e27742066697420696e203360008201527f3220626974730000000000000000000000000000000000000000000000000000602082015250565b600062000c69602683620009de565b915062000c768262000c0b565b604082019050919050565b6000602082019050818103600083015262000c9c8162000c5a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168062000ceb57607f821691505b6020821081141562000d025762000d0162000ca3565b5b50919050565b60805160a05160c05160e051610100516101205161014051615ae762000d7160003960008181611a1e0152818161279601526128a301526000612a1301526000612a5501526000612a3401526000612969015260006129bf015260006129e80152615ae76000f3fe6080604052600436106101fd5760003560e01c806360c4247f1161010d578063c01f9e37116100a0578063deaaa7cc1161006f578063deaaa7cc1461085c578063eb9019d414610887578063f23a6e61146108c4578063f8ce560a14610901578063fc0c546a1461093e57610243565b8063c01f9e371461078e578063c28bc2fa146107cb578063c59057e4146107f4578063dd4e2ba51461083157610243565b80639a802a6d116100dc5780639a802a6d146106be578063a7713a70146106fb578063b58131b014610726578063bc197c811461075157610243565b806360c4247f146105dc5780637b3c71d3146106195780637d5e81e21461065657806397c3d3341461069357610243565b80632fe3e26111610190578063438596321161015f57806343859632146104bb578063544ffc9c146104f857806354fd4d501461053757806356781388146105625780635f398a141461059f57610243565b80632fe3e261146103eb5780633932abb1146104165780633bccf4fd146104415780633e4f49e61461047e57610243565b806306fdde03116101cc57806306fdde0314610316578063150b7a02146103415780632656227d1461037e5780632d63f693146103ae57610243565b806301ffc9a71461024857806302a251a31461028557806303420181146102b057806306f3f9e6146102ed57610243565b36610243573073ffffffffffffffffffffffffffffffffffffffff16610221610969565b73ffffffffffffffffffffffffffffffffffffffff161461024157600080fd5b005b600080fd5b34801561025457600080fd5b5061026f600480360381019061026a9190613337565b610971565b60405161027c919061337f565b60405180910390f35b34801561029157600080fd5b5061029a610ad6565b6040516102a791906133b3565b60405180910390f35b3480156102bc57600080fd5b506102d760048036038101906102d2919061360f565b610ae1565b6040516102e491906133b3565b60405180910390f35b3480156102f957600080fd5b50610314600480360381019061030f91906136ed565b610bc6565b005b34801561032257600080fd5b5061032b610cc2565b60405161033891906137a2565b60405180910390f35b34801561034d57600080fd5b5061036860048036038101906103639190613822565b610d54565b60405161037591906138b4565b60405180910390f35b61039860048036038101906103939190613b36565b610d68565b6040516103a591906133b3565b60405180910390f35b3480156103ba57600080fd5b506103d560048036038101906103d091906136ed565b610eb5565b6040516103e291906133b3565b60405180910390f35b3480156103f757600080fd5b50610400610f23565b60405161040d9190613c00565b60405180910390f35b34801561042257600080fd5b5061042b610f47565b60405161043891906133b3565b60405180910390f35b34801561044d57600080fd5b5061046860048036038101906104639190613c1b565b610f50565b60405161047591906133b3565b60405180910390f35b34801561048a57600080fd5b506104a560048036038101906104a091906136ed565b610fda565b6040516104b29190613d0d565b60405180910390f35b3480156104c757600080fd5b506104e260048036038101906104dd9190613d28565b6110ef565b6040516104ef919061337f565b60405180910390f35b34801561050457600080fd5b5061051f600480360381019061051a91906136ed565b61115a565b60405161052e93929190613d68565b60405180910390f35b34801561054357600080fd5b5061054c611192565b60405161055991906137a2565b60405180910390f35b34801561056e57600080fd5b5061058960048036038101906105849190613d9f565b6111cf565b60405161059691906133b3565b60405180910390f35b3480156105ab57600080fd5b506105c660048036038101906105c19190613ddf565b611200565b6040516105d391906133b3565b60405180910390f35b3480156105e857600080fd5b5061060360048036038101906105fe91906136ed565b61126a565b60405161061091906133b3565b60405180910390f35b34801561062557600080fd5b50610640600480360381019061063b9190613e83565b6113b7565b60405161064d91906133b3565b60405180910390f35b34801561066257600080fd5b5061067d60048036038101906106789190613f98565b61141f565b60405161068a91906133b3565b60405180910390f35b34801561069f57600080fd5b506106a8611726565b6040516106b591906133b3565b60405180910390f35b3480156106ca57600080fd5b506106e560048036038101906106e0919061406f565b61172f565b6040516106f291906133b3565b60405180910390f35b34801561070757600080fd5b50610710611745565b60405161071d91906133b3565b60405180910390f35b34801561073257600080fd5b5061073b61176e565b60405161074891906133b3565b60405180910390f35b34801561075d57600080fd5b50610778600480360381019061077391906140de565b611773565b60405161078591906138b4565b60405180910390f35b34801561079a57600080fd5b506107b560048036038101906107b091906136ed565b611788565b6040516107c291906133b3565b60405180910390f35b3480156107d757600080fd5b506107f260048036038101906107ed9190614203565b6117f6565b005b34801561080057600080fd5b5061081b60048036038101906108169190613b36565b61193c565b60405161082891906133b3565b60405180910390f35b34801561083d57600080fd5b50610846611978565b60405161085391906137a2565b60405180910390f35b34801561086857600080fd5b506108716119b5565b60405161087e9190613c00565b60405180910390f35b34801561089357600080fd5b506108ae60048036038101906108a99190614277565b6119d9565b6040516108bb91906133b3565b60405180910390f35b3480156108d057600080fd5b506108eb60048036038101906108e691906142b7565b6119f5565b6040516108f891906138b4565b60405180910390f35b34801561090d57600080fd5b50610928600480360381019061092391906136ed565b611a0a565b60405161093591906133b3565b60405180910390f35b34801561094a57600080fd5b50610953611a1c565b60405161096091906143ad565b60405180910390f35b600030905090565b6000639a802a6d60e01b630342018160e01b635f398a1460e01b7f79dd796f000000000000000000000000000000000000000000000000000000001818187bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610a5757507f79dd796f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610abf57507f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610acf5750610ace82611d9b565b5b9050919050565b60006204db6c905090565b600080610b64610b5c7fb3b3f3b703cd84ce352197dcff232b1b5d3cfb2025ce47cf04742d0651f1af888c8c8c8c604051610b1d9291906143f8565b60405180910390208b80519060200120604051602001610b41959493929190614420565b60405160208183030381529060405280519060200120611e05565b868686611e1f565b9050610bb78a828b8b8b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508a611e4a565b91505098975050505050505050565b610bce610969565b73ffffffffffffffffffffffffffffffffffffffff16610bec612007565b73ffffffffffffffffffffffffffffffffffffffff1614610c42576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c39906144bf565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff16610c61610969565b73ffffffffffffffffffffffffffffffffffffffff1614610cb6576000610c8661200f565b604051610c949291906143f8565b604051809103902090505b80610caa600261201c565b14610cb457610c9f565b505b610cbf816120f8565b50565b606060008054610cd19061450e565b80601f0160208091040260200160405190810160405280929190818152602001828054610cfd9061450e565b8015610d4a5780601f10610d1f57610100808354040283529160200191610d4a565b820191906000526020600020905b815481529060010190602001808311610d2d57829003601f168201915b5050505050905090565b600063150b7a0260e01b9050949350505050565b600080610d778686868661193c565b90506000610d8482610fda565b905060046007811115610d9a57610d99613c96565b5b816007811115610dad57610dac613c96565b5b1480610ddd575060056007811115610dc857610dc7613c96565b5b816007811115610ddb57610dda613c96565b5b145b610e1c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e13906145b2565b60405180910390fd5b600180600084815260200190815260200160002060020160006101000a81548160ff0219169083151502179055507f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f82604051610e7991906133b3565b60405180910390a1610e8e82888888886122ac565b610e9b8288888888612390565b610ea8828888888861249f565b8192505050949350505050565b6000610f12600160008481526020019081526020016000206000016040518060200160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815250506124fa565b67ffffffffffffffff169050919050565b7fb3b3f3b703cd84ce352197dcff232b1b5d3cfb2025ce47cf04742d0651f1af8881565b60006001905090565b600080610fb1610fa97f150214d74d59b7d1e90c73fc22ef3d991dd0a76b046543d4d80ab92d2a50328f8989604051602001610f8e939291906145d2565b60405160208183030381529060405280519060200120611e05565b868686611e1f565b9050610fce87828860405180602001604052806000815250612508565b91505095945050505050565b6000806001600084815260200190815260200160002090508060020160009054906101000a900460ff16156110135760079150506110ea565b8060020160019054906101000a900460ff16156110345760029150506110ea565b600061103f84610eb5565b90506000811415611085576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161107c90614655565b60405180910390fd5b438110611097576000925050506110ea565b60006110a285611788565b90504381106110b757600193505050506110ea565b6110c085612528565b80156110d157506110d08561256f565b5b156110e257600493505050506110ea565b600393505050505b919050565b60006004600084815260200190815260200160002060030160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600080600080600460008681526020019081526020016000209050806000015481600101548260020154935093509350509193909250565b60606040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250905090565b6000806111da612007565b90506111f784828560405180602001604052806000815250612508565b91505092915050565b60008061120b612007565b905061125e87828888888080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505087611e4a565b91505095945050505050565b6000806006600001805490509050600081141561128c576005549150506113b2565b600060066000016001836112a091906146a4565b815481106112b1576112b06146d8565b5b906000526020600020016040518060400160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1681525050905083816000015163ffffffff16116113995780602001517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16925050506113b2565b6113ad84600661259a90919063ffffffff16565b925050505b919050565b6000806113c2612007565b905061141486828787878080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612508565b915050949350505050565b600061142961176e565b611446611434612007565b60014361144191906146a4565b6119d9565b1015611487576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161147e90614779565b60405180910390fd5b600061149c868686868051906020012061193c565b905084518651146114e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114d99061480b565b60405180910390fd5b8351865114611526576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161151d9061480b565b60405180910390fd5b600086511161156a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161156190614877565b60405180910390fd5b60006001600083815260200190815260200160002090506115ca816000016040518060200160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815250506126f2565b611609576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161160090614909565b60405180910390fd5b600061161b611616610f47565b61270c565b6116244361270c565b61162e919061493d565b9050600061164261163d610ad6565b61270c565b8261164d919061493d565b9050611665828460000161276390919063ffffffff16565b61167b818460010161276390919063ffffffff16565b7f7d84a6263ae0d98d3329bd7b46bb4e8d6f98cd35a7adb45c274c8b7fd5ebd5e0846116a5612007565b8b8b8d5167ffffffffffffffff8111156116c2576116c16134ae565b5b6040519080825280602002602001820160405280156116f557816020015b60608152602001906001900390816116e05790505b508c88888e60405161170f99989796959493929190614d5a565b60405180910390a183945050505050949350505050565b60006064905090565b600061173c848484612792565b90509392505050565b60008060066000018054905014611765576117606006611cad565b611769565b6005545b905090565b600090565b600063bc197c8160e01b905095945050505050565b60006117e5600160008481526020019081526020016000206001016040518060200160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815250506124fa565b67ffffffffffffffff169050919050565b6117fe610969565b73ffffffffffffffffffffffffffffffffffffffff1661181c612007565b73ffffffffffffffffffffffffffffffffffffffff1614611872576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611869906144bf565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff16611891610969565b73ffffffffffffffffffffffffffffffffffffffff16146118e65760006118b661200f565b6040516118c49291906143f8565b604051809103902090505b806118da600261201c565b146118e4576118cf565b505b6119358483838080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505085612848565b5050505050565b6000848484846040516020016119559493929190614e0a565b6040516020818303038152906040528051906020012060001c9050949350505050565b60606040518060400160405280602081526020017f737570706f72743d627261766f2671756f72756d3d666f722c6162737461696e815250905090565b7f150214d74d59b7d1e90c73fc22ef3d991dd0a76b046543d4d80ab92d2a50328f81565b60006119ed83836119e8612877565b612792565b905092915050565b600063f23a6e6160e01b905095945050505050565b6000611a158261288e565b9050919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8016821115611aa3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a9a90614ed6565b60405180910390fd5b819050919050565b6000806000846000018054905090506000611ac586611cad565b9050600082118015611b1b57504386600001600184611ae491906146a4565b81548110611af557611af46146d8565b5b9060005260206000200160000160009054906101000a900463ffffffff1663ffffffff16145b15611bab57611b2985611a40565b86600001600184611b3a91906146a4565b81548110611b4b57611b4a6146d8565b5b9060005260206000200160000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff160217905550611c9e565b856000016040518060400160405280611bc343611d48565b63ffffffff168152602001611bd788611a40565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548163ffffffff021916908363ffffffff16021790555060208201518160000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555050505b80859350935050509250929050565b6000808260000180549050905060008114611d1f5782600001600182611cd391906146a4565b81548110611ce457611ce36146d8565b5b9060005260206000200160000160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16611d22565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16915050919050565b600063ffffffff8016821115611d93576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d8a90614f68565b60405180910390fd5b819050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000611e18611e12612965565b83612a7f565b9050919050565b6000806000611e3087878787612ab2565b91509150611e3d81612bbf565b8192505050949350505050565b60008060016000888152602001908152602001600020905060016007811115611e7657611e75613c96565b5b611e7f88610fda565b6007811115611e9157611e90613c96565b5b14611ed1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ec890614ffa565b60405180910390fd5b6000611f3087611f20846000016040518060200160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815250506124fa565b67ffffffffffffffff1686612792565b9050611f3f8888888488612d94565b600084511415611fa2578673ffffffffffffffffffffffffffffffffffffffff167fb8e138887d0aa13bab447e82de9d5c1777041ecd21ca36ba824ff1e6c07ddda489888489604051611f95949392919061501a565b60405180910390a2611ff9565b8673ffffffffffffffffffffffffffffffffffffffff167fe2babfbac5889a709b63bb7f598b324e08bc5a4fb9ec647fb3cbc9ec07eb87128988848989604051611ff09594939291906150b0565b60405180910390a25b809250505095945050505050565b600033905090565b3660008036915091509091565b600061202782612f9b565b1561205e576040517f3db2a12a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008260000160009054906101000a9004600f0b905082600101600082600f0b600f0b815260200190815260200160002054915082600101600082600f0b600f0b815260200190815260200160002060009055600181018360000160006101000a8154816fffffffffffffffffffffffffffffffff0219169083600f0b6fffffffffffffffffffffffffffffffff16021790555050919050565b612100611726565b811115612142576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612139906151a9565b60405180910390fd5b600061214c611745565b90506000811415801561216757506000600660000180549050145b156122595760066000016040518060400160405280600063ffffffff16815260200161219284611a40565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548163ffffffff021916908363ffffffff16021790555060208201518160000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555050505b61226d826006611aab90919063ffffffff16565b50507f0553476bf02ef2726e8ce5ced78d63e26e602e4a2257b1f559418e24b463399781836040516122a09291906151c9565b60405180910390a15050565b3073ffffffffffffffffffffffffffffffffffffffff166122cb610969565b73ffffffffffffffffffffffffffffffffffffffff16146123895760005b8451811015612387573073ffffffffffffffffffffffffffffffffffffffff1685828151811061231c5761231b6146d8565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16141561237657612375838281518110612356576123556146d8565b5b6020026020010151805190602001206002612fd090919063ffffffff16565b5b80612380906151f2565b90506122e9565b505b5050505050565b6000604051806060016040528060278152602001615a6260279139905060005b8551811015612496576000808783815181106123cf576123ce6146d8565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16878481518110612400576123ff6146d8565b5b602002602001015187858151811061241b5761241a6146d8565b5b6020026020010151604051612430919061526c565b60006040518083038185875af1925050503d806000811461246d576040519150601f19603f3d011682016040523d82523d6000602084013e612472565b606091505b509150915061248282828661304c565b5050508061248f906151f2565b90506123b0565b50505050505050565b3073ffffffffffffffffffffffffffffffffffffffff166124be610969565b73ffffffffffffffffffffffffffffffffffffffff16146124f3576124e36002612f9b565b6124f2576124f160026130b3565b5b5b5050505050565b600081600001519050919050565b600061251e85858585612519612877565b611e4a565b9050949350505050565b600080600460008481526020019081526020016000209050806002015481600101546125549190615283565b61256561256085610eb5565b611a0a565b1115915050919050565b6000806004600084815260200190815260200160002090508060000154816001015411915050919050565b60004382106125de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125d590615325565b60405180910390fd5b60008360000180549050905060005b818110156126625760006126018284613134565b90508486600001828154811061261a576126196146d8565b5b9060005260206000200160000160009054906101000a900463ffffffff1663ffffffff16111561264c5780925061265c565b6001816126599190615283565b91505b506125ed565b600082146126c7578460000160018361267b91906146a4565b8154811061268c5761268b6146d8565b5b9060005260206000200160000160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166126ca565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169250505092915050565b600080826000015167ffffffffffffffff16149050919050565b600067ffffffffffffffff801682111561275b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612752906153b7565b60405180910390fd5b819050919050565b808260000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16633a46b1a885856040518363ffffffff1660e01b81526004016127ef9291906153d7565b60206040518083038186803b15801561280757600080fd5b505afa15801561281b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061283f9190615415565b90509392505050565b606061286e848484604051806060016040528060298152602001615a896029913961315a565b90509392505050565b606060405180602001604052806000815250905090565b6000612898611726565b6128a18361126a565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638e539e8c856040518263ffffffff1660e01b81526004016128fa91906133b3565b60206040518083038186803b15801561291257600080fd5b505afa158015612926573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061294a9190615415565b6129549190615442565b61295e91906154cb565b9050919050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161480156129e157507f000000000000000000000000000000000000000000000000000000000000000046145b15612a0e577f00000000000000000000000000000000000000000000000000000000000000009050612a7c565b612a797f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061326e565b90505b90565b60008282604051602001612a94929190615574565b60405160208183030381529060405280519060200120905092915050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c1115612aed576000600391509150612bb6565b601b8560ff1614158015612b055750601c8560ff1614155b15612b17576000600491509150612bb6565b600060018787878760405160008152602001604052604051612b3c94939291906155ab565b6020604051602081039080840390855afa158015612b5e573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415612bad57600060019250925050612bb6565b80600092509250505b94509492505050565b60006004811115612bd357612bd2613c96565b5b816004811115612be657612be5613c96565b5b1415612bf157612d91565b60016004811115612c0557612c04613c96565b5b816004811115612c1857612c17613c96565b5b1415612c59576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c509061563c565b60405180910390fd5b60026004811115612c6d57612c6c613c96565b5b816004811115612c8057612c7f613c96565b5b1415612cc1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612cb8906156a8565b60405180910390fd5b60036004811115612cd557612cd4613c96565b5b816004811115612ce857612ce7613c96565b5b1415612d29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612d209061573a565b60405180910390fd5b600480811115612d3c57612d3b613c96565b5b816004811115612d4f57612d4e613c96565b5b1415612d90576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612d87906157cc565b60405180910390fd5b5b50565b60006004600087815260200190815260200160002090508060030160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615612e3a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612e319061585e565b60405180910390fd5b60018160030160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060006002811115612ea857612ea7613c96565b5b60ff168460ff161415612ed55782816000016000828254612ec99190615283565b92505081905550612f93565b60016002811115612ee957612ee8613c96565b5b60ff168460ff161415612f165782816001016000828254612f0a9190615283565b92505081905550612f92565b600280811115612f2957612f28613c96565b5b60ff168460ff161415612f565782816002016000828254612f4a9190615283565b92505081905550612f91565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612f88906158f0565b60405180910390fd5b5b5b505050505050565b60008160000160009054906101000a9004600f0b600f0b8260000160109054906101000a9004600f0b600f0b13159050919050565b60008260000160109054906101000a9004600f0b90508183600101600083600f0b600f0b815260200190815260200160002081905550600181018360000160106101000a8154816fffffffffffffffffffffffffffffffff0219169083600f0b6fffffffffffffffffffffffffffffffff160217905550505050565b6060831561305c578290506130ac565b60008351111561306f5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016130a391906137a2565b60405180910390fd5b9392505050565b60008160000160006101000a8154816fffffffffffffffffffffffffffffffff0219169083600f0b6fffffffffffffffffffffffffffffffff16021790555060008160000160106101000a8154816fffffffffffffffffffffffffffffffff0219169083600f0b6fffffffffffffffffffffffffffffffff16021790555050565b6000600282841861314591906154cb565b8284166131529190615283565b905092915050565b60608247101561319f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161319690615982565b60405180910390fd5b6131a8856132a8565b6131e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016131de906159ee565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051613210919061526c565b60006040518083038185875af1925050503d806000811461324d576040519150601f19603f3d011682016040523d82523d6000602084013e613252565b606091505b509150915061326282828661304c565b92505050949350505050565b60008383834630604051602001613289959493929190615a0e565b6040516020818303038152906040528051906020012090509392505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b613314816132df565b811461331f57600080fd5b50565b6000813590506133318161330b565b92915050565b60006020828403121561334d5761334c6132d5565b5b600061335b84828501613322565b91505092915050565b60008115159050919050565b61337981613364565b82525050565b60006020820190506133946000830184613370565b92915050565b6000819050919050565b6133ad8161339a565b82525050565b60006020820190506133c860008301846133a4565b92915050565b6133d78161339a565b81146133e257600080fd5b50565b6000813590506133f4816133ce565b92915050565b600060ff82169050919050565b613410816133fa565b811461341b57600080fd5b50565b60008135905061342d81613407565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261345857613457613433565b5b8235905067ffffffffffffffff81111561347557613474613438565b5b6020830191508360018202830111156134915761349061343d565b5b9250929050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6134e68261349d565b810181811067ffffffffffffffff82111715613505576135046134ae565b5b80604052505050565b60006135186132cb565b905061352482826134dd565b919050565b600067ffffffffffffffff821115613544576135436134ae565b5b61354d8261349d565b9050602081019050919050565b82818337600083830152505050565b600061357c61357784613529565b61350e565b90508281526020810184848401111561359857613597613498565b5b6135a384828561355a565b509392505050565b600082601f8301126135c0576135bf613433565b5b81356135d0848260208601613569565b91505092915050565b6000819050919050565b6135ec816135d9565b81146135f757600080fd5b50565b600081359050613609816135e3565b92915050565b60008060008060008060008060e0898b03121561362f5761362e6132d5565b5b600061363d8b828c016133e5565b985050602061364e8b828c0161341e565b975050604089013567ffffffffffffffff81111561366f5761366e6132da565b5b61367b8b828c01613442565b9650965050606089013567ffffffffffffffff81111561369e5761369d6132da565b5b6136aa8b828c016135ab565b94505060806136bb8b828c0161341e565b93505060a06136cc8b828c016135fa565b92505060c06136dd8b828c016135fa565b9150509295985092959890939650565b600060208284031215613703576137026132d5565b5b6000613711848285016133e5565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015613754578082015181840152602081019050613739565b83811115613763576000848401525b50505050565b60006137748261371a565b61377e8185613725565b935061378e818560208601613736565b6137978161349d565b840191505092915050565b600060208201905081810360008301526137bc8184613769565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006137ef826137c4565b9050919050565b6137ff816137e4565b811461380a57600080fd5b50565b60008135905061381c816137f6565b92915050565b6000806000806080858703121561383c5761383b6132d5565b5b600061384a8782880161380d565b945050602061385b8782880161380d565b935050604061386c878288016133e5565b925050606085013567ffffffffffffffff81111561388d5761388c6132da565b5b613899878288016135ab565b91505092959194509250565b6138ae816132df565b82525050565b60006020820190506138c960008301846138a5565b92915050565b600067ffffffffffffffff8211156138ea576138e96134ae565b5b602082029050602081019050919050565b600061390e613909846138cf565b61350e565b905080838252602082019050602084028301858111156139315761393061343d565b5b835b8181101561395a5780613946888261380d565b845260208401935050602081019050613933565b5050509392505050565b600082601f83011261397957613978613433565b5b81356139898482602086016138fb565b91505092915050565b600067ffffffffffffffff8211156139ad576139ac6134ae565b5b602082029050602081019050919050565b60006139d16139cc84613992565b61350e565b905080838252602082019050602084028301858111156139f4576139f361343d565b5b835b81811015613a1d5780613a0988826133e5565b8452602084019350506020810190506139f6565b5050509392505050565b600082601f830112613a3c57613a3b613433565b5b8135613a4c8482602086016139be565b91505092915050565b600067ffffffffffffffff821115613a7057613a6f6134ae565b5b602082029050602081019050919050565b6000613a94613a8f84613a55565b61350e565b90508083825260208201905060208402830185811115613ab757613ab661343d565b5b835b81811015613afe57803567ffffffffffffffff811115613adc57613adb613433565b5b808601613ae989826135ab565b85526020850194505050602081019050613ab9565b5050509392505050565b600082601f830112613b1d57613b1c613433565b5b8135613b2d848260208601613a81565b91505092915050565b60008060008060808587031215613b5057613b4f6132d5565b5b600085013567ffffffffffffffff811115613b6e57613b6d6132da565b5b613b7a87828801613964565b945050602085013567ffffffffffffffff811115613b9b57613b9a6132da565b5b613ba787828801613a27565b935050604085013567ffffffffffffffff811115613bc857613bc76132da565b5b613bd487828801613b08565b9250506060613be5878288016135fa565b91505092959194509250565b613bfa816135d9565b82525050565b6000602082019050613c156000830184613bf1565b92915050565b600080600080600060a08688031215613c3757613c366132d5565b5b6000613c45888289016133e5565b9550506020613c568882890161341e565b9450506040613c678882890161341e565b9350506060613c78888289016135fa565b9250506080613c89888289016135fa565b9150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60088110613cd657613cd5613c96565b5b50565b6000819050613ce782613cc5565b919050565b6000613cf782613cd9565b9050919050565b613d0781613cec565b82525050565b6000602082019050613d226000830184613cfe565b92915050565b60008060408385031215613d3f57613d3e6132d5565b5b6000613d4d858286016133e5565b9250506020613d5e8582860161380d565b9150509250929050565b6000606082019050613d7d60008301866133a4565b613d8a60208301856133a4565b613d9760408301846133a4565b949350505050565b60008060408385031215613db657613db56132d5565b5b6000613dc4858286016133e5565b9250506020613dd58582860161341e565b9150509250929050565b600080600080600060808688031215613dfb57613dfa6132d5565b5b6000613e09888289016133e5565b9550506020613e1a8882890161341e565b945050604086013567ffffffffffffffff811115613e3b57613e3a6132da565b5b613e4788828901613442565b9350935050606086013567ffffffffffffffff811115613e6a57613e696132da565b5b613e76888289016135ab565b9150509295509295909350565b60008060008060608587031215613e9d57613e9c6132d5565b5b6000613eab878288016133e5565b9450506020613ebc8782880161341e565b935050604085013567ffffffffffffffff811115613edd57613edc6132da565b5b613ee987828801613442565b925092505092959194509250565b600067ffffffffffffffff821115613f1257613f116134ae565b5b613f1b8261349d565b9050602081019050919050565b6000613f3b613f3684613ef7565b61350e565b905082815260208101848484011115613f5757613f56613498565b5b613f6284828561355a565b509392505050565b600082601f830112613f7f57613f7e613433565b5b8135613f8f848260208601613f28565b91505092915050565b60008060008060808587031215613fb257613fb16132d5565b5b600085013567ffffffffffffffff811115613fd057613fcf6132da565b5b613fdc87828801613964565b945050602085013567ffffffffffffffff811115613ffd57613ffc6132da565b5b61400987828801613a27565b935050604085013567ffffffffffffffff81111561402a576140296132da565b5b61403687828801613b08565b925050606085013567ffffffffffffffff811115614057576140566132da565b5b61406387828801613f6a565b91505092959194509250565b600080600060608486031215614088576140876132d5565b5b60006140968682870161380d565b93505060206140a7868287016133e5565b925050604084013567ffffffffffffffff8111156140c8576140c76132da565b5b6140d4868287016135ab565b9150509250925092565b600080600080600060a086880312156140fa576140f96132d5565b5b60006141088882890161380d565b95505060206141198882890161380d565b945050604086013567ffffffffffffffff81111561413a576141396132da565b5b61414688828901613a27565b935050606086013567ffffffffffffffff811115614167576141666132da565b5b61417388828901613a27565b925050608086013567ffffffffffffffff811115614194576141936132da565b5b6141a0888289016135ab565b9150509295509295909350565b60008083601f8401126141c3576141c2613433565b5b8235905067ffffffffffffffff8111156141e0576141df613438565b5b6020830191508360018202830111156141fc576141fb61343d565b5b9250929050565b6000806000806060858703121561421d5761421c6132d5565b5b600061422b8782880161380d565b945050602061423c878288016133e5565b935050604085013567ffffffffffffffff81111561425d5761425c6132da565b5b614269878288016141ad565b925092505092959194509250565b6000806040838503121561428e5761428d6132d5565b5b600061429c8582860161380d565b92505060206142ad858286016133e5565b9150509250929050565b600080600080600060a086880312156142d3576142d26132d5565b5b60006142e18882890161380d565b95505060206142f28882890161380d565b9450506040614303888289016133e5565b9350506060614314888289016133e5565b925050608086013567ffffffffffffffff811115614335576143346132da565b5b614341888289016135ab565b9150509295509295909350565b6000819050919050565b600061437361436e614369846137c4565b61434e565b6137c4565b9050919050565b600061438582614358565b9050919050565b60006143978261437a565b9050919050565b6143a78161438c565b82525050565b60006020820190506143c2600083018461439e565b92915050565b600081905092915050565b60006143df83856143c8565b93506143ec83858461355a565b82840190509392505050565b60006144058284866143d3565b91508190509392505050565b61441a816133fa565b82525050565b600060a0820190506144356000830188613bf1565b61444260208301876133a4565b61444f6040830186614411565b61445c6060830185613bf1565b6144696080830184613bf1565b9695505050505050565b7f476f7665726e6f723a206f6e6c79476f7665726e616e63650000000000000000600082015250565b60006144a9601883613725565b91506144b482614473565b602082019050919050565b600060208201905081810360008301526144d88161449c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061452657607f821691505b6020821081141561453a576145396144df565b5b50919050565b7f476f7665726e6f723a2070726f706f73616c206e6f742073756363657373667560008201527f6c00000000000000000000000000000000000000000000000000000000000000602082015250565b600061459c602183613725565b91506145a782614540565b604082019050919050565b600060208201905081810360008301526145cb8161458f565b9050919050565b60006060820190506145e76000830186613bf1565b6145f460208301856133a4565b6146016040830184614411565b949350505050565b7f476f7665726e6f723a20756e6b6e6f776e2070726f706f73616c206964000000600082015250565b600061463f601d83613725565b915061464a82614609565b602082019050919050565b6000602082019050818103600083015261466e81614632565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006146af8261339a565b91506146ba8361339a565b9250828210156146cd576146cc614675565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f476f7665726e6f723a2070726f706f73657220766f7465732062656c6f77207060008201527f726f706f73616c207468726573686f6c64000000000000000000000000000000602082015250565b6000614763603183613725565b915061476e82614707565b604082019050919050565b6000602082019050818103600083015261479281614756565b9050919050565b7f476f7665726e6f723a20696e76616c69642070726f706f73616c206c656e677460008201527f6800000000000000000000000000000000000000000000000000000000000000602082015250565b60006147f5602183613725565b915061480082614799565b604082019050919050565b60006020820190508181036000830152614824816147e8565b9050919050565b7f476f7665726e6f723a20656d7074792070726f706f73616c0000000000000000600082015250565b6000614861601883613725565b915061486c8261482b565b602082019050919050565b6000602082019050818103600083015261489081614854565b9050919050565b7f476f7665726e6f723a2070726f706f73616c20616c726561647920657869737460008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b60006148f3602183613725565b91506148fe82614897565b604082019050919050565b60006020820190508181036000830152614922816148e6565b9050919050565b600067ffffffffffffffff82169050919050565b600061494882614929565b915061495383614929565b92508267ffffffffffffffff038211156149705761496f614675565b5b828201905092915050565b614984816137e4565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6149bf816137e4565b82525050565b60006149d183836149b6565b60208301905092915050565b6000602082019050919050565b60006149f58261498a565b6149ff8185614995565b9350614a0a836149a6565b8060005b83811015614a3b578151614a2288826149c5565b9750614a2d836149dd565b925050600181019050614a0e565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b614a7d8161339a565b82525050565b6000614a8f8383614a74565b60208301905092915050565b6000602082019050919050565b6000614ab382614a48565b614abd8185614a53565b9350614ac883614a64565b8060005b83811015614af9578151614ae08882614a83565b9750614aeb83614a9b565b925050600181019050614acc565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b6000614b4e8261371a565b614b588185614b32565b9350614b68818560208601613736565b614b718161349d565b840191505092915050565b6000614b888383614b43565b905092915050565b6000602082019050919050565b6000614ba882614b06565b614bb28185614b11565b935083602082028501614bc485614b22565b8060005b85811015614c005784840389528151614be18582614b7c565b9450614bec83614b90565b925060208a01995050600181019050614bc8565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b6000614c6582614c3e565b614c6f8185614c49565b9350614c7f818560208601613736565b614c888161349d565b840191505092915050565b6000614c9f8383614c5a565b905092915050565b6000602082019050919050565b6000614cbf82614c12565b614cc98185614c1d565b935083602082028501614cdb85614c2e565b8060005b85811015614d175784840389528151614cf88582614c93565b9450614d0383614ca7565b925060208a01995050600181019050614cdf565b50829750879550505050505092915050565b6000614d44614d3f614d3a84614929565b61434e565b61339a565b9050919050565b614d5481614d29565b82525050565b600061012082019050614d70600083018c6133a4565b614d7d602083018b61497b565b8181036040830152614d8f818a6149ea565b90508181036060830152614da38189614aa8565b90508181036080830152614db78188614b9d565b905081810360a0830152614dcb8187614cb4565b9050614dda60c0830186614d4b565b614de760e0830185614d4b565b818103610100830152614dfa8184613769565b90509a9950505050505050505050565b60006080820190508181036000830152614e2481876149ea565b90508181036020830152614e388186614aa8565b90508181036040830152614e4c8185614cb4565b9050614e5b6060830184613bf1565b95945050505050565b7f53616665436173743a2076616c756520646f65736e27742066697420696e203260008201527f3234206269747300000000000000000000000000000000000000000000000000602082015250565b6000614ec0602783613725565b9150614ecb82614e64565b604082019050919050565b60006020820190508181036000830152614eef81614eb3565b9050919050565b7f53616665436173743a2076616c756520646f65736e27742066697420696e203360008201527f3220626974730000000000000000000000000000000000000000000000000000602082015250565b6000614f52602683613725565b9150614f5d82614ef6565b604082019050919050565b60006020820190508181036000830152614f8181614f45565b9050919050565b7f476f7665726e6f723a20766f7465206e6f742063757272656e746c792061637460008201527f6976650000000000000000000000000000000000000000000000000000000000602082015250565b6000614fe4602383613725565b9150614fef82614f88565b604082019050919050565b6000602082019050818103600083015261501381614fd7565b9050919050565b600060808201905061502f60008301876133a4565b61503c6020830186614411565b61504960408301856133a4565b818103606083015261505b8184613769565b905095945050505050565b600082825260208201905092915050565b600061508282614c3e565b61508c8185615066565b935061509c818560208601613736565b6150a58161349d565b840191505092915050565b600060a0820190506150c560008301886133a4565b6150d26020830187614411565b6150df60408301866133a4565b81810360608301526150f18185613769565b905081810360808301526151058184615077565b90509695505050505050565b7f476f7665726e6f72566f74657351756f72756d4672616374696f6e3a2071756f60008201527f72756d4e756d657261746f72206f7665722071756f72756d44656e6f6d696e6160208201527f746f720000000000000000000000000000000000000000000000000000000000604082015250565b6000615193604383613725565b915061519e82615111565b606082019050919050565b600060208201905081810360008301526151c281615186565b9050919050565b60006040820190506151de60008301856133a4565b6151eb60208301846133a4565b9392505050565b60006151fd8261339a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156152305761522f614675565b5b600182019050919050565b600061524682614c3e565b61525081856143c8565b9350615260818560208601613736565b80840191505092915050565b6000615278828461523b565b915081905092915050565b600061528e8261339a565b91506152998361339a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156152ce576152cd614675565b5b828201905092915050565b7f436865636b706f696e74733a20626c6f636b206e6f7420796574206d696e6564600082015250565b600061530f602083613725565b915061531a826152d9565b602082019050919050565b6000602082019050818103600083015261533e81615302565b9050919050565b7f53616665436173743a2076616c756520646f65736e27742066697420696e203660008201527f3420626974730000000000000000000000000000000000000000000000000000602082015250565b60006153a1602683613725565b91506153ac82615345565b604082019050919050565b600060208201905081810360008301526153d081615394565b9050919050565b60006040820190506153ec600083018561497b565b6153f960208301846133a4565b9392505050565b60008151905061540f816133ce565b92915050565b60006020828403121561542b5761542a6132d5565b5b600061543984828501615400565b91505092915050565b600061544d8261339a565b91506154588361339a565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561549157615490614675565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006154d68261339a565b91506154e18361339a565b9250826154f1576154f061549c565b5b828204905092915050565b600081905092915050565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b600061553d6002836154fc565b915061554882615507565b600282019050919050565b6000819050919050565b61556e615569826135d9565b615553565b82525050565b600061557f82615530565b915061558b828561555d565b60208201915061559b828461555d565b6020820191508190509392505050565b60006080820190506155c06000830187613bf1565b6155cd6020830186614411565b6155da6040830185613bf1565b6155e76060830184613bf1565b95945050505050565b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000615626601883613725565b9150615631826155f0565b602082019050919050565b6000602082019050818103600083015261565581615619565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000615692601f83613725565b915061569d8261565c565b602082019050919050565b600060208201905081810360008301526156c181615685565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000615724602283613725565b915061572f826156c8565b604082019050919050565b6000602082019050818103600083015261575381615717565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202776272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b60006157b6602283613725565b91506157c18261575a565b604082019050919050565b600060208201905081810360008301526157e5816157a9565b9050919050565b7f476f7665726e6f72566f74696e6753696d706c653a20766f746520616c72656160008201527f6479206361737400000000000000000000000000000000000000000000000000602082015250565b6000615848602783613725565b9150615853826157ec565b604082019050919050565b600060208201905081810360008301526158778161583b565b9050919050565b7f476f7665726e6f72566f74696e6753696d706c653a20696e76616c696420766160008201527f6c756520666f7220656e756d20566f7465547970650000000000000000000000602082015250565b60006158da603583613725565b91506158e58261587e565b604082019050919050565b60006020820190508181036000830152615909816158cd565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b600061596c602683613725565b915061597782615910565b604082019050919050565b6000602082019050818103600083015261599b8161595f565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b60006159d8601d83613725565b91506159e3826159a2565b602082019050919050565b60006020820190508181036000830152615a07816159cb565b9050919050565b600060a082019050615a236000830188613bf1565b615a306020830187613bf1565b615a3d6040830186613bf1565b615a4a60608301856133a4565b615a57608083018461497b565b969550505050505056fe476f7665726e6f723a2063616c6c20726576657274656420776974686f7574206d657373616765416464726573733a206c6f772d6c6576656c2063616c6c20776974682076616c7565206661696c6564a264697066735822122056489f8c2ca1f4a6e9079826b50d7b1272ec38636b89734509323c252989a14c64736f6c63430008090033',
  deployedBytecode:
    '0x6080604052600436106101fd5760003560e01c806360c4247f1161010d578063c01f9e37116100a0578063deaaa7cc1161006f578063deaaa7cc1461085c578063eb9019d414610887578063f23a6e61146108c4578063f8ce560a14610901578063fc0c546a1461093e57610243565b8063c01f9e371461078e578063c28bc2fa146107cb578063c59057e4146107f4578063dd4e2ba51461083157610243565b80639a802a6d116100dc5780639a802a6d146106be578063a7713a70146106fb578063b58131b014610726578063bc197c811461075157610243565b806360c4247f146105dc5780637b3c71d3146106195780637d5e81e21461065657806397c3d3341461069357610243565b80632fe3e26111610190578063438596321161015f57806343859632146104bb578063544ffc9c146104f857806354fd4d501461053757806356781388146105625780635f398a141461059f57610243565b80632fe3e261146103eb5780633932abb1146104165780633bccf4fd146104415780633e4f49e61461047e57610243565b806306fdde03116101cc57806306fdde0314610316578063150b7a02146103415780632656227d1461037e5780632d63f693146103ae57610243565b806301ffc9a71461024857806302a251a31461028557806303420181146102b057806306f3f9e6146102ed57610243565b36610243573073ffffffffffffffffffffffffffffffffffffffff16610221610969565b73ffffffffffffffffffffffffffffffffffffffff161461024157600080fd5b005b600080fd5b34801561025457600080fd5b5061026f600480360381019061026a9190613337565b610971565b60405161027c919061337f565b60405180910390f35b34801561029157600080fd5b5061029a610ad6565b6040516102a791906133b3565b60405180910390f35b3480156102bc57600080fd5b506102d760048036038101906102d2919061360f565b610ae1565b6040516102e491906133b3565b60405180910390f35b3480156102f957600080fd5b50610314600480360381019061030f91906136ed565b610bc6565b005b34801561032257600080fd5b5061032b610cc2565b60405161033891906137a2565b60405180910390f35b34801561034d57600080fd5b5061036860048036038101906103639190613822565b610d54565b60405161037591906138b4565b60405180910390f35b61039860048036038101906103939190613b36565b610d68565b6040516103a591906133b3565b60405180910390f35b3480156103ba57600080fd5b506103d560048036038101906103d091906136ed565b610eb5565b6040516103e291906133b3565b60405180910390f35b3480156103f757600080fd5b50610400610f23565b60405161040d9190613c00565b60405180910390f35b34801561042257600080fd5b5061042b610f47565b60405161043891906133b3565b60405180910390f35b34801561044d57600080fd5b5061046860048036038101906104639190613c1b565b610f50565b60405161047591906133b3565b60405180910390f35b34801561048a57600080fd5b506104a560048036038101906104a091906136ed565b610fda565b6040516104b29190613d0d565b60405180910390f35b3480156104c757600080fd5b506104e260048036038101906104dd9190613d28565b6110ef565b6040516104ef919061337f565b60405180910390f35b34801561050457600080fd5b5061051f600480360381019061051a91906136ed565b61115a565b60405161052e93929190613d68565b60405180910390f35b34801561054357600080fd5b5061054c611192565b60405161055991906137a2565b60405180910390f35b34801561056e57600080fd5b5061058960048036038101906105849190613d9f565b6111cf565b60405161059691906133b3565b60405180910390f35b3480156105ab57600080fd5b506105c660048036038101906105c19190613ddf565b611200565b6040516105d391906133b3565b60405180910390f35b3480156105e857600080fd5b5061060360048036038101906105fe91906136ed565b61126a565b60405161061091906133b3565b60405180910390f35b34801561062557600080fd5b50610640600480360381019061063b9190613e83565b6113b7565b60405161064d91906133b3565b60405180910390f35b34801561066257600080fd5b5061067d60048036038101906106789190613f98565b61141f565b60405161068a91906133b3565b60405180910390f35b34801561069f57600080fd5b506106a8611726565b6040516106b591906133b3565b60405180910390f35b3480156106ca57600080fd5b506106e560048036038101906106e0919061406f565b61172f565b6040516106f291906133b3565b60405180910390f35b34801561070757600080fd5b50610710611745565b60405161071d91906133b3565b60405180910390f35b34801561073257600080fd5b5061073b61176e565b60405161074891906133b3565b60405180910390f35b34801561075d57600080fd5b50610778600480360381019061077391906140de565b611773565b60405161078591906138b4565b60405180910390f35b34801561079a57600080fd5b506107b560048036038101906107b091906136ed565b611788565b6040516107c291906133b3565b60405180910390f35b3480156107d757600080fd5b506107f260048036038101906107ed9190614203565b6117f6565b005b34801561080057600080fd5b5061081b60048036038101906108169190613b36565b61193c565b60405161082891906133b3565b60405180910390f35b34801561083d57600080fd5b50610846611978565b60405161085391906137a2565b60405180910390f35b34801561086857600080fd5b506108716119b5565b60405161087e9190613c00565b60405180910390f35b34801561089357600080fd5b506108ae60048036038101906108a99190614277565b6119d9565b6040516108bb91906133b3565b60405180910390f35b3480156108d057600080fd5b506108eb60048036038101906108e691906142b7565b6119f5565b6040516108f891906138b4565b60405180910390f35b34801561090d57600080fd5b50610928600480360381019061092391906136ed565b611a0a565b60405161093591906133b3565b60405180910390f35b34801561094a57600080fd5b50610953611a1c565b60405161096091906143ad565b60405180910390f35b600030905090565b6000639a802a6d60e01b630342018160e01b635f398a1460e01b7f79dd796f000000000000000000000000000000000000000000000000000000001818187bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610a5757507f79dd796f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610abf57507f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610acf5750610ace82611d9b565b5b9050919050565b60006204db6c905090565b600080610b64610b5c7fb3b3f3b703cd84ce352197dcff232b1b5d3cfb2025ce47cf04742d0651f1af888c8c8c8c604051610b1d9291906143f8565b60405180910390208b80519060200120604051602001610b41959493929190614420565b60405160208183030381529060405280519060200120611e05565b868686611e1f565b9050610bb78a828b8b8b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508a611e4a565b91505098975050505050505050565b610bce610969565b73ffffffffffffffffffffffffffffffffffffffff16610bec612007565b73ffffffffffffffffffffffffffffffffffffffff1614610c42576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c39906144bf565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff16610c61610969565b73ffffffffffffffffffffffffffffffffffffffff1614610cb6576000610c8661200f565b604051610c949291906143f8565b604051809103902090505b80610caa600261201c565b14610cb457610c9f565b505b610cbf816120f8565b50565b606060008054610cd19061450e565b80601f0160208091040260200160405190810160405280929190818152602001828054610cfd9061450e565b8015610d4a5780601f10610d1f57610100808354040283529160200191610d4a565b820191906000526020600020905b815481529060010190602001808311610d2d57829003601f168201915b5050505050905090565b600063150b7a0260e01b9050949350505050565b600080610d778686868661193c565b90506000610d8482610fda565b905060046007811115610d9a57610d99613c96565b5b816007811115610dad57610dac613c96565b5b1480610ddd575060056007811115610dc857610dc7613c96565b5b816007811115610ddb57610dda613c96565b5b145b610e1c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e13906145b2565b60405180910390fd5b600180600084815260200190815260200160002060020160006101000a81548160ff0219169083151502179055507f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f82604051610e7991906133b3565b60405180910390a1610e8e82888888886122ac565b610e9b8288888888612390565b610ea8828888888861249f565b8192505050949350505050565b6000610f12600160008481526020019081526020016000206000016040518060200160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815250506124fa565b67ffffffffffffffff169050919050565b7fb3b3f3b703cd84ce352197dcff232b1b5d3cfb2025ce47cf04742d0651f1af8881565b60006001905090565b600080610fb1610fa97f150214d74d59b7d1e90c73fc22ef3d991dd0a76b046543d4d80ab92d2a50328f8989604051602001610f8e939291906145d2565b60405160208183030381529060405280519060200120611e05565b868686611e1f565b9050610fce87828860405180602001604052806000815250612508565b91505095945050505050565b6000806001600084815260200190815260200160002090508060020160009054906101000a900460ff16156110135760079150506110ea565b8060020160019054906101000a900460ff16156110345760029150506110ea565b600061103f84610eb5565b90506000811415611085576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161107c90614655565b60405180910390fd5b438110611097576000925050506110ea565b60006110a285611788565b90504381106110b757600193505050506110ea565b6110c085612528565b80156110d157506110d08561256f565b5b156110e257600493505050506110ea565b600393505050505b919050565b60006004600084815260200190815260200160002060030160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600080600080600460008681526020019081526020016000209050806000015481600101548260020154935093509350509193909250565b60606040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250905090565b6000806111da612007565b90506111f784828560405180602001604052806000815250612508565b91505092915050565b60008061120b612007565b905061125e87828888888080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505087611e4a565b91505095945050505050565b6000806006600001805490509050600081141561128c576005549150506113b2565b600060066000016001836112a091906146a4565b815481106112b1576112b06146d8565b5b906000526020600020016040518060400160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1681525050905083816000015163ffffffff16116113995780602001517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16925050506113b2565b6113ad84600661259a90919063ffffffff16565b925050505b919050565b6000806113c2612007565b905061141486828787878080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612508565b915050949350505050565b600061142961176e565b611446611434612007565b60014361144191906146a4565b6119d9565b1015611487576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161147e90614779565b60405180910390fd5b600061149c868686868051906020012061193c565b905084518651146114e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114d99061480b565b60405180910390fd5b8351865114611526576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161151d9061480b565b60405180910390fd5b600086511161156a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161156190614877565b60405180910390fd5b60006001600083815260200190815260200160002090506115ca816000016040518060200160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815250506126f2565b611609576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161160090614909565b60405180910390fd5b600061161b611616610f47565b61270c565b6116244361270c565b61162e919061493d565b9050600061164261163d610ad6565b61270c565b8261164d919061493d565b9050611665828460000161276390919063ffffffff16565b61167b818460010161276390919063ffffffff16565b7f7d84a6263ae0d98d3329bd7b46bb4e8d6f98cd35a7adb45c274c8b7fd5ebd5e0846116a5612007565b8b8b8d5167ffffffffffffffff8111156116c2576116c16134ae565b5b6040519080825280602002602001820160405280156116f557816020015b60608152602001906001900390816116e05790505b508c88888e60405161170f99989796959493929190614d5a565b60405180910390a183945050505050949350505050565b60006064905090565b600061173c848484612792565b90509392505050565b60008060066000018054905014611765576117606006611cad565b611769565b6005545b905090565b600090565b600063bc197c8160e01b905095945050505050565b60006117e5600160008481526020019081526020016000206001016040518060200160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815250506124fa565b67ffffffffffffffff169050919050565b6117fe610969565b73ffffffffffffffffffffffffffffffffffffffff1661181c612007565b73ffffffffffffffffffffffffffffffffffffffff1614611872576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611869906144bf565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff16611891610969565b73ffffffffffffffffffffffffffffffffffffffff16146118e65760006118b661200f565b6040516118c49291906143f8565b604051809103902090505b806118da600261201c565b146118e4576118cf565b505b6119358483838080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505085612848565b5050505050565b6000848484846040516020016119559493929190614e0a565b6040516020818303038152906040528051906020012060001c9050949350505050565b60606040518060400160405280602081526020017f737570706f72743d627261766f2671756f72756d3d666f722c6162737461696e815250905090565b7f150214d74d59b7d1e90c73fc22ef3d991dd0a76b046543d4d80ab92d2a50328f81565b60006119ed83836119e8612877565b612792565b905092915050565b600063f23a6e6160e01b905095945050505050565b6000611a158261288e565b9050919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8016821115611aa3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a9a90614ed6565b60405180910390fd5b819050919050565b6000806000846000018054905090506000611ac586611cad565b9050600082118015611b1b57504386600001600184611ae491906146a4565b81548110611af557611af46146d8565b5b9060005260206000200160000160009054906101000a900463ffffffff1663ffffffff16145b15611bab57611b2985611a40565b86600001600184611b3a91906146a4565b81548110611b4b57611b4a6146d8565b5b9060005260206000200160000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff160217905550611c9e565b856000016040518060400160405280611bc343611d48565b63ffffffff168152602001611bd788611a40565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548163ffffffff021916908363ffffffff16021790555060208201518160000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555050505b80859350935050509250929050565b6000808260000180549050905060008114611d1f5782600001600182611cd391906146a4565b81548110611ce457611ce36146d8565b5b9060005260206000200160000160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16611d22565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16915050919050565b600063ffffffff8016821115611d93576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d8a90614f68565b60405180910390fd5b819050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000611e18611e12612965565b83612a7f565b9050919050565b6000806000611e3087878787612ab2565b91509150611e3d81612bbf565b8192505050949350505050565b60008060016000888152602001908152602001600020905060016007811115611e7657611e75613c96565b5b611e7f88610fda565b6007811115611e9157611e90613c96565b5b14611ed1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ec890614ffa565b60405180910390fd5b6000611f3087611f20846000016040518060200160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815250506124fa565b67ffffffffffffffff1686612792565b9050611f3f8888888488612d94565b600084511415611fa2578673ffffffffffffffffffffffffffffffffffffffff167fb8e138887d0aa13bab447e82de9d5c1777041ecd21ca36ba824ff1e6c07ddda489888489604051611f95949392919061501a565b60405180910390a2611ff9565b8673ffffffffffffffffffffffffffffffffffffffff167fe2babfbac5889a709b63bb7f598b324e08bc5a4fb9ec647fb3cbc9ec07eb87128988848989604051611ff09594939291906150b0565b60405180910390a25b809250505095945050505050565b600033905090565b3660008036915091509091565b600061202782612f9b565b1561205e576040517f3db2a12a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008260000160009054906101000a9004600f0b905082600101600082600f0b600f0b815260200190815260200160002054915082600101600082600f0b600f0b815260200190815260200160002060009055600181018360000160006101000a8154816fffffffffffffffffffffffffffffffff0219169083600f0b6fffffffffffffffffffffffffffffffff16021790555050919050565b612100611726565b811115612142576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612139906151a9565b60405180910390fd5b600061214c611745565b90506000811415801561216757506000600660000180549050145b156122595760066000016040518060400160405280600063ffffffff16815260200161219284611a40565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548163ffffffff021916908363ffffffff16021790555060208201518160000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555050505b61226d826006611aab90919063ffffffff16565b50507f0553476bf02ef2726e8ce5ced78d63e26e602e4a2257b1f559418e24b463399781836040516122a09291906151c9565b60405180910390a15050565b3073ffffffffffffffffffffffffffffffffffffffff166122cb610969565b73ffffffffffffffffffffffffffffffffffffffff16146123895760005b8451811015612387573073ffffffffffffffffffffffffffffffffffffffff1685828151811061231c5761231b6146d8565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16141561237657612375838281518110612356576123556146d8565b5b6020026020010151805190602001206002612fd090919063ffffffff16565b5b80612380906151f2565b90506122e9565b505b5050505050565b6000604051806060016040528060278152602001615a6260279139905060005b8551811015612496576000808783815181106123cf576123ce6146d8565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16878481518110612400576123ff6146d8565b5b602002602001015187858151811061241b5761241a6146d8565b5b6020026020010151604051612430919061526c565b60006040518083038185875af1925050503d806000811461246d576040519150601f19603f3d011682016040523d82523d6000602084013e612472565b606091505b509150915061248282828661304c565b5050508061248f906151f2565b90506123b0565b50505050505050565b3073ffffffffffffffffffffffffffffffffffffffff166124be610969565b73ffffffffffffffffffffffffffffffffffffffff16146124f3576124e36002612f9b565b6124f2576124f160026130b3565b5b5b5050505050565b600081600001519050919050565b600061251e85858585612519612877565b611e4a565b9050949350505050565b600080600460008481526020019081526020016000209050806002015481600101546125549190615283565b61256561256085610eb5565b611a0a565b1115915050919050565b6000806004600084815260200190815260200160002090508060000154816001015411915050919050565b60004382106125de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125d590615325565b60405180910390fd5b60008360000180549050905060005b818110156126625760006126018284613134565b90508486600001828154811061261a576126196146d8565b5b9060005260206000200160000160009054906101000a900463ffffffff1663ffffffff16111561264c5780925061265c565b6001816126599190615283565b91505b506125ed565b600082146126c7578460000160018361267b91906146a4565b8154811061268c5761268b6146d8565b5b9060005260206000200160000160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166126ca565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169250505092915050565b600080826000015167ffffffffffffffff16149050919050565b600067ffffffffffffffff801682111561275b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612752906153b7565b60405180910390fd5b819050919050565b808260000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16633a46b1a885856040518363ffffffff1660e01b81526004016127ef9291906153d7565b60206040518083038186803b15801561280757600080fd5b505afa15801561281b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061283f9190615415565b90509392505050565b606061286e848484604051806060016040528060298152602001615a896029913961315a565b90509392505050565b606060405180602001604052806000815250905090565b6000612898611726565b6128a18361126a565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638e539e8c856040518263ffffffff1660e01b81526004016128fa91906133b3565b60206040518083038186803b15801561291257600080fd5b505afa158015612926573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061294a9190615415565b6129549190615442565b61295e91906154cb565b9050919050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161480156129e157507f000000000000000000000000000000000000000000000000000000000000000046145b15612a0e577f00000000000000000000000000000000000000000000000000000000000000009050612a7c565b612a797f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061326e565b90505b90565b60008282604051602001612a94929190615574565b60405160208183030381529060405280519060200120905092915050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c1115612aed576000600391509150612bb6565b601b8560ff1614158015612b055750601c8560ff1614155b15612b17576000600491509150612bb6565b600060018787878760405160008152602001604052604051612b3c94939291906155ab565b6020604051602081039080840390855afa158015612b5e573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415612bad57600060019250925050612bb6565b80600092509250505b94509492505050565b60006004811115612bd357612bd2613c96565b5b816004811115612be657612be5613c96565b5b1415612bf157612d91565b60016004811115612c0557612c04613c96565b5b816004811115612c1857612c17613c96565b5b1415612c59576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c509061563c565b60405180910390fd5b60026004811115612c6d57612c6c613c96565b5b816004811115612c8057612c7f613c96565b5b1415612cc1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612cb8906156a8565b60405180910390fd5b60036004811115612cd557612cd4613c96565b5b816004811115612ce857612ce7613c96565b5b1415612d29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612d209061573a565b60405180910390fd5b600480811115612d3c57612d3b613c96565b5b816004811115612d4f57612d4e613c96565b5b1415612d90576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612d87906157cc565b60405180910390fd5b5b50565b60006004600087815260200190815260200160002090508060030160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615612e3a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612e319061585e565b60405180910390fd5b60018160030160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060006002811115612ea857612ea7613c96565b5b60ff168460ff161415612ed55782816000016000828254612ec99190615283565b92505081905550612f93565b60016002811115612ee957612ee8613c96565b5b60ff168460ff161415612f165782816001016000828254612f0a9190615283565b92505081905550612f92565b600280811115612f2957612f28613c96565b5b60ff168460ff161415612f565782816002016000828254612f4a9190615283565b92505081905550612f91565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612f88906158f0565b60405180910390fd5b5b5b505050505050565b60008160000160009054906101000a9004600f0b600f0b8260000160109054906101000a9004600f0b600f0b13159050919050565b60008260000160109054906101000a9004600f0b90508183600101600083600f0b600f0b815260200190815260200160002081905550600181018360000160106101000a8154816fffffffffffffffffffffffffffffffff0219169083600f0b6fffffffffffffffffffffffffffffffff160217905550505050565b6060831561305c578290506130ac565b60008351111561306f5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016130a391906137a2565b60405180910390fd5b9392505050565b60008160000160006101000a8154816fffffffffffffffffffffffffffffffff0219169083600f0b6fffffffffffffffffffffffffffffffff16021790555060008160000160106101000a8154816fffffffffffffffffffffffffffffffff0219169083600f0b6fffffffffffffffffffffffffffffffff16021790555050565b6000600282841861314591906154cb565b8284166131529190615283565b905092915050565b60608247101561319f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161319690615982565b60405180910390fd5b6131a8856132a8565b6131e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016131de906159ee565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051613210919061526c565b60006040518083038185875af1925050503d806000811461324d576040519150601f19603f3d011682016040523d82523d6000602084013e613252565b606091505b509150915061326282828661304c565b92505050949350505050565b60008383834630604051602001613289959493929190615a0e565b6040516020818303038152906040528051906020012090509392505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b613314816132df565b811461331f57600080fd5b50565b6000813590506133318161330b565b92915050565b60006020828403121561334d5761334c6132d5565b5b600061335b84828501613322565b91505092915050565b60008115159050919050565b61337981613364565b82525050565b60006020820190506133946000830184613370565b92915050565b6000819050919050565b6133ad8161339a565b82525050565b60006020820190506133c860008301846133a4565b92915050565b6133d78161339a565b81146133e257600080fd5b50565b6000813590506133f4816133ce565b92915050565b600060ff82169050919050565b613410816133fa565b811461341b57600080fd5b50565b60008135905061342d81613407565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261345857613457613433565b5b8235905067ffffffffffffffff81111561347557613474613438565b5b6020830191508360018202830111156134915761349061343d565b5b9250929050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6134e68261349d565b810181811067ffffffffffffffff82111715613505576135046134ae565b5b80604052505050565b60006135186132cb565b905061352482826134dd565b919050565b600067ffffffffffffffff821115613544576135436134ae565b5b61354d8261349d565b9050602081019050919050565b82818337600083830152505050565b600061357c61357784613529565b61350e565b90508281526020810184848401111561359857613597613498565b5b6135a384828561355a565b509392505050565b600082601f8301126135c0576135bf613433565b5b81356135d0848260208601613569565b91505092915050565b6000819050919050565b6135ec816135d9565b81146135f757600080fd5b50565b600081359050613609816135e3565b92915050565b60008060008060008060008060e0898b03121561362f5761362e6132d5565b5b600061363d8b828c016133e5565b985050602061364e8b828c0161341e565b975050604089013567ffffffffffffffff81111561366f5761366e6132da565b5b61367b8b828c01613442565b9650965050606089013567ffffffffffffffff81111561369e5761369d6132da565b5b6136aa8b828c016135ab565b94505060806136bb8b828c0161341e565b93505060a06136cc8b828c016135fa565b92505060c06136dd8b828c016135fa565b9150509295985092959890939650565b600060208284031215613703576137026132d5565b5b6000613711848285016133e5565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015613754578082015181840152602081019050613739565b83811115613763576000848401525b50505050565b60006137748261371a565b61377e8185613725565b935061378e818560208601613736565b6137978161349d565b840191505092915050565b600060208201905081810360008301526137bc8184613769565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006137ef826137c4565b9050919050565b6137ff816137e4565b811461380a57600080fd5b50565b60008135905061381c816137f6565b92915050565b6000806000806080858703121561383c5761383b6132d5565b5b600061384a8782880161380d565b945050602061385b8782880161380d565b935050604061386c878288016133e5565b925050606085013567ffffffffffffffff81111561388d5761388c6132da565b5b613899878288016135ab565b91505092959194509250565b6138ae816132df565b82525050565b60006020820190506138c960008301846138a5565b92915050565b600067ffffffffffffffff8211156138ea576138e96134ae565b5b602082029050602081019050919050565b600061390e613909846138cf565b61350e565b905080838252602082019050602084028301858111156139315761393061343d565b5b835b8181101561395a5780613946888261380d565b845260208401935050602081019050613933565b5050509392505050565b600082601f83011261397957613978613433565b5b81356139898482602086016138fb565b91505092915050565b600067ffffffffffffffff8211156139ad576139ac6134ae565b5b602082029050602081019050919050565b60006139d16139cc84613992565b61350e565b905080838252602082019050602084028301858111156139f4576139f361343d565b5b835b81811015613a1d5780613a0988826133e5565b8452602084019350506020810190506139f6565b5050509392505050565b600082601f830112613a3c57613a3b613433565b5b8135613a4c8482602086016139be565b91505092915050565b600067ffffffffffffffff821115613a7057613a6f6134ae565b5b602082029050602081019050919050565b6000613a94613a8f84613a55565b61350e565b90508083825260208201905060208402830185811115613ab757613ab661343d565b5b835b81811015613afe57803567ffffffffffffffff811115613adc57613adb613433565b5b808601613ae989826135ab565b85526020850194505050602081019050613ab9565b5050509392505050565b600082601f830112613b1d57613b1c613433565b5b8135613b2d848260208601613a81565b91505092915050565b60008060008060808587031215613b5057613b4f6132d5565b5b600085013567ffffffffffffffff811115613b6e57613b6d6132da565b5b613b7a87828801613964565b945050602085013567ffffffffffffffff811115613b9b57613b9a6132da565b5b613ba787828801613a27565b935050604085013567ffffffffffffffff811115613bc857613bc76132da565b5b613bd487828801613b08565b9250506060613be5878288016135fa565b91505092959194509250565b613bfa816135d9565b82525050565b6000602082019050613c156000830184613bf1565b92915050565b600080600080600060a08688031215613c3757613c366132d5565b5b6000613c45888289016133e5565b9550506020613c568882890161341e565b9450506040613c678882890161341e565b9350506060613c78888289016135fa565b9250506080613c89888289016135fa565b9150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60088110613cd657613cd5613c96565b5b50565b6000819050613ce782613cc5565b919050565b6000613cf782613cd9565b9050919050565b613d0781613cec565b82525050565b6000602082019050613d226000830184613cfe565b92915050565b60008060408385031215613d3f57613d3e6132d5565b5b6000613d4d858286016133e5565b9250506020613d5e8582860161380d565b9150509250929050565b6000606082019050613d7d60008301866133a4565b613d8a60208301856133a4565b613d9760408301846133a4565b949350505050565b60008060408385031215613db657613db56132d5565b5b6000613dc4858286016133e5565b9250506020613dd58582860161341e565b9150509250929050565b600080600080600060808688031215613dfb57613dfa6132d5565b5b6000613e09888289016133e5565b9550506020613e1a8882890161341e565b945050604086013567ffffffffffffffff811115613e3b57613e3a6132da565b5b613e4788828901613442565b9350935050606086013567ffffffffffffffff811115613e6a57613e696132da565b5b613e76888289016135ab565b9150509295509295909350565b60008060008060608587031215613e9d57613e9c6132d5565b5b6000613eab878288016133e5565b9450506020613ebc8782880161341e565b935050604085013567ffffffffffffffff811115613edd57613edc6132da565b5b613ee987828801613442565b925092505092959194509250565b600067ffffffffffffffff821115613f1257613f116134ae565b5b613f1b8261349d565b9050602081019050919050565b6000613f3b613f3684613ef7565b61350e565b905082815260208101848484011115613f5757613f56613498565b5b613f6284828561355a565b509392505050565b600082601f830112613f7f57613f7e613433565b5b8135613f8f848260208601613f28565b91505092915050565b60008060008060808587031215613fb257613fb16132d5565b5b600085013567ffffffffffffffff811115613fd057613fcf6132da565b5b613fdc87828801613964565b945050602085013567ffffffffffffffff811115613ffd57613ffc6132da565b5b61400987828801613a27565b935050604085013567ffffffffffffffff81111561402a576140296132da565b5b61403687828801613b08565b925050606085013567ffffffffffffffff811115614057576140566132da565b5b61406387828801613f6a565b91505092959194509250565b600080600060608486031215614088576140876132d5565b5b60006140968682870161380d565b93505060206140a7868287016133e5565b925050604084013567ffffffffffffffff8111156140c8576140c76132da565b5b6140d4868287016135ab565b9150509250925092565b600080600080600060a086880312156140fa576140f96132d5565b5b60006141088882890161380d565b95505060206141198882890161380d565b945050604086013567ffffffffffffffff81111561413a576141396132da565b5b61414688828901613a27565b935050606086013567ffffffffffffffff811115614167576141666132da565b5b61417388828901613a27565b925050608086013567ffffffffffffffff811115614194576141936132da565b5b6141a0888289016135ab565b9150509295509295909350565b60008083601f8401126141c3576141c2613433565b5b8235905067ffffffffffffffff8111156141e0576141df613438565b5b6020830191508360018202830111156141fc576141fb61343d565b5b9250929050565b6000806000806060858703121561421d5761421c6132d5565b5b600061422b8782880161380d565b945050602061423c878288016133e5565b935050604085013567ffffffffffffffff81111561425d5761425c6132da565b5b614269878288016141ad565b925092505092959194509250565b6000806040838503121561428e5761428d6132d5565b5b600061429c8582860161380d565b92505060206142ad858286016133e5565b9150509250929050565b600080600080600060a086880312156142d3576142d26132d5565b5b60006142e18882890161380d565b95505060206142f28882890161380d565b9450506040614303888289016133e5565b9350506060614314888289016133e5565b925050608086013567ffffffffffffffff811115614335576143346132da565b5b614341888289016135ab565b9150509295509295909350565b6000819050919050565b600061437361436e614369846137c4565b61434e565b6137c4565b9050919050565b600061438582614358565b9050919050565b60006143978261437a565b9050919050565b6143a78161438c565b82525050565b60006020820190506143c2600083018461439e565b92915050565b600081905092915050565b60006143df83856143c8565b93506143ec83858461355a565b82840190509392505050565b60006144058284866143d3565b91508190509392505050565b61441a816133fa565b82525050565b600060a0820190506144356000830188613bf1565b61444260208301876133a4565b61444f6040830186614411565b61445c6060830185613bf1565b6144696080830184613bf1565b9695505050505050565b7f476f7665726e6f723a206f6e6c79476f7665726e616e63650000000000000000600082015250565b60006144a9601883613725565b91506144b482614473565b602082019050919050565b600060208201905081810360008301526144d88161449c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061452657607f821691505b6020821081141561453a576145396144df565b5b50919050565b7f476f7665726e6f723a2070726f706f73616c206e6f742073756363657373667560008201527f6c00000000000000000000000000000000000000000000000000000000000000602082015250565b600061459c602183613725565b91506145a782614540565b604082019050919050565b600060208201905081810360008301526145cb8161458f565b9050919050565b60006060820190506145e76000830186613bf1565b6145f460208301856133a4565b6146016040830184614411565b949350505050565b7f476f7665726e6f723a20756e6b6e6f776e2070726f706f73616c206964000000600082015250565b600061463f601d83613725565b915061464a82614609565b602082019050919050565b6000602082019050818103600083015261466e81614632565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006146af8261339a565b91506146ba8361339a565b9250828210156146cd576146cc614675565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f476f7665726e6f723a2070726f706f73657220766f7465732062656c6f77207060008201527f726f706f73616c207468726573686f6c64000000000000000000000000000000602082015250565b6000614763603183613725565b915061476e82614707565b604082019050919050565b6000602082019050818103600083015261479281614756565b9050919050565b7f476f7665726e6f723a20696e76616c69642070726f706f73616c206c656e677460008201527f6800000000000000000000000000000000000000000000000000000000000000602082015250565b60006147f5602183613725565b915061480082614799565b604082019050919050565b60006020820190508181036000830152614824816147e8565b9050919050565b7f476f7665726e6f723a20656d7074792070726f706f73616c0000000000000000600082015250565b6000614861601883613725565b915061486c8261482b565b602082019050919050565b6000602082019050818103600083015261489081614854565b9050919050565b7f476f7665726e6f723a2070726f706f73616c20616c726561647920657869737460008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b60006148f3602183613725565b91506148fe82614897565b604082019050919050565b60006020820190508181036000830152614922816148e6565b9050919050565b600067ffffffffffffffff82169050919050565b600061494882614929565b915061495383614929565b92508267ffffffffffffffff038211156149705761496f614675565b5b828201905092915050565b614984816137e4565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6149bf816137e4565b82525050565b60006149d183836149b6565b60208301905092915050565b6000602082019050919050565b60006149f58261498a565b6149ff8185614995565b9350614a0a836149a6565b8060005b83811015614a3b578151614a2288826149c5565b9750614a2d836149dd565b925050600181019050614a0e565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b614a7d8161339a565b82525050565b6000614a8f8383614a74565b60208301905092915050565b6000602082019050919050565b6000614ab382614a48565b614abd8185614a53565b9350614ac883614a64565b8060005b83811015614af9578151614ae08882614a83565b9750614aeb83614a9b565b925050600181019050614acc565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b6000614b4e8261371a565b614b588185614b32565b9350614b68818560208601613736565b614b718161349d565b840191505092915050565b6000614b888383614b43565b905092915050565b6000602082019050919050565b6000614ba882614b06565b614bb28185614b11565b935083602082028501614bc485614b22565b8060005b85811015614c005784840389528151614be18582614b7c565b9450614bec83614b90565b925060208a01995050600181019050614bc8565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b6000614c6582614c3e565b614c6f8185614c49565b9350614c7f818560208601613736565b614c888161349d565b840191505092915050565b6000614c9f8383614c5a565b905092915050565b6000602082019050919050565b6000614cbf82614c12565b614cc98185614c1d565b935083602082028501614cdb85614c2e565b8060005b85811015614d175784840389528151614cf88582614c93565b9450614d0383614ca7565b925060208a01995050600181019050614cdf565b50829750879550505050505092915050565b6000614d44614d3f614d3a84614929565b61434e565b61339a565b9050919050565b614d5481614d29565b82525050565b600061012082019050614d70600083018c6133a4565b614d7d602083018b61497b565b8181036040830152614d8f818a6149ea565b90508181036060830152614da38189614aa8565b90508181036080830152614db78188614b9d565b905081810360a0830152614dcb8187614cb4565b9050614dda60c0830186614d4b565b614de760e0830185614d4b565b818103610100830152614dfa8184613769565b90509a9950505050505050505050565b60006080820190508181036000830152614e2481876149ea565b90508181036020830152614e388186614aa8565b90508181036040830152614e4c8185614cb4565b9050614e5b6060830184613bf1565b95945050505050565b7f53616665436173743a2076616c756520646f65736e27742066697420696e203260008201527f3234206269747300000000000000000000000000000000000000000000000000602082015250565b6000614ec0602783613725565b9150614ecb82614e64565b604082019050919050565b60006020820190508181036000830152614eef81614eb3565b9050919050565b7f53616665436173743a2076616c756520646f65736e27742066697420696e203360008201527f3220626974730000000000000000000000000000000000000000000000000000602082015250565b6000614f52602683613725565b9150614f5d82614ef6565b604082019050919050565b60006020820190508181036000830152614f8181614f45565b9050919050565b7f476f7665726e6f723a20766f7465206e6f742063757272656e746c792061637460008201527f6976650000000000000000000000000000000000000000000000000000000000602082015250565b6000614fe4602383613725565b9150614fef82614f88565b604082019050919050565b6000602082019050818103600083015261501381614fd7565b9050919050565b600060808201905061502f60008301876133a4565b61503c6020830186614411565b61504960408301856133a4565b818103606083015261505b8184613769565b905095945050505050565b600082825260208201905092915050565b600061508282614c3e565b61508c8185615066565b935061509c818560208601613736565b6150a58161349d565b840191505092915050565b600060a0820190506150c560008301886133a4565b6150d26020830187614411565b6150df60408301866133a4565b81810360608301526150f18185613769565b905081810360808301526151058184615077565b90509695505050505050565b7f476f7665726e6f72566f74657351756f72756d4672616374696f6e3a2071756f60008201527f72756d4e756d657261746f72206f7665722071756f72756d44656e6f6d696e6160208201527f746f720000000000000000000000000000000000000000000000000000000000604082015250565b6000615193604383613725565b915061519e82615111565b606082019050919050565b600060208201905081810360008301526151c281615186565b9050919050565b60006040820190506151de60008301856133a4565b6151eb60208301846133a4565b9392505050565b60006151fd8261339a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156152305761522f614675565b5b600182019050919050565b600061524682614c3e565b61525081856143c8565b9350615260818560208601613736565b80840191505092915050565b6000615278828461523b565b915081905092915050565b600061528e8261339a565b91506152998361339a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156152ce576152cd614675565b5b828201905092915050565b7f436865636b706f696e74733a20626c6f636b206e6f7420796574206d696e6564600082015250565b600061530f602083613725565b915061531a826152d9565b602082019050919050565b6000602082019050818103600083015261533e81615302565b9050919050565b7f53616665436173743a2076616c756520646f65736e27742066697420696e203660008201527f3420626974730000000000000000000000000000000000000000000000000000602082015250565b60006153a1602683613725565b91506153ac82615345565b604082019050919050565b600060208201905081810360008301526153d081615394565b9050919050565b60006040820190506153ec600083018561497b565b6153f960208301846133a4565b9392505050565b60008151905061540f816133ce565b92915050565b60006020828403121561542b5761542a6132d5565b5b600061543984828501615400565b91505092915050565b600061544d8261339a565b91506154588361339a565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561549157615490614675565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006154d68261339a565b91506154e18361339a565b9250826154f1576154f061549c565b5b828204905092915050565b600081905092915050565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b600061553d6002836154fc565b915061554882615507565b600282019050919050565b6000819050919050565b61556e615569826135d9565b615553565b82525050565b600061557f82615530565b915061558b828561555d565b60208201915061559b828461555d565b6020820191508190509392505050565b60006080820190506155c06000830187613bf1565b6155cd6020830186614411565b6155da6040830185613bf1565b6155e76060830184613bf1565b95945050505050565b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000615626601883613725565b9150615631826155f0565b602082019050919050565b6000602082019050818103600083015261565581615619565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000615692601f83613725565b915061569d8261565c565b602082019050919050565b600060208201905081810360008301526156c181615685565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000615724602283613725565b915061572f826156c8565b604082019050919050565b6000602082019050818103600083015261575381615717565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202776272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b60006157b6602283613725565b91506157c18261575a565b604082019050919050565b600060208201905081810360008301526157e5816157a9565b9050919050565b7f476f7665726e6f72566f74696e6753696d706c653a20766f746520616c72656160008201527f6479206361737400000000000000000000000000000000000000000000000000602082015250565b6000615848602783613725565b9150615853826157ec565b604082019050919050565b600060208201905081810360008301526158778161583b565b9050919050565b7f476f7665726e6f72566f74696e6753696d706c653a20696e76616c696420766160008201527f6c756520666f7220656e756d20566f7465547970650000000000000000000000602082015250565b60006158da603583613725565b91506158e58261587e565b604082019050919050565b60006020820190508181036000830152615909816158cd565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b600061596c602683613725565b915061597782615910565b604082019050919050565b6000602082019050818103600083015261599b8161595f565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b60006159d8601d83613725565b91506159e3826159a2565b602082019050919050565b60006020820190508181036000830152615a07816159cb565b9050919050565b600060a082019050615a236000830188613bf1565b615a306020830187613bf1565b615a3d6040830186613bf1565b615a4a60608301856133a4565b615a57608083018461497b565b969550505050505056fe476f7665726e6f723a2063616c6c20726576657274656420776974686f7574206d657373616765416464726573733a206c6f772d6c6576656c2063616c6c20776974682076616c7565206661696c6564a264697066735822122056489f8c2ca1f4a6e9079826b50d7b1272ec38636b89734509323c252989a14c64736f6c63430008090033',
  linkReferences: {},
  deployedLinkReferences: {},
};
