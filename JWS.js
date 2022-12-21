import { Base64URL } from "https://js.sabae.cc/Base64URL.js";
import Ed25519 from "https://taisukef.github.io/forge-es/lib/ed25519.js";

const dec = (s) => new TextDecoder().decode(Base64URL.decode(s));
const enc = (json) => new TextEncoder().encode(JSON.stringify(json));

const encode = (payload, keys) => {
  const spayload = Base64URL.encode(enc(payload));
  const protect = Base64URL.encode(enc({ alg: "ES256" }));
  const message = new TextEncoder().encode(protect + "." + spayload);
  const signature = Base64URL.encode(Ed25519.sign({ privateKey: keys.privateKey, message, encoding: "binary" }));
  const header = {
    publicKey: Base64URL.encode(keys.publicKey),
    encoder: "https://github.com/code4fukui/JWS/",
  };  
  const jws = {
    header,
    protected: protect,
    payload: spayload,
    signature,
  };
  return jws;
};

const decode = (jws) => {
  const header = jws.header;
  const publicKey = Base64URL.decode(header.publicKey);
  const payload = JSON.parse(dec(jws.payload));
  const protect = JSON.parse(dec(jws.protected));
  if (protect.alg != "ES256") {
    throw new Error("unsupported alg:" + protect.alg);
  }
  const signature = Base64URL.decode(jws.signature);
  const message = jws.protected + "." + jws.payload;
  //console.log({ header, payload, protect, signature, message });
  
  const chk = Ed25519.verify({ signature, publicKey, message, encoding: "binary" });
  if (!chk) {
    throw new Error("can't verify");
  }
  return payload;
};

export const JWS = {
  encode,
  decode,
};
