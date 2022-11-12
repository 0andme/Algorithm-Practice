> hash table

- key와 value를 저장하는 데이터 구조
- 키를 통해 데이터를 받아올 수 있으므로 속도가 굉장히 빨라짐
- 데이터를 찾는데 시간 복잡도가 O(1)이다
- 자바스크립트의 `map`이나 `Object {}` 가 해시 테이블의 일종이다.
- 키 값으로 문자열과 숫자를 포함한 모든 자료형 가능

> Map

[MDN Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

**메서드 종류**

- 키 값 추가 set(키,값)
- 값 가져오기 get(키)
- 키값묶음 개수 출력 size
- 키 값 있는지 확인 has(키)
- 키값 데이터 삭제 delete(키)
- 키,값 쌍으로 함께 접근 할 수 있는 entries
- entries.next().value를 통해 각 키값에 접근가능
- keys() 데이터의 키값만 모아 {} 에 담아 리턴
- values() 데이터의 값만 모아 {} 에 담아 리턴
- entries() 데이터를 {} 에 담아 리턴

**Q. 이차원 배열에 바로 위의 메소드가 먹히던가?**
A. 안 먹힘. new Map()안에 배열 넣자. 이때 2차원 배열을 풀어서 넣으면 안됌

**Q. 키 값이 있는지 없는지..확인할 때 어떤 조건문을 쓰는게 좋지?**
A. `has` 메서드 쓰자

**Q. set메서드 대신 바로 값 넣으려고 하면 어떻게 되나**
A. get으로 값을 가져올 때 해당 값을 가지고 오지 못함. 키를 올바르게 인식하지 못함. 아래는 예제.
키값을 문자열로 넣었는데 문자열 형태의 키값이 들어가있지 못함. 그래서 해당 키로 값을 찾으면 못 찾음

```js
const wrongMap = new Map();
wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";
console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }

wrongMap.has("bla"); // false
wrongMap.delete("bla"); // falses
console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

> Object

[MDN Object](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Basics)

- Object 또한 키와 값의 형태로 데이터를 저장
- 키는 유니크 하다.
- 키 값으로는 문자열, 심볼, 숫자만 가능하다.
- Map은 데이터의 순서를 보장하는 반면, Object는 데이터의 순서가 보장되지 않는다(순서가 무의미)

```js
// 선언 방식
let obj = {};
let obj2 = new object();
```
