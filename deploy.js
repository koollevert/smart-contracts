const HDWalletProvider = require('@truffle/hdwallet-provider');
const {Web3} = require('web3');
const { abi, bytecode } = require('./build/Inbox.json');

const provider = new HDWalletProvider(
    'saddle connect tumble beyond impose siren spin brain crumble chief grief dice',
    'https://sepolia.infura.io/v3/b3be9208b48349fe9f9aa63ac4cf8b68'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from Account', accounts[0]);

    const result = await new web3.eth.Contract(abi)
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();  // Stop the provider engine
};

deploy();




// const HDWalletProvider = require('truffle-hdwallet-provider');
// const {Web3}=require('web3');
// const { abi, bytecode } = require('./build/Inbox.json');
// const { network } = require('hardhat');

// const provider = new HDWalletProvider(
//     'saddle connect tumble beyond impose siren spin brain crumble chief grief dice',//neomonic
//     'https://sepolia.infura.io/v3/b3be9208b48349fe9f9aa63ac4cf8b68' //networklink
// );

// const web3 = new Web3(provider);

// const deploy = async ()=>{
//     const accounts= await web3.eth.getAccounts();
//     console.log('Attempting to deploy from Account', accounts[0]);
//     const result = await new web3.eth.Contract(abi)
//         .deploy({ data: bytecode, arguments: ['Hi there!'] })
//         .send({ gas: '1000000', from: accounts[0] });

//     console.log('Contract deployed to', result.options.address)
// };
// deploy();


// async function main() {
//     const [deployer, ...accounts] = await ethers.getSigners();

//     console.log("Deploying contracts with the account:", deployer.address);

//     const balance = await deployer.getBalance();
//     console.log("Account balance:", balance.toString());

//     const Inbox = await ethers.getContractFactory("Inbox");
//     const inbox = await Inbox.deploy("Hello, world!");

//     console.log("Contract deployed to address:", inbox.address);

//     console.log("Other accounts:");
//     accounts.forEach((account, index) => {
//         console.log(`${index + 1}: ${account.address}`);
//     });
// }

// main()
//     .then(() => process.exit(0))
//     .catch(error => {
//         console.error(error);
//         process.exit(1);
//     });
