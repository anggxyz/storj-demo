# storj-demo

## Description

The demo uses one Satellite account and 5 Node accounts

1. Satellite    `0xB1364DE770a9ac34179773B6cbB06d0f7ED5D68c`
2. Node 1   `0x13f037F7358BBcc4c2B94d8ec8BB4828785e995F`
3. Node 2   `0xdf1Fd87c5622610eD0C192393e2FA3DED7F66051`
4. Node 3   `0xc047A125801E2131139D98e7f1a20c2128af40A3`
5. Node 4   `0x011435bA15926e15D58cb4dcd0Ed0c889C673662`
6. Node 5   `0x697eA424d20065E57F560AAA29019C37C53D72a1`

The ERC20 token named [Storj Demo Token (STRJDMO)](/contracts/storj-demo-token.sol) is used to demonstrate the deposit, transfer and withdrawal functions

STRJDMO Ropsten - `0xA5FE1ceB89d13bEE80595A148223e7E58eF2dA41`

STRJDMO Matic - `0x4f4425a724bd0b8ad84733aa15b789946f929ccc` 


## Usage

clone the repo, `cd` into the scripts directory and run `demo` shell script

```
cd scripts
./demo.sh
```

The demo script performs the following:

1. Deposits 100 demo tokens from Satellite's Ropsten account to Matic
2. Transfers 5 demo tokens to each of the five nodes on Matic
3. Initiates Withdrawal of 1 demo token from Node 1 

Note: Withdrawal is a three step process,

1. Initiation - executed by demo.sh
2. Confirmation
3. Process exit

The demo script executes the first step, for the second and third step the following steps are to be followed:

1. Copy the transaction hash displayed just before the execution of demo.sh ends
2. Wait for ~7 minutes for the checkpoint before executing the next step
3. Paste it against the variable transactionHash in [withdrawStorj-2.js](/scripts/withdrawStorj-2.js)
4. Once the challenge period is over funds can be claimed back by process-exit procedure - execute [withdrawStorj-3.js](/scripts/withdrawStorj-3.js)
