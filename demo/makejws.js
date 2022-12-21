import { CBOR } from "https://js.sabae.cc/CBOR.js";
import { JWS } from "../JWS.js";

const keys = CBOR.decode(await Deno.readFile("keypair.cbor"));

const iat = Math.floor(Date.now() / 1000); // created date time
const exp = Math.floor(Date.now() / 1000 + (400 * 24 * 60 * 60)); // expire date time (+400days)
const iss = "fukuno.jig.jp";
const payload = { iat, exp, iss };

const jws = JWS.encode(payload, keys);
console.log(jws);

await Deno.writeTextFile("test.jws.json", JSON.stringify(jws, null, 2));
