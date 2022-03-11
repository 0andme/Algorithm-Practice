const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const numX = Number(input[0]);
  const numY = Number(input[1]);

  if (numX > 0) {
    if (numY > 0) {
      console.log(1);
    } else {
      console.log(4);
    }
  } else {
    if (numY > 0) {
      console.log(2);
    } else {
      console.log(3);
    }
  }
  process.exit();
});
