import { ethers } from 'hardhat';

const KERNEL = '0x48fc1fc9F88fdc98302E40aF50B32B06dDeB7713';

async function main () {
    const kernel = await ethers.getContractAt('IKernel', KERNEL);
    console.log (await kernel.entrStaked());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
