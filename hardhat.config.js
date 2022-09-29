require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 2022,
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/3f370d45f0b74e9182e1c63af9d4b973",
      accounts: [
        "c741cea0b06be43b6ff9a655e29363b6e3a373f5d9076eeb7b92271579ee7d61"
      ],
      gas: 7000000,
      gasPrice: 8000000000,
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};
