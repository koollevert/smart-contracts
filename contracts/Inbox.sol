// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Inbox{  //like a class contracts are essentially class instances
    string public message; //new var persisted on blockchain
    
    // function Inbox(string initialMessage) public {
    //     message=initialMessage;
    // }

    constructor(string memory initialMessage) { //automatically invoked when deployed to blockcahin
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public{
        message=newMessage;
    }

    // function getMessage()public view returns (string){
    //     return message;
    // }
}

//helps has get to a node to deploy our contract instead of using our own machine


