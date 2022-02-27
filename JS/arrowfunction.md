## 화살표 함수(arrow function) 기본


- 함수표현식보다 단순하고 간결한 문법으로 함수 만들기

```jsx
let sum = function(a, b) {
	return a + b;
}
```

```jsx
let sum = (a,b) => a+b;
```

두 함수는 동일한 기능을 수행함.

`(a,b) ⇒ a+b` 는 인수 a와 b를 받는 함수로 실행되는 순간 표현식 a+b를 평가하고 그 결과를 반환함

1. 인수가 하나만 있다면 인수를 감싸는 괄호 생략 가능. (코드 길이 더 줄이기 가능 ! )

```jsx
let double = n => n * 2;
// let double = function(n) { return n * 2 }과 거의 동일합니다.

alert( double(3) ); // 6
```

1. 인수가 하나도 없을 경우 괄호 비우기 가능 / 생략은 불가능

```jsx
let sayHi = () => alert("안녕하세요!");

sayHi();
```