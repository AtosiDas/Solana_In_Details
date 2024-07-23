import { createMint } from "@solana/spl-token";
//import "dotenv/config";
// import {
//   getExplorerLink
// } from "@solana-developers/helpers";
import { Connection, Keypair, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));

const user = Keypair.fromSecretKey(Uint8Array.from([
    125,  57,  21,  39, 225, 121, 183, 198,  73, 123, 201,
     29,  33,  14, 213, 114,  87, 122, 209, 220,  37, 205,
    153,   0, 129, 104, 216,  33,  84, 154, 187,  41, 191,
    109,  28, 164, 188, 210,  96, 163, 216, 121, 212, 120,
    197, 169, 247,   2,   0, 147, 236, 250, 196, 127, 199,
    136,  38, 110, 148, 188, 131, 131, 177,  63
  ]));

//const user = getKeypairFromEnvironment("SECRET_KEY");

console.log(
  `🔑 Loaded our keypair securely, using an env file! Our public key is: ${user.publicKey.toBase58()}`
);

const tokenMint = await createMint(connection, user, user.publicKey, null, 2);

const addressOfTokenMint = tokenMint.toString()
console.log(addressOfTokenMint);
//9A6Kwpuk5kYnRAtiqMRcHkicRGx3FJvhNgFbRk8C5kr9
//7GdQSEHKY3fjppNm3U5uRFZVURmcGQhKqbr2wqr49hyX

//const link = getExplorerLink("address", tokenMint.toString(), "devnet");

// console.log(`✅ Finished! Created token mint: ${link}`);