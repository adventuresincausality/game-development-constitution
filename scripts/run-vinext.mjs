import { spawn } from "node:child_process";
import path from "node:path";

const command = process.argv[2] ?? "dev";
const bin = path.resolve("node_modules", "vinext", "dist", "cli.js");

const child = spawn(process.execPath, [bin, command], {
  env: {
    ...process.env,
    WRANGLER_LOG_PATH: ".wrangler/wrangler.log",
  },
  stdio: "inherit",
  shell: false,
});

child.on("exit", (code) => process.exit(code ?? 1));
