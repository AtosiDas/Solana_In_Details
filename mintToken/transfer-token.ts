import { Connection, Keypair, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";
const connection = new Connection(clusterApiUrl("devnet"));

const sender = Keypair.fromSecretKey(Uint8Array.from([
    125,  57,  21,  39, 225, 121, 183, 198,  73, 123, 201,
     29,  33,  14, 213, 114,  87, 122, 209, 220,  37, 205,
    153,   0, 129, 104, 216,  33,  84, 154, 187,  41, 191,
    109,  28, 164, 188, 210,  96, 163, 216, 121, 212, 120,
    197, 169, 247,   2,   0, 147, 236, 250, 196, 127, 199,
    136,  38, 110, 148, 188, 131, 131, 177,  63
  ]));
  console.log(
    `🔑 Loaded our keypair securely, using an env file! Our public key is: ${sender.publicKey.toBase58()}`
  );

  // Add the recipient public key here.
const recipient = new PublicKey("B4jPdpRDKCZzF1oc6ZL3g3JjYfibmYTtGidVumLkciUm");

// Subtitute in your token mint account
const tokenMintAccount = new PublicKey("7GdQSEHKY3fjppNm3U5uRFZVURmcGQhKqbr2wqr49hyX");

// Our token has two decimal places
const MINOR_UNITS_PER_MAJOR_UNITS = Math.pow(10, 2);

console.log(`💸 Attempting to send 1 token to ${recipient.toBase58()}...`);

// Get or create the source and destination token accounts to store this token
const sourceTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    sender,
    tokenMintAccount,
    sender.publicKey
  );

  console.log(sourceTokenAccount);
  const destinationTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    sender,
    tokenMintAccount,
    recipient
  );
console.log(destinationTokenAccount);
  // Transfer the tokens
const signature = await transfer(
    connection,
    sender,
    sourceTokenAccount.address,
    destinationTokenAccount.address,
    sender,
    1 * MINOR_UNITS_PER_MAJOR_UNITS
  );
 console.log(signature); 