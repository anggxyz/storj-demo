//confirm withdraw
const Matic = require('maticjs').default
const config = require('./config')
const accounts = require ('./accounts')
const chalk = require ('chalk')

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

matic.wallet = accounts.NODE1_PRIVATE_KEY 
var transactionHash = '' // paste tx hash here

//Wait for 5 mins till the checkpoint is submitted, then run the confirm withdraw
matic.withdraw(transactionHash, {
   from,
   onTransactionHash: (hash) => {
      // action on Transaction success
      console.log("Tx hash: ", hash) // eslint-disable-line
      console.log(chalk.bold.green("Withdraw process is completed, funds will be transfered to your account after challenge period is over."))
      console.log ("Once the challenge period is over the withdrawn funds can be claimed back to your Ethereum acccount from the mainchain contract using a process-exit procedure (execute withdrawStorj-3.js)")
   },
})