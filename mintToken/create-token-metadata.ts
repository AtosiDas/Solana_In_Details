import { Connection, Keypair, PublicKey, Transaction, clusterApiUrl, sendAndConfirmTransaction } from "@solana/web3.js";
import { createCreateMetadataAccountV3Instruction } from "@metaplex-foundation/mpl-token-metadata";
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

  const TOKEN_METADATA_PROGRAM_ID = new PublicKey(
    "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
  );

// Subtitute in your token mint account
const tokenMintAccount = new PublicKey("7GdQSEHKY3fjppNm3U5uRFZVURmcGQhKqbr2wqr49hyX");

const metadataData = {
  name: "Solana Training Token",
  symbol: "TRAINING",
  // Arweave / IPFS / Pinata etc link using metaplex standard for off-chain data
  uri: "https://arweave.net/1234",
  sellerFeeBasisPoints: 0,
  creators: null,
  collection: null,
  uses: null,
};

const metadataPDAAndBump = PublicKey.findProgramAddressSync(
  [
    Buffer.from("metadata"),
    TOKEN_METADATA_PROGRAM_ID.toBuffer(),
    tokenMintAccount.toBuffer(),
  ],
  TOKEN_METADATA_PROGRAM_ID
);

const metadataPDA = metadataPDAAndBump[0];

const transaction = new Transaction();
const createMetadataAccountInstruction =
  createCreateMetadataAccountV3Instruction(
    {
      metadata: metadataPDA,
      mint: tokenMintAccount,
      mintAuthority: user.publicKey,
      payer: user.publicKey,
      updateAuthority: user.publicKey,
    },
    {
      createMetadataAccountArgsV3: {
        collectionDetails: null,
        data: metadataData,
        isMutable: true,
      },
    }
  );
  transaction.add(createMetadataAccountInstruction);
  const transactionSignature = await sendAndConfirmTransaction(
    connection,
    transaction,
    [user]
  );
  
console.log(`✅ Transaction confirmed, signature is: ${transactionSignature}!`);

console.log(`✅ Look at the token mint again: ${tokenMintAccount.toString()}!`);