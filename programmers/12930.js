function solution(s) {
  let res = s
    .split(" ")
    .map((word, i) => {
      let temp = "";
      word = word.split("");
      for (let i = 0; i < word.length; i += 1) {
        if (i % 2 === 0) temp += word[i].toUpperCase();
        else temp += word[i].toLowerCase();
      }
      return temp;
    })
    .join(" ");
  return res;
}

// 조금 더 간단하게
function solution(s) {
  return s
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((char, i) => (i % 2 ? char.toUpperCase() : char.toLowerCase()))
        .join("")
    )
    .join(" ");
}
