function solution(a, b) {
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const now = new Date(`2016-${a}-${b}`);
  return week[now.getDay()];
}
