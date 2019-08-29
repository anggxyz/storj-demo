#!/bin/sh

echo "\nStarting Demo ... \n"

echo "displaying Ropsten Balances\n"
node displayRopstenBalance.js

echo "\ndisplaying Matic Balances\n"
node displayMaticBalance.js

echo "\nDepositing 100 tokens from Ropsten to Matic - Satellite Account\n"
node depositStorj.js

echo "\n...\n"
sleep $(( 8 ))

echo "\nUpdated Balances - Matic\n"
node displayMaticBalance.js

echo "\nTransferring 5 Storj from Satellite to each of the nodes from Node 1 to Node 5\n"
node transferStorj.js 

echo "\n...\n"
sleep $(( 3 ))

echo "\nUpdated Balances - Matic\n"
node displayMaticBalance.js

echo "\nInitiating withdraw of 1 storj token on Node 1 from Matic to Ropsten\n"
node withdrawStorj-1.js 

echo "\nWithdrawal of 1 token from Node 1 has been initiated. Wait for ~7 minutes for the checkpoint. Copy the above transaction hash and paste into the variable transactionHash in withdrawStorj-2.js and execute. Once the challenge period is over funds can be claimed back by process-exit procedure - execute withdrawStorj-3.js\n"