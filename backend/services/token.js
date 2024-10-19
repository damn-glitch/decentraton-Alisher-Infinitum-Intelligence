// backend/services/token.js
const Web3 = require('web3');
const fs = require('fs');
require('dotenv').config();

const web3 = new Web3('http://localhost:8545');

// ABI и адрес токена
const TOKEN_ABI = JSON.parse(fs.readFileSync('../smart-contracts/build/contracts/HRPlatformToken.json')).abi;
const TOKEN_ADDRESS = 'YOUR_DEPLOYED_TOKEN_ADDRESS';

const tokenContract = new web3.eth.Contract(TOKEN_ABI, TOKEN_ADDRESS);

module.exports = tokenContract;
