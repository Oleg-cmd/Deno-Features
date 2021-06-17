import { writerFromStreamWriter } from "https://deno.land/std@0.99.0/io/mod.ts";
const file = await Deno.open("./deno.land.html", { read: true });

const writableStream = new WritableStream({
  write(chunk): void {
    console.log(chunk);
  },
});
const writer = writerFromStreamWriter(writableStream.getWriter());
await Deno.copy(file, writer);
file.close();