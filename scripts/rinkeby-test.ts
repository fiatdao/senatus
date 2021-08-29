import { ethers } from 'hardhat';

const _kernel = '0xA95281904827E1758252bB49eCd5D3Cf06F2040e';

async function main () {
    const kernel = await ethers.getContractAt('Kernel', _kernel);
    console.log (await kernel.entrStaked());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
