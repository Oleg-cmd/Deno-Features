import { deferred } from "https://deno.land/std/async/mod.ts";

const p = deferred<number>();

p.resolve(42);

console.log(p)