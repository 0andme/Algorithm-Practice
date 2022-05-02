function solution(s) {
  const Numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  Numbers.forEach((name, i) => {
    const regexp = new RegExp(`${name}`, "g");
    s = s.replace(regexp, i);
  });
  return Number(s);
}
