require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");

const secrets = require('./secrets')

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.6.12"
            },
            {
                version: "0.5.16"
            }
        ],
    },

    networks: {
        hardhat: {},
        bscTestnet: {
            url: secrets.testnetNodeUrl,
            accounts: secrets.testnetAccounts
        },
        bscMainnet: {
            url: secrets.mainnetNodeUrl,
            accounts: secrets.mainnetAccounts
        }
    },

    etherscan: {
        apiKey: secrets.bscScanApiKey
    },
};
