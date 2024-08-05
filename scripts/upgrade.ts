import { ethers, defender } from "hardhat";

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");

  const  salt = "12345678"
  const proposal = await defender.proposeUpgradeWithApproval('0xb1Cd798ECdc0c8325770705472dF98D4Eb8879CF', BoxV2, { salt: salt });

  console.log(`Upgrade proposed with URL: ${proposal.url}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});