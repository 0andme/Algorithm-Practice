function solution(id_list, report, k) {
  let answer = new Map(id_list.map((name) => [name, 0]));
  // 신고 받은 횟수 ,신고한 유저가 이용정지 된 횟수 저장할 map
  let reportNum = new Map(id_list.map((name) => [name, 0]));
  // report의 중복 제거 및 신고한,신고받은 유저 구분
  report = [...new Set(report)].map((data) => data.split(" "));
  // 신고 횟수 카운트
  report.forEach((data) => {
    reportNum.set(data[1], reportNum.get(data[1]) + 1);
  });
  // 신고자가 신고한 사람이 이용정지 인지 확인
  report.forEach((data, i) => {
    if (reportNum.get(data[1]) >= k) {
      answer.set(data[0], answer.get(data[0]) + 1);
    }
  });

  return [...answer].map((data) => data[1]);
}
