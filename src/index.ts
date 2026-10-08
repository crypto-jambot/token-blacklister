import { ethers } from "hardhat";
import { BigQueryUtil } from "@crypto-jambot/bigquery-utils";
import { abi as erc20ABI } from "@uniswap/v2-periphery/build/IERC20.json";
import { abi as tokenSwapperABI } from "../artifacts/contracts/TokenSwapper.sol/TokenSwapper.json";

(async function main() {
    const bqUtil = new BigQueryUtil();
    const queryString = `SELECT address FROM \`crypto-351521.ethereum_v2.tokens\``;
    const rows = await bqUtil.query(queryString);
    console.log(rows.length);
    const signers = await ethers.getSigners();
    const tokenSwapper = new ethers.Contract("", tokenSwapperABI, signers[0]);
})();
