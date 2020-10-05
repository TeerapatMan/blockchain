// src/index.js
const Web3 = require("web3");
const { setupLoader } = require("@openzeppelin/contract-loader");

async function main() {
  const web3 = new Web3("http://localhost:8545");

  //   Our code will go here
  const accounts = await web3.eth.getAccounts();

  console.log("accounts ==> ", accounts);

  const loader = setupLoader({ provider: web3 });

  const address = "0x21a59654176f2689d12E828B77a783072CD26680";

  const box = loader.web3.fromArtifact("Box", address);

  // Send a transaction to store() a new value in the Box
  await box.methods.store(4).send({
    from: accounts[0],
    gas: 50000,
    gasPrice: 1e6,
  });

  //   Call the retrieve() function of the deployed Box contract
  const value = await box.methods.retrieve().call();

  console.log("Box value is ==> ", value);
}

main();
