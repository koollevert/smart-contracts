const assert=require('assert');
const { Web3 } = require('web3'); //correctr way of importing this library
const {ethers} = require('hardhat');
const web3 = new Web3(ethers.provider);


class Car {
  park(){
    return 'stopped';
  }

  drive(){
    return 'vrooom';
  }
}

describe ('Car',()=>{
  it('can park', ()=>{
    const car=new Car();
    assert.equal(car.park(), 'stopped');
  });
}); //no intrinsic link between the cars