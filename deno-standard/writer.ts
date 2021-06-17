import {
    copyN,
    StringReader,
    StringWriter,
  } from "https://deno.land/std@0.99.0/io/mod.ts";
  
const w = new StringWriter("base");
const r = new StringReader("0123456789");
await copyN(r, w, 4); // copy 4 bytes
  
  // Number of bytes read
console.log(w.toString()); //base0123
  
await Deno.copy(r, w); // copy all
console.log(w.toString()); // base0123456789