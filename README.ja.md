# JWS beta

JWSは、JSONWeb Signatureの簡易実装です。JWSを使用してデータの署名・検証ができます。

## デモ
JWSの検証デモページがあります。JWSファイルをドロップすると、検証結果が表示されます。
https://code4fukui.github.io/JWS/

## 機能
- JWSの生成と検証
- Ed25519署名アルゴリズム

## 必要環境
- Deno 1.24以降

## 使い方
Denoでインポートして使用できます。
```javascript
import { JWS } from "https://code4fukui.github.io/JWS/JWS.js";

const keys = Ed25519.generateKeyPair();
const payload = { iat: 1671635300, exp: 1706195300, iss: "fukuno.jig.jp" };
const jws = JWS.encode(payload, keys);
console.log(jws);

const verified = JWS.decode(jws);
console.log(verified);
```

## ライセンス
MIT License