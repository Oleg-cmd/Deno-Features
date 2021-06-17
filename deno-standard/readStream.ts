import { readerFromStreamReader } from "https://deno.land/std@0.99.0/io/mod.ts";
const res = await fetch("https://deno.land");
const file = await Deno.open("./deno.land.html", { create: true, write: true });

const reader = readerFromStreamReader(res.body!.getReader());
await Deno.copy(reader, file);
file.close();