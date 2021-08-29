import { ethers } from 'hardhat';

const GOV = '0x820dB01Bf63f1CFCC0Cff60aE0a177d83678e633';
const KERNEL = '0x48fc1fc9F88fdc98302E40aF50B32B06dDeB7713';

async function main () {
    const gov = await ethers.getContractAt('Governance', GOV);
    await gov.initialize(KERNEL);
    console.log('Governance has been initialised!');
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
