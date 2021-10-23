import { task, HardhatUserConfig } from 'hardhat/config';
import * as config from './config';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-etherscan';
import 'hardhat-abi-exporter';
import 'hardhat-typechain';
import 'solidity-coverage';
import 'hardhat-gas-reporter';
import 'hardhat-contract-sizer';

task('deploy', 'Deploys and inits the governance contract')
    .addParam('comitium', 'The address of the comitium contract')
    .setAction(async (taskArg) => {
        const deployGovernance = require('./scripts/deploy');
        await deployGovernance(taskArg.comitium);
    });

// Some of the settings should be defined in `./config.js`.
// Go to https://hardhat.org/config/ for the syntax.
const cfg: HardhatUserConfig = {
    solidity: {
        version: '0.7.6',
        settings: {
            optimizer: {
                enabled: true,
                runs: 9999,
            },
        },
    },
    defaultNetwork: 'hardhat',

    networks: config.networks,
    etherscan: config.etherscan,

    abiExporter: {
        only: ['Governance'],
        clear: true,
    },

    gasReporter: {
        enabled: (process.env.REPORT_GAS) ? true : false,
    },

    contractSizer: {
        alphaSort: true,
        runOnCompile: true,
        disambiguatePaths: false,
    },
};

export default cfg;
