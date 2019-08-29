const Web3 = require('web3')
const config = require('./config')
const accounts = require ('./accounts')
const abi = require('../build/contracts/StorjDemoToken.json').abi;
const token = config.ROPSTEN_STORJ_TOKEN;
const chalk = require ('chalk')


const web3 = new Web3 (config.PARENT_PROVIDER);
const satellite = accounts.SATELLITE_FROM_ADDRESS;
const contract = new web3.eth.Contract (abi, token);

const allAddresses = [
    accounts.SATELLITE_FROM_ADDRESS,
    accounts.NODE1_FROM_ADDRESS, 
    accounts.NODE2_FROM_ADDRESS,
    accounts.NODE3_FROM_ADDRESS,
    accounts.NODE4_FROM_ADDRESS,
    accounts.NODE5_FROM_ADDRESS
]

async function displayBalances () {
    for (let i = 0; i < allAddresses.length; i ++) {
        await contract.methods.balanceOf(allAddresses[i]).call((err, result) => {
            if (i == 0) {
                console.log (chalk.bold.red("satellite"), allAddresses[i].substr(0,8).concat("...\t"), chalk.bold.blue (result*0.01));
            }
            else {
                console.log (chalk.bold.green("node"), chalk.bold.green(i), allAddresses[i].substr(0,8).concat("...\t"),chalk.bold.blue(result * 0.01));
            }
            // console.log (result);
        })
    }
}

displayBalances();