// 1764 듣보잡
const fs = require("fs");
const input = fs.readFileSync("./1764.txt").toString().trim().split("\n");
const [N, M] = input[0].split(" ");
let data = input.slice(1);
const noHear = new Set(data.splice(0, N));
const noSee = new Set(data);

let noSeeNoHear = [];
noSee.forEach((user) => {
  if (noHear.has(user)) {
    noSeeNoHear.push(user);
  }
});

noSeeNoHear.sort();
let answer = noSeeNoHear.length + "\n" + noSeeNoHear.join("\n");

console.log(answer);
