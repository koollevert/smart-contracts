const assert = require('assert');
const {Web3} = require('web3');
const ganache = require('ganache');
const { abi, bytecode } = require('../build/Inbox.json');


const web3 = new Web3(ganache.provider());

let inbox;
let Accounts;

beforeEach(async () => {
  // Get list of all accounts
  Accounts = await web3.eth.getAccounts();
  
  // Use one account to deploy the contract
  inbox = await new web3.eth.Contract(abi)
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ from: Accounts[0], gas: '1000000' });
});

describe('Inbox', () => {
  it('deploys a contract', () => { //simple deployment test using address option
    assert.ok(inbox.options.address); //ok asks it it a truthy value then test passes
    console.log(inbox);
    console.log(Accounts)
  });

  it('has a default message', async ()=>{
    const message = await inbox.methods.message().call();
    assert.equal(message, 'Hi there!');
  });
  //method in inbox.methods is an object containing all public methods in our contract

  // Add more tests as needed

  it('can change the message', async()=>{
    await inbox.methods.setMessage('bye').send({from: Accounts[0]});
    const message = await inbox.methods.message().call();
    assert.equal(message, 'bye');
    // test fails if that method isn't marked as async
  })
});
