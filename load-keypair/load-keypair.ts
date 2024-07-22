// import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

// const publicKey = new PublicKey("B4jPdpRDKCZzF1oc6ZL3g3JjYfibmYTtGidVumLkciUm");

// const connection = new Connection("https://api.devnet.solana.com", "confirmed");

// const balanceInLamports = await connection.getBalance(publicKey);

// const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

// console.log(
//   `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
// );


import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const suppliedPublicKey = process.argv[2];
if (!suppliedPublicKey) {
  throw new Error("Provide a public key to check the balance of!");
}

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const publicKey = new PublicKey(suppliedPublicKey);

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);

//To run this code use
// npx esrun check-balance.ts (some wallet address)