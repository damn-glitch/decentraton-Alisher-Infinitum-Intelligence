// smart-contracts/contracts/HRPlatformToken.sol
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract HRPlatformToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("HRPlatformToken", "HPT") {
        _mint(msg.sender, initialSupply * (10 ** uint256(decimals())));
    }
}
