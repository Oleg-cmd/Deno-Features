import * as log from "https://github.com/denoland/deno_std/blob/v0.20.0/log/mod.ts";

log.debug("Hello world");
log.info(123456);
log.warning(true);
log.error({ foo: "bar", fizz: "bazz" });
log.critical("500 Internal server error");

let logger

// get default logger.
logger = log.getLogger();
logger.debug("fizz"); // logs to `console`, because `file` handler requires "WARNING" level.
logger.warning(41256); // logs to both `console` and `file` handlers.

// get custom logger
logger = log.getLogger("tasks");
logger.debug("fizz"); // won't get output because this logger has "ERROR" level.
logger.error({ productType: "book", value: "126.11" }); // log to `console`.