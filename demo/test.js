import { Base64URL } from "https://js.sabae.cc/Base64URL.js";

const dec = (s) => new TextDecoder().decode(Base64URL.decode(s));

const data = JSON.parse(await Deno.readTextFile("./test.jws.json"));
console.log(data);
console.log(dec(data.payload));
console.log(dec(data.protected));
console.log(Base64URL.decode(data.signature));
