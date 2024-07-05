const path = require('path');
const fs = require('fs');
const hardhat = require('hardhat');

async function main() {
    try {
        // Compile the contracts using Hardhat
        await hardhat.run('compile');

        // Directory where Hardhat stores compiled artifacts
        const artifactsDir = path.join(__dirname, 'artifacts', 'contracts', 'Inbox.sol');

        // Specify the contract name
        const contractName = 'lottery';
        const artifactPath = path.join(artifactsDir, `${contractName}.json`);

        // Check if the artifact file exists
        if (fs.existsSync(artifactPath)) {
            // Read the artifact file
            const artifact = JSON.parse(fs.readFileSync(artifactPath, 'utf8'));
            console.log('ABI and bytecode of Inbox:');
            console.log('ABI:', artifact.abi);
            console.log('Bytecode:', artifact.bytecode);

            // Return ABI and bytecode
            return {
                abi: artifact.abi,
                bytecode: artifact.bytecode
            };
        } else {
            throw new Error(`Artifact file not found at path: ${artifactPath}`);
        }
    } catch (error) {
        console.error(error);
        process.exitCode = 1;
    }
}

module.exports = main();
