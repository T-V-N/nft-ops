module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const { ADMIN } = process.env;

  const args = [ADMIN, ethers.utils.parseEther("0.5")]; //admin + 0.5ftm

  await deploy("Replenisher", {
    from: deployer,
    args: args,
    log: true,
  });
};

module.exports.tags = ["Replenisher"];
