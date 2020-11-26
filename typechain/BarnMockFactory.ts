/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { BarnMock } from "./BarnMock";

export class BarnMockFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<BarnMock> {
    return super.deploy(overrides || {}) as Promise<BarnMock>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BarnMock {
    return super.attach(address) as BarnMock;
  }
  connect(signer: Signer): BarnMockFactory {
    return super.connect(signer) as BarnMockFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BarnMock {
    return new Contract(address, _abi, signerOrProvider) as BarnMock;
  }
}

const _abi = [
  {
    inputs: [],
    name: "bondCirculatingSupply",
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
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "lockCreatorBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lockCreatorBalanceHasBeenCalled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
    ],
    name: "setBondCirculatingSupply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
    ],
    name: "setVotingPower",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "votingPowerAtTs",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawHasBeenCalled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610383806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80634ec6eef41161005b5780634ec6eef41461015557806358397f341461017557806371ef766314610195578063cbf8eda9146101e357610088565b80632082b4d11461008d578063274b91a9146100ab5780632e1a7d4d146100f95780633f4bab0214610127575b600080fd5b610095610245565b6040518082815260200191505060405180910390f35b6100f7600480360360408110156100c157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061024e565b005b6101256004803603602081101561010f57600080fd5b8101908080359060200190929190505050610296565b005b6101536004803603602081101561013d57600080fd5b81019080803590602001909291905050506102b4565b005b61015d6102be565b60405180821515815260200191505060405180910390f35b61017d6102d1565b60405180821515815260200191505060405180910390f35b6101e1600480360360408110156101ab57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506102e4565b005b61022f600480360360408110156101f957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610303565b6040518082815260200191505060405180910390f35b60008054905090565b80600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b6001600260016101000a81548160ff02191690831515021790555050565b8060008190555050565b600260009054906101000a900460ff1681565b600260019054906101000a900460ff1681565b6001600260006101000a81548160ff0219169083151502179055505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490509291505056fea2646970667358221220196fa07e08b4f64994e4b5be2f76c20032e0a82bcd7671eb60b8bf1cc68b51ec64736f6c63430007030033";