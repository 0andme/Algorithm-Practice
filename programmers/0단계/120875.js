// 120875 평행
// 점 네 개의 좌표를 담은 이차원 배열  dots
// [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
// 주어진 네 개의 점을 두 개씩 이었을 때,
// 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return

function solution(dots) {
  const getInclination = ([[x1, y1], [x2, y2]]) =>
    x2 !== x1 ? (y2 - y1) / (x2 - x1) : Infinity;
  const isParallel = (line1, line2) =>
    getInclination(line1) === getInclination(line2);

  return dots.some((dot) => {
    const line1 = [dots[0], dot];
    const line2 = dots.filter((dot) => !line1.includes(dot));
    return isParallel(line1, line2);
  })
    ? 1
    : 0;
}
