// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.7;

contract Box {
    uint256 private value;

    // Emitted when the stored value changes
    event ValueChanged(uint256 newValue);

    // Stores a new value in the contract setter!
    function store(uint256 newValue) public {
        value = newValue;
        emit ValueChanged(newValue);
    }

    // Reads the last stored value getter!
    function retrieve() public view returns (uint256) {
        return value;
    }
}