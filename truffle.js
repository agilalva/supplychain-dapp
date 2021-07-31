const HDWalletProvider = require("truffle-hdwallet-provider");
const infuraKey = "599daaeee1a64210af2f2e79b67ab95c";
const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();

const address = "0x04A8d0eFa8A5DcAfe5A8c1AC2f78930aC6EB33C3";
const addressIndex = 2;

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*", // Match any network id
        },
        ganache: {
            host: "127.0.0.1",
            port: 7545,
            network_id: 5777,
        },
        rinkeby: {
            provider: () =>
                new HDWalletProvider(
                    mnemonic,
                    `https://rinkeby.infura.io/v3/${infuraKey}`,
                    addressIndex
                ),
            network_id: 4,
            gas: 4500000,
            gasPrice: 10000000000,
            from: address,
        },
    },
    compilers: {
        solc: {
            version: "0.4.24",
        },
    },
};
