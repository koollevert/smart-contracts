// scripts/deploy.js

async function main() {
    const [deployer, ...accounts] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const balance = await deployer.getBalance();
    console.log("Account balance:", balance.toString());

    const Inbox = await ethers.getContractFactory("Inbox");
    const inbox = await Inbox.deploy("Hello, world!");

    console.log("Contract deployed to address:", inbox.address);

    console.log("Other accounts:");
    accounts.forEach((account, index) => {
        console.log(`${index + 1}: ${account.address}`);
    });
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
