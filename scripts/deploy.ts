import { ethers } from "hardhat";

async function main() {
    const TokenSwapper = await ethers.getContractFactory("TokenSwapper");
    const tokenSwapper = await TokenSwapper.deploy();
    await tokenSwapper.deployed();

    console.log(`TokenSwapper deployed to ${tokenSwapper.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
