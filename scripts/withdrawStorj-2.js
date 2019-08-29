//confirm withdraw
const Matic = require('maticjs').default
const config = require('./config')
const accounts = require ('./accounts')

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

var transactionHash = '0x1e207cf7a991e9965bb4846b117585cf72e53ce12686c36bda46a1b4111f224f' // Insert txHash 

//Wait for 5 mins till the checkpoint is submitted, then run the confirm withdraw
matic.withdraw(transactionHash, {
   from,
   onTransactionHash: (hash) => {
      // action on Transaction success
      console.log(hash) // eslint-disable-line
      // Withdraw process is completed, funds will be transfer to your account after challege period is over.
   },
})