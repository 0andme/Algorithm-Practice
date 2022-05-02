process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  let res = "";
  for (let i = 0; i < b; i += 1) {
    for (let j = 0; j < a; j += 1) {
      res += "*";
    }
    res += "\n";
  }
  console.log(res);
});

//방법 2

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  const row = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});
