const path = require("path");

const hook = "./scripts/force-next-wasm.cjs";
const nodeOptions = process.env.NODE_OPTIONS || "";

if (!nodeOptions.includes(hook)) {
  process.env.NODE_OPTIONS = `${nodeOptions} --require=${hook}`.trim();
}

require(path.join(__dirname, "force-next-wasm.cjs"));
require(path.join(__dirname, "..", "node_modules", "next", "dist", "bin", "next"));
