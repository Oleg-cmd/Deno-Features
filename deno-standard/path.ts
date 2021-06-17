import * as path from "https://deno.land/std@0.99.0/path/mod.ts";

// basename 
console.log(path.basename("./deno/std/path/mod.ts"))

// dirname 
console.log(path.dirname("./deno/std/path/mod.ts"))

// file type ( extname )
console.log(path.extname("./deno/std/path/mod.ts"))

// format
console.log(path.format({
    root: "/",
    dir: "/home/user/dir",
    ext: ".html",
    name: "index",
}))

// fromfiletourl
console.log(path.fromFileUrl("file:///home/foo"))

//join
console.log(path.join("foo", "bar"))

// normalize
console.log(path.normalize("/home/foo/bar/../hoge/./piyo"))

//parse 
console.log(path.parse("/home/user/dir/index.html"))

// toFileUrl
console.log(path.toFileUrl("/home/foo"))

//common
console.log(path.common([
    "./deno/std/path/mod.ts",
    "./deno/std/fs/mod.ts",
  ]))