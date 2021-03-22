// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "../libs/BEP20.sol";

contract BEP20Mock is BEP20 {

    constructor(string memory name, string memory symbol, uint initialBalance) BEP20(name, symbol) public {
        mint(msg.sender, initialBalance);
    }

    function mint(address _to, uint256 _amount) public onlyOwner {
        _mint(_to, _amount);
    }

}