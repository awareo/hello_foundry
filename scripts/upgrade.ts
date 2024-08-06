import { ethers, defender } from "hardhat";

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxxV2");

  const  salt = "0608202402ThoreBlnAWR"
  const proposal = await defender.proposeUpgradeWithApproval('0xca9891951ff8d3ed8364F0760543A41A572b252F', BoxV2, { 
    salt: salt,
    verifySourceCode: true,
  });

  console.log(`Upgrade proposed with URL: ${proposal.url}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});