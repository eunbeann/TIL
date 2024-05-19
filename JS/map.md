# Map

- 키-값 쌍과 키의 원래 삽입 순서를 기억함.
- 모든 값은 키 or 값으로 사용될 수 있음.

### 설명

1. Map에서는 오직 **`단 하나의 키`**만 존재 [ map 집합의 유일성 ]
2. Map 객체는 키-값 쌍으로 반복 됨. for…of 루프는 각 반복에 대해 [key, value]로 이루어진 멤버가 2개인 배열을 반환함.
3. 반복은 삽입한 순서대로 발생
   1. set() 메서드로 맵에 처음 삽입한 각각의 키-값쌍 순서와 대응 됨.
      1. set이 호출되었을 때 맵에서 해당 키가 없었을 경우
4. Map의 명세는 “평균적으로 집합 내 요소의 수에 따라 하위 선형인 접근 시간을 제공하는” 맵을 구현해야 함
   1. 복잡성이 O(N)보다 더 나은 경우 내부적으로 해시 테이블 (O(1) 룩업), 검색 트리 (O(log(N)) 룩업)

### 인스턴스 메서드

`.clear()`

- map 객체에서 모든 키-값 쌍을 제거 함.
  `.delete()`
- map 객체에
  해당 요소가 존재하며, 삭제되었을 경우 ⇒ true
  해당 요소가 존재하지 않는 경우 ⇒ false
  `.get()`
- 주어진 키에 해당하는 값을 반환하거나, 값이 없다면 ⇒ undefined
  `.has()`
- 주어진 키에 연관된 값이 Map 객체에 존재는지 여부를 불리언으로 반환
  `.set()`
- Map 객체에서 전달된 키의 값을 설정 함.
  Map 객체를 반환함.
  .
  `[@@iterator]()`
- 반복 가능 프로토콜을 구현하여 전개 구문과 for…of 루프 같은 반복이 필요한 대부분의 구문에서 맵을 사용하게 함.

```jsx
const map1 = new Map();

map1.set("0", "foo");
map1.set(1, "bar");

const iterator1 = map1[Symbol.iterator]();

for (const item of iterator1) {
  console.log(item);
}
// Expected output: Array ["0", "foo"]
// Expected output: Array [1, "bar"]
```

`.keys()`

- Map은 객체에 삽입된 순서에 따라 각 요소의 키를 포함하는 새로운 반복자를 반환
  `.values()`
- Map 객체에 삽입된 순서에 따라 각 요소의 값을 포함하는 새로운 반복자를 반환
  `.entries()`
- Map 객체에 삽입된 순서에 따라 [key, value] 두 개의 멤버 배열을 포함하는 새로운 반복자를 반환함.
  `.forEach`
- `Map` 객체에 존재하는 각 키-값 쌍에 대해 삽입 순서대로 `**callbackFn**`을 한 번씩 호출함.
- 만약 `forEach` 호출 시 `thisArgs` 매개변수가 있다면 각 콜백의 `this` 값으로 사용 됨

### 예제!!

- Map 객체 사용하기

  ```jsx
  const myMap = new Map();

  const keyString = "a string";
  const keyObj = {};
  const keyFunc = function () {};

  // 값 설정
  myMap.set(keyString, "value associated with 'a string'");
  myMap.set(keyObj, "value associated with keyObj");
  myMap.set(keyFunc, "value associated with keyFunc");

  console.log(myMap.size); // 3

  // 값 불러오기
  console.log(myMap.get(keyString)); // "value associated with 'a string'"
  console.log(myMap.get(keyObj)); // "value associated with keyObj"
  console.log(myMap.get(keyFunc)); // "value associated with keyFunc"

  console.log(myMap.get("a string")); // "value associated with 'a string'", 왜냐하면 keyString === 'a string'
  console.log(myMap.get({})); // undefined, 왜냐하면 keyObj !== {}
  console.log(myMap.get(function () {})); // undefined, 왜냐하면 keyFunc !== function () {}
  ```

- 배열 객체와의 관계

  ```jsx
  const kvArray = [
    ["key1", "value1"],
    ["key2", "value2"],
  ];

  // Use the regular Map constructor to transform a 2D key-value Array into a map
  const myMap = new Map(kvArray);
  console.log(myMap.get("key1")); // "value1"

  // Use Array.from() to transform a map into a 2D key-value Array
  console.log(Array.from(myMap)); // Will show you exactly the same Array as kvArray

  // A succinct way to do the same, using the spread syntax
  console.log([...myMap]);

  // Or use the keys() or values() iterators, and convert them to an array
  console.log(Array.from(myMap.keys())); // ["key1", "key2"]
  ```
