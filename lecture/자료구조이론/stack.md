#### Stack

- 한쪽 끝에서만 자료를 넣거나 뺼수 있는 구조
- 가장 **나중에 넣은** 데이터를 가장 **먼저 뺼 수 있는** 구조 = LIFO 구조
- 배열의 가장 맨 뒤의 값 꺼내기

#### 재귀 함수와의 관계성

재귀함수는
가장 먼저 호출된 리턴값이 마지막으로 나옴
마지막에 호출된 함수의 리턴값이 가장 먼저 나옴
이는 스택 구조와 유사.

#### 자바스크립트로 구현

```js
stackList = [];
// 데이터 넣는 함수
const push = (data) => {
  queueList.push(data);
};
// 데이터 뺴는 함수
const pop = (data) => {
  queueList.pop(data);
};
```
