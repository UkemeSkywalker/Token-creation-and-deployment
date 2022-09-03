require("dotenv").config();
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

module.exports ={
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: process.env.RPC_URL,
      accounts: [process.env.SKYWALKER] ,
    }
  },
  etherscan: {
    apikey: process.env.ETHERSCANKEY
  }
};


