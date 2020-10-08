// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GLDToken is ERC20 {
    constructor(uint256 initialSupply) public ERC20("Gold", "GLD") {
        _mint(msg.sender, initialSupply);
    }
}