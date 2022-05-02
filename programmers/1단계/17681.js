function solution(n, arr1, arr2) {
  let res = [];

  for (let i = 0; i < n; i += 1) {
    let line = "";
    let orData = (arr1[i] | arr2[i]).toString(2);
    orData = "0".repeat(n - orData.length) + orData;
    for (let j = 0; j < n; j += 1) {
      if (orData[j] === "1") line += "#";
      else line += " ";
    }
    res.push(line);
  }
  return res;
}

// 방법 2
function solution(n, arr1, arr2) {
  let res = [];

  for (let i = 0; i < n; i += 1) {
    let line = "";
    let orData = (arr1[i] | arr2[i]).toString(2);
    orData = "0".repeat(n - orData.length) + orData;
    orData = orData.replace(/1/g, "#");
    orData = orData.replace(/0/g, " ");
    // 프로그래머스는  replaceAll 지원 안 함
    // 한 줄로도 가능
    // orData=orData.replace(/1|0/g,a=>a==='1'?'#':' ')

    res.push(orData);
  }
  return res;
}
