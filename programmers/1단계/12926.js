function solution(s, n) {
  return s
    .split("")
    .map((char) => {
      if (char === " ") {
        return " ";
      } else {
        let num = char.charCodeAt(0) + n;
        if (char >= "A" && char <= "Z") {
          if (num > "Z".charCodeAt(0)) {
            num -= 26;
          }
        } else if (char >= "a" && char <= "z") {
          if (num > "z".charCodeAt(0)) {
            num -= 26;
          }
        }
        return String.fromCharCode(num);
      }
    })
    .join("");
}
