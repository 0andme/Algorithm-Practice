#### 큐(Queue)

- 가장 **먼저 넣은** 데이터를 가장 **먼저 꺼낼 수 있는** 구조 FIFO 구조
- LIFO구조인 스택과는 반대구조
- 순서대로 처리해야하는 작업을 임시로 저장하는 버퍼로 많이 쓰임
- 배열의 가장 맨 앞의 값 꺼내기

#### 자바스크립트로 구현

```js
queueList = [];
// 데이터 넣는 함수
const enQueue = (data) => {
  queueList.push(data);
};
// 데이터 뺴는 함수
const deQueue = (data) => {
  queueList.shift(data);
};
```
