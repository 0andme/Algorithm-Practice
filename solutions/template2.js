const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  console.log(sol(input));
  process.exit();
});

function sol(input) {
  c;
}
