import Ed25519 from "https://taisukef.github.io/forge-es/lib/ed25519.js";
import { CBOR } from "https://js.sabae.cc/CBOR.js";

const keys = Ed25519.generateKeyPair();
console.log(keys);
await Deno.writeFile("keypair.cbor", CBOR.encode(keys));
