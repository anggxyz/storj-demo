//initiate withdraw
const Matic = require('maticjs').default
const config = require('./config')
const accounts = require ('./accounts')
const chalk = require ('chalk')

const token = config.MATIC_STORJ_TOKEN // test token address
const amount = '100' // amount in wei
const from = accounts.NODE1_FROM_ADDRESS // from address

// Create object of Matic
const matic = new Matic({
  maticProvider: config.MATIC_PROVIDER,
  parentProvider: config.PARENT_PROVIDER,
  rootChainAddress: config.ROOTCHAIN_ADDRESS,
  syncerUrl: config.SYNCER_URL,
  watcherUrl: config.WATCHER_URL,
  withdrawManagerAddress: config.WITHDRAWMANAGER_ADDRESS,	
})

matic.wallet = accounts.NODE1_PRIVATE_KEY // prefix with `0x`

// NOTE: Initiate the withdraw on the Matic chain, and wait for ~5 minutes for '0x51df9af51f1e1a1a7736daa404d44b1fdbbc80259e2a3186cc8681544cd65bf7' // Insert txHash 
// the checkpoint (refer https://whitepaper.matic.network/#checklayer for technical details) 
// before confirming the withdraw by executing `confirm-withdraw.js`.
// The txHash from the output needs to be copied to the `confirm-withdraw.js` file before executing

async function initiateWithdraw () {
  await matic.startWithdraw(token, amount, {
    from,
    onTransactionHash: (hash) => {
      console.log (chalk.bold.red("Withdraw initiated..."))
      console.log ("Tx hash: ", hash)
    }
  })

  await matic.balanceOfERC20(from, token).then((balance) => {
    console.log (chalk.bold.green("node"), chalk.bold.green("1"),"\t\t", from.substr(0,8).concat("...\t"),chalk.bold.blue(balance * 0.01));
  })
}


initiateWithdraw();