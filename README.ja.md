# JWS beta

## 機能
- Ed25519署名を使用したコンパクトなJSON Web Signature (JWS) フォーマットを実装
- JWSを操作するための `encode` および `decode` 関数を提供
- JWSトークンの生成、検証、内容確認を行うデモスクリプトを同梱

## 要件
本プロジェクトには、DenoやモダンWebブラウザなど、ESモジュールをサポートするJavaScriptランタイム環境が必要です。

## 使い方
JWS機能を使用するには、`JWS.js` ファイルから `JWS` モジュールをインポートします。

```javascript
import { JWS } from 'https://code4fukui.github.io/JWS/JWS.js';

const keys = Ed25519.generateKeyPair();
const payload = { /* your payload */ };
const jws = JWS.encode(payload, keys);
const verified = JWS.decode(jws);
```

`demo/` ディレクトリには、JWSトークンの生成、検証、内容確認の方法を示すサンプルスクリプトが含まれています。

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
