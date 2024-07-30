// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MufasaToken is ERC721 {
    constructor() ERC721("MufasaToken", "MUF") {}

	function mint100tokens() public {
        _mint(msg.sender,100*10**18);
    }
}
