const fs = require("fs");
let input = fs.readFileSync("./0_data.txt").toString();
// let input=fs.readFileSync('/dev/stdin').toString()
input = Number(input);
if (input > 89) console.log("A");
else if (input > 79) console.log("B");
else if (input > 69) console.log("C");
else if (input > 59) console.log("D");
else console.log("F");
