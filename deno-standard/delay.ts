import { delay } from "https://deno.land/std/async/mod.ts";

// ...
const delayedPromise = delay(100);
const result = await delayedPromise;