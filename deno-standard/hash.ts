import { createHash } from "https://deno.land/std@0.99.0/hash/mod.ts";

const hash = createHash("md5");
hash.update("Your data here");
const final = hash.digest(); // returns ArrayBuffer.

/* Supported alg
md2
md4
md5
ripemd160
ripemd320
sha1
sha224
sha256
sha384
sha512
sha3-224
sha3-256
sha3-384
sha3-512
keccak224
keccak256
keccak384
keccak512
*/