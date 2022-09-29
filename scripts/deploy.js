// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers } = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const MOKToken = await ethers.getContractFactory("MOKToken");
  const mokToken = await MOKToken.deploy();

  await mokToken.deployed();

  console.log("MOK token contract deployed to:", mokToken.address);

  const Lottery = await ethers.getContractFactory("Lottery");
  const lottery = await Lottery.deploy(`${mokToken.address}`);

  await lottery.deployed();

  console.log("Lottery contract deployed to:", lottery.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
