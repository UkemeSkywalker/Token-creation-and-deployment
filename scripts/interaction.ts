import { ethers } from "hardhat";
import { token } from "../typechain-types/factories/@openzeppelin/contracts";

async function main(){


    const CONTRACTADDRESS = "0x9817ADFA816ED48D1dFe3da3978915D7945D8fb9";

    const getContract = await ethers.getContractAt("AngryBlackWomenV2", CONTRACTADDRESS);



    const [name, decimals, owner, symbol, totalSupply] = await Promise.all([
        getContract.name(),
        getContract.decimals(),
        getContract.owner(),
        getContract.symbol(),
        getContract.totalSupply() 
        ]
    )

    console.log(
        "Token Name:", name, "\n",
        "Decimal", decimals, " \n",
        "Owner:", owner, "\n",
        "symbol", symbol, "\n",
        "total Supply", ethers.utils.formatEther((totalSupply))
        );


}

main()
.catch((error) => {
    console.error(error);
    process.exitCode =1;

})