// 120883 로그인 성공?

// 아이디와 패스워드가 담긴 배열 id_pw와
// 회원들의 정보가 담긴 2차원 배열 db가 주어질 때,
// 다음과 같이 로그인 성공, 실패에 따른 메시지를 return

// 아이디와 비밀번호가 모두 일치하는 회원정보가 있으면
// "login"을 return합니다.

// 로그인이 실패했을 때 아이디가 일치하는 회원이 없다면 “fail”를,
// 아이디는 일치하지만 비밀번호가 일치하는 회원이 없다면 “wrong pw”를 return
function solution(id_pw, db) {
  let answer = "";
  const mapDb = new Map(db);
  if (mapDb.has(id_pw[0])) {
    console.log(id_pw[0]);
    const dbPw = mapDb.get(id_pw[0]);
    if (id_pw[1] == dbPw) answer = "login";
    else answer = "wrong pw";
  } else {
    answer = "fail";
  }
  return answer;
}
