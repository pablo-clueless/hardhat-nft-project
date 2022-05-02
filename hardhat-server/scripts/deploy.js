const hre = require('hardhat')

const main = async () => {
    const [owner] = await hre.ethers.getSigners()
    const contractFactory = await hre.ethers.getContractFactory('Collectible')
    const nftContract = await contractFactory.deploy()
    await nftContract.deployed()

    console.log('NFT Contract deployed to:', nftContract.address)
    console.log('NFT Contract owner address:', owner.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error)
        process.exit(0)
    })