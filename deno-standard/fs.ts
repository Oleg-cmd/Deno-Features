import {
    exists,
    existsSync,
  } from "https://deno.land/std@0.99.0/fs/mod.ts";
import { move, moveSync } from "https://deno.land/std@0.99.0/fs/mod.ts";
import { copy, copySync } from "https://deno.land/std@0.99.0/fs/mod.ts";


//exists
exists("./foo"); // returns a Promise<boolean>
existsSync("./foo"); // returns boolean


// move
move("./foo", "./bar"); // returns a promise
moveSync("./foo", "./bar"); // void
moveSync("./foo", "./existingFolder", { overwrite: true });

// copy

copy("./foo", "./bar"); // returns a promise
copySync("./foo", "./bar"); // void
copySync("./foo", "./existingFolder", { overwrite: true });