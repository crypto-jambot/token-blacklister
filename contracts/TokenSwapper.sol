// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TokenSwapper {
    constructor()  {}

    // Assumes tokens has already been sent to the contract
    function withdraw(address token) external {
        IERC20 tokenContract = IERC20(token);
        uint256 contractBalance = tokenContract.balanceOf(address(this));
        uint256 senderBalanceBefore = tokenContract.balanceOf(msg.sender);
        tokenContract.transfer(msg.sender, contractBalance);
        uint256 senderBalanceAfter = tokenContract.balanceOf(msg.sender);
        require(senderBalanceAfter - senderBalanceBefore >= contractBalance);
    }
}
