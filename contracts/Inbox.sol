// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// contract Inbox{  //like a class contracts are essentially class instances
//     string public message; //new var persisted on blockchain
    
//     // function Inbox(string initialMessage) public {
//     //     message=initialMessage;
//     // }

//     constructor(string memory initialMessage) { //automatically invoked when deployed to blockcahin
//         message = initialMessage;
//     }

//     function setMessage(string memory newMessage) public{
//         message=newMessage;
//     }

//     // function getMessage()public view returns (string){
//     //     return message;
//     // }
// }

//helps has get to a node to deploy our contract instead of using our own machine

contract lottery{
    address public manager; //automatically manager is called as a function its maked as public
    address[] public players;

    constructor(){
        manager= msg.sender; //msg global var

    }

    function enter() public payable{ //receives some ether
        require(msg.value> .01 ether); //require: global boolean flag
        players.push(msg.sender);
    }

    function random() public view returns(uint){
        return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, players)));
    }

    function pickWinner()public restricted{
        // require(msg.sender==manager);
        uint index = random()%players.length;
        // players[index].transfer(this.balance);
        payable(players[index]).transfer(address(this).balance); //correct way in 0.8.0
        // players[index].transfer.address(this).balance;
        players= new address[](0);
    }


    modifier restricted() {
        require(msg.sender==manager);
        _;
    }

    function getPlayers()public view returns(address[] memory){
        return players;
    }
}
 