# FIAT-DAO Governance contract

## How it works
Please see the [SPEC](./SPEC.md)

## Running tests
**Note:** The result of tests is readily available [here](./test-results.md).

### 1. Clone this repo
```shell
git clone git@github.com:fiatdao/Senatus.git
```

### 2. Install dependencies
```shell
yarn install
```

### 3. Run tests
```shell
yarn test

# or if you want to run with coverage
yarn run coverage
```

## Deployment

`Governance.sol` Deployment
- Deploys the Governance contract
- Initialises the contract with the provided Comitium Address
- Verifies the contract at Etherscan
```
npx hardhat deploy --network {NETWORK} --comitium {ADDRESS}
```

### Mainnet
```shell
Governance deployed at:  0xa55E0d3d697C4692e9C37bC3a7062b1bECeEF45B
```
### Rinkeby
```shell
Governance deployed at:  0x97379b1B65825FE21598a1549aBf344eCb32dC95
```

## Audits
FIAT DAO is a fork of BarnBridge DAO. Here you can find the audits for the original contracts:
- [QuantStamp](https://github.com/BarnBridge/BarnBridge-PM/blob/master/audits/BarnBridge%20DAO%20audit%20by%20Quanstamp.pdf)
- [Haechi](https://github.com/BarnBridge/BarnBridge-PM/blob/master/audits/BarnBridge%20DAO%20audit%20by%20Haechi.pdf)
