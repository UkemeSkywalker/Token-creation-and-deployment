import { ethers } from "hardhat";

async function main() {

    const deploy = await ethers.getContractFactory("AngryBlackWomenV2");
    const Deploy = await deploy.deploy();

    const result = await Deploy.deployed();

    console.log("Contract deployed at:", result.address);
    
}

main()
.catch((error)=> {
    console.error(error);
    process.exitCode = 1;
})