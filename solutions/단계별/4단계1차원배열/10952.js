const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  if (line === "0 0") {
    rl.close();
  } else input.push(line.split(" ").map(Number));
}).on("close", function () {
  input.forEach((data) => console.log(data[0] + data[1]));
});
