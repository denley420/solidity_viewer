import web3 from "./web3";
import ABI from "./abi/XToken_Core.json";

const CONTRACT_ADDRESS = "0xC9cC0eAd47173052741143bC841a1A83a8117Cb3";

const contract = new web3.eth.Contract(
    ABI.abi,
    CONTRACT_ADDRESS
);

export {
    contract,
    ABI,
    CONTRACT_ADDRESS
};