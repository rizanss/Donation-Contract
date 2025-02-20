const hre = require("hardhat");

async function main() {
    const Donation = await hre.ethers.getContractFactory("Donation");
    const donation = await Donation.deploy();

    await donation.deployed();
    console.log("Donation contract deployed at:", donation.address);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
