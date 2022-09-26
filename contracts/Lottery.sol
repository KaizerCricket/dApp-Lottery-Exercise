// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Lottery {
    address public owner;
    address payable[] public managers;
    address payable[] public players;
    address mokToken;
    uint price;
    uint prizePool;
    uint pastPool;
    uint usageFeePool;
    uint resetTime;
    
    constructor(address token) {
        owner = msg.sender;
        managers = new address payable[](2);
        mokToken = token;
        price = 20 * 10 ** 18;
        prizePool = 0;
        usageFeePool = 0;
        resetTime = 0;
    }

    modifier ownerOnly() {
        require(msg.sender == owner);
        _;
    }

    modifier staffOnly(){
        require(
                msg.sender == owner ||
                msg.sender == managers[0] ||
                msg.sender == managers[1] ||
        );
    }


    function enter() public payable{
        require(
            transferFrom(msg.sender, address(this), price),
        );
        players.push(payable(msg.sender));
        prizePool += price*95/100;
        usageFeePool += price*5/100;

    }

    function withdraw() public ownerOnly{
        IERC20(mokToken).transfer(msg.sender, usageFeePool);
        usageFeePool = 0;
    }

    function pickWinner() public staffOnly{
        require(
            block.timestamp > resetTime,
        );
        uint index = random() % players.length;
        players[index].transfer(prizePool);
        prizePool = 0;
        resetTime = block.timestamp + 1 days;
    }

    function getSummary() public view returns (
        address, uint, uint, uint, uint, uint
    ) {
        return (
            owner,
            price,
            prizePool,
            pastPool,
            usageFeePool,
            resetTime
        );
    }
}