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

# TODO echo "\nWithdrawing 1 storj token on Node 1 from Matic to Ropsten\n"
# TODO 