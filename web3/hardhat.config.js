/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.24',
    defaultNetwork: 'sepolia',
    networks: {
      hardhat: {},
      sepolia: {
        url: 'https://rpc.ankr.com/multichain/c28af78a33a659682bfabf7027c33343807dda760de12b83e6e95ec7528f6ba1',
        accounts: ['0x${process.env.PRIVATE_KEY}']
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};