# Array.prototype.map()

## 개념

- map() 메서드는
  **`배열 내의 모든 요소 각각`**에 대해서
  주어진 **`함수를 호출한 결과`**를 모아
  **`새로운 배열을 반환`** 함!

- 구문

  ```jsx
  arr.map(callback(currentValue[, index[, array]])[, thisArg])
  ```

  `callback`

  새로운 배열 요소를 생성하는 함수. 다음 세 가지 인수를 가집다.

  `currentValue`

  처리할 현재 요소.

  `index [Optional]`

  처리할 현재 요소의 인덱스.

  `array [Optional]`

  **map()**을 호출한 배열.

  `thisArg [Optional]`

  **callback**을 실행할 때 **this**로 사용되는 값.

- **MAP의 매개변수 직관적으로 이해하기**

  ```jsx
  const numbers = [1];

  numbers.map((number, index, source) => {
    // number: 요소값
    // index: source에서 요소의 index
    // source: 순회하는 대상

    console.log(number);
    // 1

    console.log(index);
    // 0

    console.log(source);
    // [1]

    return number * number;
  });
  ```

## 예시

- **간단한 예제 1**
  배열에 들어있는 숫자들의 제곱근을 구해 새로운 배열 만들기

  ````jsx
  var numbers = [1, 4, 9];
  var roots = numbers.map(Math.sqrt);

      // roots는 [1, 2, 3]
      // numbers는 그대로 [1, 4, 9]
      ```

  ````

- **간단한 예제 2**
  index 가 짝수인 값들만 객체 배열에서 뽑아내기

  ````jsx
  const data = [
  {id: 0, name: '홍길동', age: 10},
  {id: 1, name: '강호동', age: 20},
  {id: 2, name: '유재석', age: 30},
  {id: 3, name: '이효리', age: 40},
  {id: 4, name: '장채연', age: 50}
  ];

      data.map((item, index) => {
          if(index % 2 == 0) {
              console.log(item);
          }
      });

      // 출력 결과
      //{id: 0, name: '홍길동', age: 10}
      //{id: 2, name: '유재석', age: 30}
      //{id: 4, name: '장채연', age: 50}
      ```
  ````

## 참고 링크

🔗 : **[Array.prototype.map() - JavaScript - MDN Web Docs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)**

🔗 : **[[ JavaScript ] 자바스크립트 map( ) 함수 - 애송이의 코딩이야기](https://mjn5027.tistory.com/80)**

🔗: **[배열과 메서드 - 모던 JavaScript 튜토리얼](https://ko.javascript.info/array-methods)**
