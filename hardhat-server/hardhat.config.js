require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-ethers')
require('dotenv').config()

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: `${process.env.ALCHEMY_GOERLI_URL}`,
      accounts: [`${process.env.GOERLI_PRIVATE_KEY}`],
    },
  }
}
