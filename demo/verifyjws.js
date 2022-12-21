import { JWS } from "../JWS.js";

const jws = JSON.parse(await Deno.readTextFile("test.jws.json"));
const payload = JWS.decode(jws);
console.log(payload);
