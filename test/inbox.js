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

let car; //defining car ahead of time
beforeEach(()=>{
  car=new Car(); //duplicate should have a helper beforeEach
});
// describe for nesting
describe ('Car',()=>{
  it('can park', ()=>{ //no intrinsic link between the cars
    assert.equal(car.park(), 'stopped');
  });

  it('can drive', ()=>{
    assert.equal(car.drive(), 'vrooom');
  });
}); 