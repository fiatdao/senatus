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
Governance deployed at:  0x843Ec9F11E9162bD1A93428f574137Ea2dAFe695
```
### Rinkeby
```shell
Governance deployed at:  0x820dB01Bf63f1CFCC0Cff60aE0a177d83678e633
```

## Audits
FIAT DAO is a fork of BarnBridge DAO. Here you can find the audits for the original contracts:
- [QuantStamp](https://github.com/BarnBridge/BarnBridge-PM/blob/master/audits/BarnBridge%20DAO%20audit%20by%20Quanstamp.pdf)
- [Haechi](https://github.com/BarnBridge/BarnBridge-PM/blob/master/audits/BarnBridge%20DAO%20audit%20by%20Haechi.pdf)
