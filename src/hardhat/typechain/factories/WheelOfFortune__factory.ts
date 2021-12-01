/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { WheelOfFortune } from "../WheelOfFortune";

export class WheelOfFortune__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<WheelOfFortune> {
    return super.deploy(overrides || {}) as Promise<WheelOfFortune>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): WheelOfFortune {
    return super.attach(address) as WheelOfFortune;
  }
  connect(signer: Signer): WheelOfFortune__factory {
    return super.connect(signer) as WheelOfFortune__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WheelOfFortune {
    return new Contract(address, _abi, signerOrProvider) as WheelOfFortune;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bet",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "choice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "seed",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "over",
        type: "bool",
      },
    ],
    name: "GameCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "round",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "multiplier",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bet",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "prize",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "choice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "seed",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "over",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "enum GamesCore.GameState",
        name: "state",
        type: "uint8",
      },
    ],
    name: "GamePlayed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "bytes1",
        name: "_color",
        type: "bytes1",
      },
      {
        internalType: "uint8",
        name: "_sector",
        type: "uint8",
      },
    ],
    name: "addColor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "allColors",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "allSectors",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "colors",
    outputs: [
      {
        internalType: "bytes1",
        name: "color",
        type: "bytes1",
      },
      {
        internalType: "uint8",
        name: "sector",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_seed",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "_v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "_r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_s",
        type: "bytes32",
      },
    ],
    name: "confirm",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "croupier",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_index",
        type: "uint8",
      },
    ],
    name: "deleteColor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "edge",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes1",
        name: "_color",
        type: "bytes1",
      },
    ],
    name: "findColor",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "games",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "bet",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "prize",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "choice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "over",
        type: "bool",
      },
      {
        internalType: "enum GamesCore.GameState",
        name: "state",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "houseProfit",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "listGames",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxBet",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxPayout",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minBet",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_choice",
        type: "uint256",
      },
    ],
    name: "multiplier",
    outputs: [
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_choice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_bet",
        type: "uint256",
      },
    ],
    name: "payout",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_choice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_betAmount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_seed",
        type: "bytes32",
      },
    ],
    name: "play",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "profitTaker",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_min",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_max",
        type: "uint256",
      },
    ],
    name: "setBetRange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "setCroupier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_e",
        type: "uint8",
      },
    ],
    name: "setEdge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxPayout",
        type: "uint256",
      },
    ],
    name: "setMaxPayout",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_profitTaker",
        type: "address",
      },
    ],
    name: "setProfitTaker",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "setToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalGamesCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_index",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "_newSector",
        type: "uint8",
      },
    ],
    name: "updateSector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawProfit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x6080604052600780546001600160a01b031916739a946c3cb16c08334b69ae249690c236ebd5583e1790553480156200003757600080fd5b50600080546001600160a01b031916339081178255604051909182917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600580546001600160a01b03199081163390811790925560068054909116909117905567016345785d8a0000600255678ac7230489e8000060035568056bc75e2d63100000600a556007805460ff60a01b1916600160a01b179055620000e5600760fc1b601e6200011e565b620000f6603960f91b600f6200011e565b62000107606760f81b600a6200011e565b62000118607960f81b60056200011e565b6200040e565b6000546001600160a01b031633146200017e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b620001898262000319565b60ff1660ff14620001e95760405162461bcd60e51b815260206004820152602360248201527f576865656c4f66466f7274756e653a20436f6c6f7220616c72656164792065786044820152621a5cdd60ea1b606482015260840162000175565b60ff8116620002475760405162461bcd60e51b8152602060048201526024808201527f576865656c4f66466f7274756e653a204e657720736563746f722063616e74206044820152630626520360e41b606482015260840162000175565b600b8054680100000000000000009081900460ff9081166000908152600c6020526040808220805460ff191660f889901c17905584549390930482168152918220805461ff001916610100928616928302179055825490929190620002b79084906001600160401b0316620003a7565b92506101000a8154816001600160401b0302191690836001600160401b03160217905550600b600881819054906101000a900460ff1680929190620002fc90620003d5565b91906101000a81548160ff021916908360ff160217905550505050565b6000805b600b5460ff68010000000000000000909104811690821610156200039c5760ff81166000908152600c602052604090205460f81b7fff00000000000000000000000000000000000000000000000000000000000000908116908416141562000387579050620003a2565b806200039381620003d5565b9150506200031d565b5060ff90505b919050565b60006001600160401b03828116848216808303821115620003cc57620003cc620003f8565b01949350505050565b600060ff821660ff811415620003ef57620003ef620003f8565b60010192915050565b634e487b7160e01b600052601160045260246000fd5b61218f806200041e6000396000f3fe6080604052600436106101f25760003560e01c806388fedd041161010d578063bd11f69d116100a0578063f2fde38b1161006f578063f2fde38b146105d7578063f579f882146105f7578063f593a38714610679578063f8bb201c1461068f578063fc0c546a146106af576101f9565b8063bd11f69d1461050c578063cf8f2cce14610569578063d8d360fb14610589578063e0176de8146105c1576101f9565b80639619367d116100dc5780639619367d14610495578063abae5050146104ab578063adc2c98a146104cb578063b00606a5146104ec576101f9565b806388fedd041461042c5780638da5cb5b146104425780638e29409a14610460578063959499b614610480576101f9565b806361c8e6f611610185578063715018a611610154578063715018a6146103c257806372215373146103d757806372be4112146103f7578063853828b614610417576101f9565b806361c8e6f61461034157806365fe09d71461036257806367759501146103825780636b5c5f39146103a2576101f9565b8063406d0004116101c1578063406d0004146102a957806356b4997f146102c95780635aa6cf97146102e95780635c6c093914610309576101f9565b806305e30f51146101fb578063144fa6d7146102335780632e5b2168146102535780633f02804714610277576101f9565b366101f957005b005b34801561020757600080fd5b5061021b610216366004611d33565b6106cf565b604051600f9190910b81526020015b60405180910390f35b34801561023f57600080fd5b506101f961024e366004611ca0565b61075b565b34801561025f57600080fd5b5061026960035481565b60405190815260200161022a565b34801561028357600080fd5b50610297610292366004611ce7565b6107c3565b60405160ff909116815260200161022a565b3480156102b557600080fd5b506101f96102c4366004611d01565b61082c565b3480156102d557600080fd5b506101f96102e4366004611d33565b6109e2565b3480156102f557600080fd5b50610269610304366004611d9d565b610a11565b34801561031557600080fd5b50600654610329906001600160a01b031681565b6040516001600160a01b03909116815260200161022a565b34801561034d57600080fd5b50600b5461029790600160401b900460ff1681565b34801561036e57600080fd5b5061026961037d366004611d33565b610a2e565b34801561038e57600080fd5b506101f961039d366004611dbe565b610a4f565b3480156103ae57600080fd5b50600554610329906001600160a01b031681565b3480156103ce57600080fd5b506101f9610d6c565b3480156103e357600080fd5b506101f96103f2366004611ca0565b610de0565b34801561040357600080fd5b506101f9610412366004611de9565b610e2c565b34801561042357600080fd5b506101f9610e76565b34801561043857600080fd5b5061026960045481565b34801561044e57600080fd5b506000546001600160a01b0316610329565b34801561046c57600080fd5b506101f961047b366004611e03565b610ff7565b34801561048c57600080fd5b506101f96110e9565b3480156104a157600080fd5b5061026960025481565b3480156104b757600080fd5b506101f96104c6366004611d9d565b61118b565b3480156104d757600080fd5b5060075461029790600160a01b900460ff1681565b3480156104f857600080fd5b506101f9610507366004611d4b565b6111c0565b34801561051857600080fd5b50610547610527366004611d33565b600c6020526000908152604090205460f881901b90610100900460ff1682565b604080516001600160f81b0319909316835260ff90911660208301520161022a565b34801561057557600080fd5b506101f9610584366004611de9565b61161e565b34801561059557600080fd5b50600b546105a9906001600160401b031681565b6040516001600160401b03909116815260200161022a565b3480156105cd57600080fd5b50610269600a5481565b3480156105e357600080fd5b506101f96105f2366004611ca0565b6116fb565b34801561060357600080fd5b50610665610612366004611d33565b600860205260009081526040902080546001820154600283015460038401546004850154600586015460069096015494956001600160a01b03909416949293919290919060ff8082169161010090041688565b60405161022a989796959493929190611f1d565b34801561068557600080fd5b5061026960015481565b34801561069b57600080fd5b506101f96106aa366004611ca0565b6117e5565b3480156106bb57600080fd5b50600754610329906001600160a01b031681565b6000818152600c6020526040812054600b5461010090910460ff16906001600160401b03168261072161071261070485611831565b61070d85611831565b61184f565b61071c6064611831565b6118b6565b6007549091506107509061074a9061074590606490600160a01b900460ff166118ec565b611831565b8261184f565b93505050505b919050565b6000546001600160a01b0316331461078e5760405162461bcd60e51b815260040161078590611eb1565b60405180910390fd5b6001600160a01b0381166107a157600080fd5b600780546001600160a01b0319166001600160a01b0392909216919091179055565b6000805b600b5460ff600160401b909104811690821610156108235760ff81166000908152600c602052604090205460f81b6001600160f81b03199081169084161415610811579050610756565b8061081b81612103565b9150506107c7565b5060ff92915050565b6000546001600160a01b031633146108565760405162461bcd60e51b815260040161078590611eb1565b61085f826107c3565b60ff1660ff146108bd5760405162461bcd60e51b815260206004820152602360248201527f576865656c4f66466f7274756e653a20436f6c6f7220616c72656164792065786044820152621a5cdd60ea1b6064820152608401610785565b60ff81166109195760405162461bcd60e51b8152602060048201526024808201527f576865656c4f66466f7274756e653a204e657720736563746f722063616e74206044820152630626520360e41b6064820152608401610785565b600b8054600160401b9081900460ff9081166000908152600c6020526040808220805460ff191660f889901c17905584549390930482168152918220805461ff0019166101009286169283021790558254909291906109829084906001600160401b0316612013565b92506101000a8154816001600160401b0302191690836001600160401b03160217905550600b600881819054906101000a900460ff16809291906109c590612103565b91906101000a81548160ff021916908360ff160217905550505050565b6000546001600160a01b03163314610a0c5760405162461bcd60e51b815260040161078590611eb1565b600a55565b6000610a25610a1f846106cf565b836118f8565b90505b92915050565b60098181548110610a3e57600080fd5b600091825260209091200154905081565b818060025411158015610a6457506003548111155b610ab05760405162461bcd60e51b815260206004820152601760248201527f496e636f727265637420616d6f756e7420746f206265740000000000000000006044820152606401610785565b600082815260086020526040902054829015610b025760405162461bcd60e51b815260206004820152601160248201527014d9595908185b1c9958591e481d5cd959607a1b6044820152606401610785565b6000858152600c602052604090205460f81b6001600160f81b031916610b3a5760405162461bcd60e51b815260040161078590611ee6565b6000610b468686610a11565b9050600a54811115610b575750600a545b6007546040516370a0823160e01b81523060048201526001600160a01b03909116906370a082319060240160206040518083038186803b158015610b9a57600080fd5b505afa158015610bae573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd29190611d85565b8110610c465760405162461bcd60e51b815260206004820152603e60248201527f576865656c4f66466f7274756e653a20496e737566666963656e742066756e6460448201527f73206f6e20636f6e747261637420746f20636f766572207468652062657400006064820152608401610785565b600754610c5e906001600160a01b0316333088611969565b6000848152600860205260408120600180549192610c7b836120e8565b9091555050600180548255810180546001600160a01b0319163317905560028101869055600480820188905560068201805461ff00191690558054879190600090610cc7908490611fba565b909155505060098054600180820183556000929092527f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af018690558181015460028301546004840154604080519283526020830191909152810188905260608101929092526001600160a01b0316907f5c0023731903eb93130ada523196982a48d902eea3b24cc0b647c08d99007b609060800160405180910390a250505050505050565b6000546001600160a01b03163314610d965760405162461bcd60e51b815260040161078590611eb1565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b03163314610e0a5760405162461bcd60e51b815260040161078590611eb1565b600680546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b03163314610e565760405162461bcd60e51b815260040161078590611eb1565b6007805460ff909216600160a01b0260ff60a01b19909216919091179055565b6000546001600160a01b03163314610ea05760405162461bcd60e51b815260040161078590611eb1565b60006004541315610f6557610f60610ec06000546001600160a01b031690565b600480546007546040516370a0823160e01b8152309381019390935290916001600160a01b03909116906370a082319060240160206040518083038186803b158015610f0b57600080fd5b505afa158015610f1f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f439190611d85565b610f4d919061207d565b6007546001600160a01b031691906119da565b610ff5565b610ff5610f7a6000546001600160a01b031690565b6007546040516370a0823160e01b81523060048201526001600160a01b03909116906370a082319060240160206040518083038186803b158015610fbd57600080fd5b505afa158015610fd1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f4d9190611d85565b565b6000546001600160a01b031633146110215760405162461bcd60e51b815260040161078590611eb1565b60ff82166000908152600c602052604090205460f81b6001600160f81b03191661105d5760405162461bcd60e51b815260040161078590611ee6565b60ff8083166000908152600c6020526040902054600b5461010090910482169161109391908416906001600160401b0316612013565b61109d9190612094565b600b80546001600160401b039290921667ffffffffffffffff1990921691909117905560ff9182166000908152600c602052604090208054919092166101000261ff0019909116179055565b6006546001600160a01b031633146111585760405162461bcd60e51b815260206004820152602c60248201527f4f6e6c79207468652070726f6669742074616b65722063616e2072756e20746860448201526b34b990333ab731ba34b7b71760a11b6064820152608401610785565b60006004541315610ff557600654600454600754611184926001600160a01b03918216929116906119da565b6000600455565b6000546001600160a01b031633146111b55760405162461bcd60e51b815260040161078590611eb1565b600291909155600355565b6005546001600160a01b0316331461122b5760405162461bcd60e51b815260206004820152602860248201527f4f6e6c79207468652063726f75706965722063616e2072756e207468697320666044820152673ab731ba34b7b71760c11b6064820152608401610785565b60006040518060400160405280601c81526020017f19457468657265756d205369676e6564204d6573736167653a0a33320000000081525090506000818660405160200161127a929190611e5c565b60408051808303601f1901815282825280516020918201206005546000855291840180845281905260ff89169284019290925260608301879052608083018690529092506001600160a01b03169060019060a0016020604051602081039080840390855afa1580156112f0573d6000803e3d6000fd5b505050602060405103516001600160a01b03161461135a5760405162461bcd60e51b815260206004820152602160248201527f576865656c4f66466f7274756e653a20496e76616c6964207369676e617475726044820152606560f81b6064820152608401610785565b600086815260086020526040902080546113c15760405162461bcd60e51b815260206004820152602260248201527f576865656c4f66466f7274756e653a2047616d6520646f65736e2774206578696044820152611cdd60f21b6064820152608401610785565b60006006820154610100900460ff1660028111156113ef57634e487b7160e01b600052602160045260246000fd5b146114485760405162461bcd60e51b815260206004820152602360248201527f576865656c4f66466f7274756e653a2047616d6520616c726561647920706c616044820152621e595960ea1b6064820152608401610785565b600b54600090611461906001600160401b031686612123565b61146c906001611ffb565b905060005b600b5460ff600160401b909104811690821610156114e85760ff8082166000908152600c60205260409020546101009004168210156114af576114e8565b60ff8082166000908152600c60205260409020546114d491610100909104168361207d565b9150806114e081612103565b915050611471565b82600401548160ff1614611513576000600384015560068301805461ff00191661020017905561157b565b61152583600401548460020154610a11565b6003840181905560068401805461ff001916610100179055600184015460075461155f926001600160a01b039182169291909116906119da565b826003015460046000828254611575919061203e565b90915550505b60ff811660058401556001830154835460048501548b926001600160a01b0316917e867f710c53fead2d43f716b65ca12f0ecbef01e58edb8cd235073f91492431916115cf906115ca906106cf565b611a0f565b8760020154886003015489600401548a6005015460018c60060160019054906101000a900460ff1660405161160b989796959493929190611f72565b60405180910390a3505050505050505050565b6000546001600160a01b031633146116485760405162461bcd60e51b815260040161078590611eb1565b60ff81166000908152600c602052604090205460f81b6001600160f81b0319166116845760405162461bcd60e51b815260040161078590611ee6565b60ff8082166000908152600c6020526040812054600b80546101009092049093169291906116bc9084906001600160401b0316612094565b82546001600160401b039182166101009390930a92830291909202199091161790555060ff166000908152600c60205260409020805461ffff19169055565b6000546001600160a01b031633146117255760405162461bcd60e51b815260040161078590611eb1565b6001600160a01b03811661178a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610785565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b0316331461180f5760405162461bcd60e51b815260040161078590611eb1565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b6000677fffffffffffffff82111561184857600080fd5b5060401b90565b600081600f0b6000141561186257600080fd5b600082600f0b604085600f0b901b8161188b57634e487b7160e01b600052601260045260246000fd5b05905060016001607f1b031981128015906118ad575060016001607f1b038113155b610a2557600080fd5b6000600f83810b9083900b0260401d60016001607f1b031981128015906118ad575060016001607f1b03811315610a2557600080fd5b6000610a25828461207d565b60008161190757506000610a28565b600083600f0b121561191857600080fd5b600f83900b6fffffffffffffffffffffffffffffffff8316810260401c90608084901c026001600160c01b0381111561195057600080fd5b60401b811981111561196157600080fd5b019392505050565b6040516001600160a01b03808516602483015283166044820152606481018290526119d49085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611a2b565b50505050565b6040516001600160a01b038316602482015260448101829052611a0a90849063a9059cbb60e01b9060640161199d565b505050565b60008082600f0b1215611a2157600080fd5b50600f0b60401d90565b6000611a80826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611afd9092919063ffffffff16565b805190915015611a0a5780806020019051810190611a9e9190611cc7565b611a0a5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610785565b6060611b0c8484600085611b16565b90505b9392505050565b606082471015611b775760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610785565b843b611bc55760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610785565b600080866001600160a01b03168587604051611be19190611e40565b60006040518083038185875af1925050503d8060008114611c1e576040519150601f19603f3d011682016040523d82523d6000602084013e611c23565b606091505b5091509150611c33828286611c3e565b979650505050505050565b60608315611c4d575081611b0f565b825115611c5d5782518084602001fd5b8160405162461bcd60e51b81526004016107859190611e7e565b80356001600160f81b03198116811461075657600080fd5b803560ff8116811461075657600080fd5b600060208284031215611cb1578081fd5b81356001600160a01b0381168114610a25578182fd5b600060208284031215611cd8578081fd5b81518015158114610a25578182fd5b600060208284031215611cf8578081fd5b610a2582611c77565b60008060408385031215611d13578081fd5b611d1c83611c77565b9150611d2a60208401611c8f565b90509250929050565b600060208284031215611d44578081fd5b5035919050565b60008060008060808587031215611d60578182fd5b84359350611d7060208601611c8f565b93969395505050506040820135916060013590565b600060208284031215611d96578081fd5b5051919050565b60008060408385031215611daf578182fd5b50508035926020909101359150565b600080600060608486031215611dd2578283fd5b505081359360208301359350604090920135919050565b600060208284031215611dfa578081fd5b610a2582611c8f565b60008060408385031215611e15578182fd5b611d1c83611c8f565b60038110611e3c57634e487b7160e01b600052602160045260246000fd5b9052565b60008251611e528184602087016120bc565b9190910192915050565b60008351611e6e8184602088016120bc565b9190910191825250602001919050565b6000602082528251806020840152611e9d8160408501602087016120bc565b601f01601f19169190910160400192915050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252601b908201527f576865656c4f66466f7274756e653a2057726f6e6720636f6c6f720000000000604082015260600190565b8881526001600160a01b038816602082015260408101879052606081018690526080810185905260a0810184905282151560c08201526101008101611f6560e0830184611e1e565b9998505050505050505050565b6000610100820190508982526001600160401b03891660208301528760408301528660608301528560808301528460a083015283151560c0830152611f6560e0830184611e1e565b600080821280156001600160ff1b0384900385131615611fdc57611fdc612143565b600160ff1b8390038412811615611ff557611ff5612143565b50500190565b6000821982111561200e5761200e612143565b500190565b60006001600160401b0380831681851680830382111561203557612035612143565b01949350505050565b60008083128015600160ff1b85018412161561205c5761205c612143565b6001600160ff1b038401831381161561207757612077612143565b50500390565b60008282101561208f5761208f612143565b500390565b60006001600160401b03838116908316818110156120b4576120b4612143565b039392505050565b60005b838110156120d75781810151838201526020016120bf565b838111156119d45750506000910152565b60006000198214156120fc576120fc612143565b5060010190565b600060ff821660ff81141561211a5761211a612143565b60010192915050565b60008261213e57634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220137cb83c7dc62dc28711b5f76ece02b1800ac22ca1bc3f2f1225c64a073704c564736f6c63430008030033";