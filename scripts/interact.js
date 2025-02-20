const { ethers } = require("hardhat");

async function main() {
    const donation = await ethers.getContractAt("Donation", "YOUR_CONTRACT_ADDRESS");
    
    // Donasi 1 ETH
    const tx = await donation.donate({ value: ethers.utils.parseEther("1.0") });
    await tx.wait();
    console.log("Donasi berhasil 1 ETH!");
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
