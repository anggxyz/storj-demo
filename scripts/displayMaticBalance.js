const Matic = require('maticjs').default
const config = require('./config')
const accounts = require ('./accounts')
const chalk = require ('chalk')

const matic = new Matic({
  maticProvider: config.MATIC_PROVIDER,
  parentProvider: config.PARENT_PROVIDER,
  rootChainAddress: config.ROOTCHAIN_ADDRESS,
  syncerUrl: config.SYNCER_URL,
  watcherUrl: config.WATCHER_URL,
  maticWethAddress: config.MATICWETH_ADDRESS,
})

const tokenAddress = config.MATIC_STORJ_TOKEN 

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
    await matic.balanceOfERC20(allAddresses[i], tokenAddress).then((balance) => {
      if (i == 0) {
        console.log (chalk.bold.red("satellite\t"),allAddresses[i].substr(0,8).concat("...\t"), chalk.bold.blue(balance*0.01));
      }
      
      else {
        console.log (chalk.bold.green("node"), chalk.bold.green(i),"\t\t", allAddresses[i].substr(0,8).concat("...\t"),chalk.bold.blue(balance * 0.01));
      }
      
    })
  }
}

displayBalances();