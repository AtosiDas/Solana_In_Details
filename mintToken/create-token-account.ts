import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token";
import { Connection, Keypair, PublicKey, clusterApiUrl } from "@solana/web3.js";
const connection = new Connection(clusterApiUrl("devnet"));

const user = Keypair.fromSecretKey(Uint8Array.from([
    125,  57,  21,  39, 225, 121, 183, 198,  73, 123, 201,
     29,  33,  14, 213, 114,  87, 122, 209, 220,  37, 205,
    153,   0, 129, 104, 216,  33,  84, 154, 187,  41, 191,
    109,  28, 164, 188, 210,  96, 163, 216, 121, 212, 120,
    197, 169, 247,   2,   0, 147, 236, 250, 196, 127, 199,
    136,  38, 110, 148, 188, 131, 131, 177,  63
  ]));
  
  
  console.log(
    `🔑 We've loaded our keypair securely, using an env file! Our public key is: ${user.publicKey.toBase58()}`
  );

// Subtitute in your token mint account from create-token-mint.ts
const tokenMintAccount = new PublicKey(
    "7GdQSEHKY3fjppNm3U5uRFZVURmcGQhKqbr2wqr49hyX"
  );

 // console.log(tokenMintAccount);
// Here we are making an associated token account for our own address, but we can 
// make an ATA on any other wallet in devnet!
// const recipient = new PublicKey("SOMEONE_ELSES_DEVNET_ADDRESS");
const recipient = user.publicKey;
//console.log(recipient);
const tokenAccount = await getOrCreateAssociatedTokenAccount(
  connection,
  user,
  tokenMintAccount,
  recipient
);
//console.log(tokenAccount);
console.log(`Token Account: ${tokenAccount.address.toBase58()}`);
//Token account: C61AfNFo1hREcNean8UvCnmDPH7aHojy9uWotACpa6wB