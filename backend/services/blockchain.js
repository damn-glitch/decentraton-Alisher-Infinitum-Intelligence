// backend/services/blockchain.js
const Web3 = require('web3');
const fs = require('fs');
require('dotenv').config();

const web3 = new Web3('http://localhost:8545');

// ABI и адрес контракта
const CONTRACT_ABI = JSON.parse(fs.readFileSync('../smart-contracts/build/contracts/EmploymentContract.json')).abi;
const CONTRACT_ADDRESS = 'YOUR_DEPLOYED_CONTRACT_ADDRESS';

const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

module.exports = contract;
