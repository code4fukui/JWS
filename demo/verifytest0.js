import { Base64URL } from "https://js.sabae.cc/Base64URL.js";
import { Base64 } from "https://js.sabae.cc/Base64.js";
import Ed25519 from "https://taisukef.github.io/forge-es/lib/ed25519.js";

const dec = (s) => new TextDecoder().decode(Base64URL.decode(s));

const keys = Ed25519.generateKeyPair();
console.log(keys);

const spubkey = "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEKY/2QKid9XCTRWCusDHUddgjWUTskYpY2wjWcgZ6vVfBlYRL0UhyLGbgBpucjGGjRAYoWRvn83f+GhAfiqmydw==";
const sprikey = "MEECAQAwEwYHKoZIzj0CAQYIKoZIzj0DAQcEJzAlAgEBBCBfWNacqAsGHMnGbWiZXR81mRvB4w/Icva0jGFPduwBxQ==";
const pubkey = Base64.decode(spubkey);
const prikey = Base64.decode(sprikey);
console.log(pubkey, prikey, dec(spubkey), dec(sprikey));


const org = "eyJhbGciOiJFUzI1NiIsImtpZCI6IktleSBJRCJ9.eyJpYXQiOjE1ODczNDk1MjcsImlzcyI6ImppbmhvLnNoaW4ifQ.MEUCIGncUpdRpxO9glZi7aKrzXa06DFrWIfxPtEL7kLxcHtWAiEAqenTrf-nD8EucxhJBrBpZw5IuTDFxK1rtv20nF5SYZk";
const ss = org.split(".");
const header = dec(ss[0]);
const payload = dec(ss[1]);
const sig = Base64URL.decode(ss[2]);
console.log(header);
console.log(payload);
console.log(sig);
