const hre = require('hardhat')

const main = async () => {
    const [owner] = await hre.ethers.getSigners()
    const contractFactory = await hre.ethers.getContractFactory('MemeCoin')
    const contract = await contractFactory.deploy()
    await contract.deployed()

    console.log('MemeCoin Contract deployed to:', contract.address)
    console.log('MemeCoin Contract owner address:', owner.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error)
        process.exit(0)
    })