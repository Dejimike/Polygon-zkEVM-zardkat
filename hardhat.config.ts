import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
// https://github.com/projectsophon/hardhat-circom
import "hardhat-circom";
// environment variables
require("dotenv").config();
// circuits
import circuits = require('./circuits.config.json')

// set env var to the root of the project
process.env.BASE_PATH = __dirname;

// tasks
import "./tasks/newcircuit.ts"

const config: HardhatUserConfig = {
  networks: {
    
    sepolia: {
      url: "https://starknet-sepolia.public.blastapi.io/rpc/v0_7",
      accounts: [`3eab3c73ad6958d25a9e1baf3ac5a77340b4fea3eae8944c652973757fe21029`],
    },
  },
  etherscan: {
    apiKey: "CPWBS6HKUUQ6MJXHSFYIUJ4RET93N35HEG",
  },
  solidity: {
    compilers: [
      {
        version: "0.8.17",
      },
      {
        version: "0.6.11",
      }
    ]
  },
  circom: {
    // (optional) Base path for input files, defaults to `./circuits/`
    inputBasePath: "./circuits",
    // (required) The final ptau file, relative to inputBasePath, from a Phase 1 ceremony
    ptau: "powersOfTau28_hez_final_12.ptau",
    // (required) Each object in this array refers to a separate circuit
    circuits: JSON.parse(JSON.stringify(circuits))
  },
};

export default config;
