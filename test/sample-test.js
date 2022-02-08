const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Replenisher Tests", function () {
  before("Deploy", async function () {
    snapshot = await ethers.provider.send("evm_snapshot");
    [deployer, a1, a2, a3, a4, a5, a6, a7, a8] = await ethers.getSigners();
    Replenisher = await ethers.getContract("Replenisher", deployer);
  });

  it("Replenisher works", async function () {
    await Replenisher.replenish(1, { value: ethers.utils.parseEther("1") });
  });
});
