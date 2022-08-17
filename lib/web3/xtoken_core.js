import web3 from "./web3";
import ABI from "./abi/XToken_Core.json";

const CONTRACT_ADDRESS = "0x0902294e9ccb2Ce895E70164709fD4988d1eD5D9";

const contract = new web3.eth.Contract(
    ABI.abi,
    CONTRACT_ADDRESS
);

export {
    contract,
    ABI,
    CONTRACT_ADDRESS
};