// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Donation {
    address public owner; // Pemilik kontrak
    uint256 public totalDonations; // Total donasi yang terkumpul
    mapping(address => uint256) public donations; // Track donasi per alamat

    event Donated(address donor, uint256 amount); // Event buat donasi
    event FundsWithdrawn(address owner, uint256 amount); // Event buat narik dana

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can withdraw funds");
        _;
    }

    constructor() {
        owner = msg.sender; // Pemilik kontrak yang deploy
    }

    // Fungsi buat donasi
    function donate() external payable {
        donations[msg.sender] += msg.value;
        totalDonations += msg.value;
        emit Donated(msg.sender, msg.value);
    }

    // Fungsi buat narik dana
    function withdraw() external onlyOwner {
        uint256 amount = totalDonations;
        totalDonations = 0; // Reset total donasi
        payable(owner).transfer(amount); // Transfer dana ke owner
        emit FundsWithdrawn(owner, amount);
    }

    // Fungsi buat cek total donasi
    function getTotalDonations() external view returns (uint256) {
        return totalDonations;
    }
}
