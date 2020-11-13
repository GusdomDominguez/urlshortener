// create a config store ("foo.json") in the current working directory
console.log(process.cwd());
const store = require("data-store")({ path: process.cwd() + "/store.json" });
