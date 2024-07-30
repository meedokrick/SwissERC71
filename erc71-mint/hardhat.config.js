require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "bde758ab3d367dd577f3630a763f644f2079527438945d128d80f731a363f834";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};
