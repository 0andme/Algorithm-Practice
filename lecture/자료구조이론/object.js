const obj = new Object();

for (let i = 0; i < 8; i++) {
  console.log(obj[i % 4]);
  if (obj[i % 4] == undefined) {
    obj[i % 4] = 0;
  } else {
    obj[i % 4] = obj[i % 4] + 3;
  }
}

console.log(obj);
