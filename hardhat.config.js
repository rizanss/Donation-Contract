require("@nomicfoundation/hardhat-toolbox");

module.exports = {
    solidity: "0.8.0",
    networks: {
        hardhat: {},
    },
};

// 5. File package.json
{
    "name": "donation-contract",
    "version": "1.0.0",
    "scripts": {
        "test": "hardhat test",
        "deploy": "hardhat run scripts/deploy.js --network hardhat"
    },
    "devDependencies": {
        "hardhat": "^2.8.3",
        "@nomicfoundation/hardhat-toolbox": "^2.0.0",
        "chai": "^4.3.4",
        "ethers": "^5.7.0"
    }
}
