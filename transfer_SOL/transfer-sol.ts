import { Connection, Keypair, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js"; 
const keypair = Keypair.fromSecretKey(Uint8Array.from([
  125,  57,  21,  39, 225, 121, 183, 198,  73, 123, 201,
   29,  33,  14, 213, 114,  87, 122, 209, 220,  37, 205,
  153,   0, 129, 104, 216,  33,  84, 154, 187,  41, 191,
  109,  28, 164, 188, 210,  96, 163, 216, 121, 212, 120,
  197, 169, 247,   2,   0, 147, 236, 250, 196, 127, 199,
  136,  38, 110, 148, 188, 131, 131, 177,  63
]));

console.log(keypair.publicKey.toBase58());

const suppliedToPubkey = process.argv[2] || null;

if (!suppliedToPubkey) {
  console.log(`Please provide a public key to send to`);
  process.exit(1);
}

console.log(`suppliedToPubkey: ${suppliedToPubkey}`)

console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`
);

const toPubkey = new PublicKey(suppliedToPubkey);

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const transaction = new Transaction();
const LAMPORTS_TO_SEND = 5000;

const sendSolInstruction = SystemProgram.transfer({
  fromPubkey: keypair.publicKey,
  toPubkey,
  lamports: LAMPORTS_TO_SEND,
});

transaction.add(sendSolInstruction);

const signature = await sendAndConfirmTransaction(connection, transaction, [
  keypair,
]);

console.log(
  `💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${toPubkey}. `
);
console.log(`Transaction signature is ${signature}!`);