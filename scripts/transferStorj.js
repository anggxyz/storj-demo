const Matic = require('maticjs').default
const config = require('./config')
const accounts = require ('./accounts')

const from = accounts.SATELLITE_FROM_ADDRESS 

const nodes = [
    accounts.NODE1_FROM_ADDRESS, 
    accounts.NODE2_FROM_ADDRESS,
    accounts.NODE3_FROM_ADDRESS,
    accounts.NODE4_FROM_ADDRESS,
    accounts.NODE5_FROM_ADDRESS
];
const token = config.MATIC_STORJ_TOKEN 
const amount = '500' 
const matic = new Matic({
  maticProvider: config.MATIC_PROVIDER,
  parentProvider: config.PARENT_PROVIDER,
  rootChainAddress: config.ROOTCHAIN_ADDRESS,
  syncerUrl: config.SYNCER_URL,
  watcherUrl: config.WATCHER_URL,
})

matic.wallet = accounts.SATELLITE_PRIVATE_KEY // prefix with `0x`

async function transfer () {
    for (let i = 0; i < nodes.length; i ++) {
        await matic.transferTokens(token, nodes[i], amount, {
            from,
            onTransactionHash: (hash) => {
                console.log("Transfer successful to node ", i+1, " Tx hash: ", hash.substr(0,9).concat("..."));
            }
        })
    }
}

transfer();