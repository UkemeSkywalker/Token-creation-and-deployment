// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AngryBlackWomenV2 is ERC20, Ownable {
    constructor() ERC20("AngryBlackWomenV2", "ABWV2") {
        _mint(msg.sender, 60000 * 10 ** decimals());
    }
}