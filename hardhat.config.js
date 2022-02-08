require("@nomiclabs/hardhat-waffle");
require("hardhat-deploy");
require("hardhat-deploy-ethers");
require("hardhat-watcher");
require("hardhat-tracer");

require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");

dotenv.config();
const { PROD_PRIV_KEY, TESTEN_PRIV_KEY, INFURA_PROJECT_ID, ETHERSCAN_API } =
  process.env;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.2",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      chainId: 1337,
    },
    // ropsten: {
    //   url: `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`,
    //   accounts: [TESTEN_PRIV_KEY],
    // },
    // bsctestnet: {
    //   url: "https://data-seed-prebsc-1-s1.binance.org:8545",
    //   chainId: 97,
    //   accounts: [TESTEN_PRIV_KEY],
    // },
    // bscmainnet: {
    //   url: "https://bsc-dataseed.binance.org/",
    //   chainId: 56,
    //   accounts: [PROD_PRIV_KEY],
    // },
  },
  defaultNetwork: "ganache",
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  watcher: {
    test_stacking: {
      tasks: [
        { command: "compile", params: { quiet: true } },
        {
          command: "test",
          params: { testFiles: ["test/"], logs: true },
        },
      ],
      files: ["./contracts", "./test/"],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API,
  },
};
