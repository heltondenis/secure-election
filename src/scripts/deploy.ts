import { ethers } from "hardhat";

async function main() {
  // Pega a fábrica de contratos
  const Voting = await ethers.getContractFactory("Voting");
  
  // Desplega o contrato
  const voting = await Voting.deploy();

  await voting.deployed();

  console.log("Voting contract deployed to:", voting.address);
}

// Executa o script de deploy
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
