// import { Keypair } from "@solana/web3.js";

// const keypair = Keypair.generate();

// console.log(`The public key is: `, keypair.publicKey.toBase58());
// console.log(`The secret key is: `, keypair.secretKey);
// console.log(`✅ Finished!`);

//import "dotenv/config"
import { Keypair } from "@solana/web3.js"; 
const keypair = Keypair.fromSecretKey(Uint8Array.from([
  125,  57,  21,  39, 225, 121, 183, 198,  73, 123, 201,
   29,  33,  14, 213, 114,  87, 122, 209, 220,  37, 205,
  153,   0, 129, 104, 216,  33,  84, 154, 187,  41, 191,
  109,  28, 164, 188, 210,  96, 163, 216, 121, 212, 120,
  197, 169, 247,   2,   0, 147, 236, 250, 196, 127, 199,
  136,  38, 110, 148, 188, 131, 131, 177,  63
]));

//const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`
);

console.log(keypair.publicKey.toBase58());