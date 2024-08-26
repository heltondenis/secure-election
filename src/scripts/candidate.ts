import { ethers } from 'ethers';

async function main() {
    // Substitua pelo endereço do contrato implantado
    const contractAddress = '0x5869B43f1DD2162a26Da332BF9197E0EE837579B';

    // Defina a ABI do contrato
    const abi = [
        "function candidates(uint256) public view returns (uint id, string memory name, uint voteCount)",
        "function candidatesCount() public view returns (uint)"
    ];

    // Conecte ao contrato implantado usando um provedor simples
    const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545');

    const contract = new ethers.Contract(contractAddress, abi, provider);

    // Obtenha o número total de candidatos
    const candidatesCount = await contract.candidatesCount();
    console.log(`Total de Candidatos: ${candidatesCount.toString()}`);

    // Liste todos os candidatos
    for (let i = 1; i <= candidatesCount; i++) {
        const candidate = await contract.candidates(i);
        console.log(`ID: ${candidate.id}, Nome: ${candidate.name}, Votos: ${candidate.voteCount}`);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("Erro durante a execução:", error);
        process.exit(1);
    });
