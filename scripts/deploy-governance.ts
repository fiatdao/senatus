import hardhat from 'hardhat';
const ethers = hardhat.ethers;

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

async function deployGovernance (kernel: string) {
    await hardhat.run('compile');

    const Governance = await ethers.getContractFactory('Governance');
    const governanceInstance = await Governance.deploy();
    console.log('Deploying Governance, please wait...');
    await governanceInstance.deployed();

    console.log('Initializing Governance, please wait...');
    await (governanceInstance.initialize(kernel));

    console.log(`Sleep for 10sec until Etherscan picks up the deployed code.`)
    await delay(10_000);

    console.log('Verifying contract on Etherscan...');
    await hardhat.run("verify:verify", {
        address: governanceInstance.address,
        constructorArguments: [],
        contract: "contracts/Governance.sol:Governance",
    });

    console.log('Governance Address: ', governanceInstance.address);
}

module.exports = deployGovernance;
