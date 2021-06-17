import { serve } from "https://deno.land/std@0.99.0/http/server.ts";
import { ServerRequest } from "https://deno.land/std@0.99.0/http/server.ts";
import { getCookies } from "https://deno.land/std@0.99.0/http/cookie.ts";

let request = new ServerRequest();
request.headers = new Headers();
request.headers.set("Cookie", "full=of; tasty=chocolate");

const cookies = getCookies(request);
console.log("cookies:", cookies);

const server = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of server) {
  req.respond({ body: "Hello World\n" });
}