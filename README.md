# JWS beta

## Demo
The `index.html` file provides a simple web-based JWS verifier.

## Features
- Implements a compact JSON Web Signature (JWS) format using Ed25519 signatures
- Provides `encode` and `decode` functions to work with JWS
- Includes demo scripts for generating, verifying, and inspecting JWS tokens

## Requirements
This project requires a JavaScript runtime environment that supports ES modules, such as Deno or a modern web browser.

## Usage
To use the JWS functionality, import the `JWS` module from the `JWS.js` file:

```javascript
import { JWS } from 'https://code4fukui.github.io/JWS/JWS.js';

const keys = Ed25519.generateKeyPair();
const payload = { /* your payload */ };
const jws = JWS.encode(payload, keys);
const verified = JWS.decode(jws);
```

The `demo/` directory contains sample scripts demonstrating how to generate, verify, and inspect JWS tokens.

## License
This project is licensed under the MIT License.