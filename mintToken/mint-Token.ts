import { mintTo } from "@solana/spl-token";

import { Connection, Keypair, PublicKey, clusterApiUrl } from "@solana/web3.js";
const connection = new Connection(clusterApiUrl("devnet"));

// Our token has two decimal places
const MINOR_UNITS_PER_MAJOR_UNITS = Math.pow(10, 2);

const user = Keypair.fromSecretKey(Uint8Array.from([
    125,  57,  21,  39, 225, 121, 183, 198,  73, 123, 201,
     29,  33,  14, 213, 114,  87, 122, 209, 220,  37, 205,
    153,   0, 129, 104, 216,  33,  84, 154, 187,  41, 191,
    109,  28, 164, 188, 210,  96, 163, 216, 121, 212, 120,
    197, 169, 247,   2,   0, 147, 236, 250, 196, 127, 199,
    136,  38, 110, 148, 188, 131, 131, 177,  63
  ]));

// Subtitute in your token mint account from create-token-mint.ts
const tokenMintAccount = new PublicKey(
    "7GdQSEHKY3fjppNm3U5uRFZVURmcGQhKqbr2wqr49hyX"
  );
// Substitute in your own, or a friend's token account address, based on the previous step.
const recipientAssociatedTokenAccount = new PublicKey(
    "C61AfNFo1hREcNean8UvCnmDPH7aHojy9uWotACpa6wB"
  );  

const transactionSignature = await mintTo(
    connection,
    user,
    tokenMintAccount,
    recipientAssociatedTokenAccount,
    user,
    10 * MINOR_UNITS_PER_MAJOR_UNITS
  );
console.log(transactionSignature);