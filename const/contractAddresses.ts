/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Mumbai } from "@thirdweb-dev/chains";
export const NETWORK = "binance-testnet";

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0xF52162f92B57c361a47a7092cC6B64Ff37E1B5D4";
// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  "0xeF9882AAE45DB0536eee13cB9806bB4D741E2835";

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://testnet.bscscan.com";
