const hre = require("hardhat")

async function main() {
  const [owner] = await hre.ethers.getSigners()
  const NFTContractFactory = await hre.ethers.getContractFactory('Collectible')
  const NFTContract = await NFTContractFactory.deploy()
  await NFTContract.deployed()

  console.log("NFTContract deployed to:", NFTContract.address)
  console.log("NFTContract owner address:", owner.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
