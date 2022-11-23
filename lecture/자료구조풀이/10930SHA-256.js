// 10930 SHA-256
const fs = require("fs");
const crypto = require("crypto");

const input = fs
  .readFileSync("./10930SHA-256.txt")
  .toString()
  .trim()
  .split("\n");

const str = input[0];
const hashed = crypto.createHash("sha256").update(str).digest("hex");

console.log(hashed);
