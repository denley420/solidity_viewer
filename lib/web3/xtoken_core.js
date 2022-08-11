import web3 from "./web3";
import ABI from "./abi/XToken_Core.json";

const CONTRACT_ADDRESS = "0xd9949f1141b54C478a64e02DBCE28025522e1785";

const contract = new web3.eth.Contract(
    ABI.abi,
    CONTRACT_ADDRESS
);

export {
    contract,
    ABI,
    CONTRACT_ADDRESS
};