import hardhat from 'hardhat';
const ethers = hardhat.ethers;

async function deploy(kernel: string) {
    await hardhat.run('compile');

    const Governance = await ethers.getContractFactory('Governance');
    const governanceInstance = await Governance.deploy();
    console.log('Deploying Governance, please wait...');
    await governanceInstance.deployed();
    console.log(`Governance Deployed at ${governanceInstance.address}`)

    console.log('Initializing Governance + waiting block confirmations, please wait...');
    const initTx = await governanceInstance.initialize(kernel);
    await initTx.wait(5);
    console.log('Initialized')

    console.log('Verifying contract on Etherscan...');
    await hardhat.run("verify:verify", {
        address: governanceInstance.address,
        constructorArguments: [],
        contract: "contracts/Governance.sol:Governance",
    });

    console.log('Governance Address: ', governanceInstance.address);
}

module.exports = deploy;
