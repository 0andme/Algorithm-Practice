function solution(participant, completion) {
  participant.sort();
  completion.sort();
  console.log(participant, completion);
  for (let i = 0; i < participant.length; i += 1) {
    if (completion[i] != participant[i]) {
      return participant[i];
    }
  }
}
