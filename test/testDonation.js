const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Donation Contract", function () {
    let Donation, donation, owner, addr1;

    beforeEach(async function () {
        [owner, addr1] = await ethers.getSigners();
        Donation = await ethers.getContractFactory("Donation");
        donation = await Donation.deploy();
        await donation.deployed();
    });

    it("Should accept donations", async function () {
        await donation.connect(addr1).donate({ value: ethers.utils.parseEther("1.0") });
        expect(await donation.totalDonations()).to.equal(ethers.utils.parseEther("1.0"));
    });

    it("Owner should be able to withdraw", async function () {
        await donation.connect(addr1).donate({ value: ethers.utils.parseEther("1.0") });
        await donation.withdraw();
        expect(await donation.totalDonations()).to.equal(0);
    });
});
