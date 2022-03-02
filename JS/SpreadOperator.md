# 전개 연산자(Spread Operator)

- ECMAScript6(2015)에서 새롭게 추가
- 특정 객체 또는 배열의 값을 다른 객체, 배열로 복제하거나 옮길 때 사용
- 연산자의 모양 `...`

### 배열 조합

```jsx
// 기존 방식

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [7,8,9];

const arrwrap = arr1.concat (arr2, arr3));

conosole.log(arrwrap); // [1,2,3,4,5,6,7,8,9]
```

```jsx
// 전개 연산자

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [7,8,9];
const arrwrap = [...arr1, ...arr2, ...arr3]

conosole.log(arrwrap); // [1,2,3,4,5,6,7,8,9]
```

```jsx
// 기존 방식

const arr1 = [1,2,3];
const arr2 = [4,5];
Array.prototye.push.apply(arr1, arr2)

conosole.log(arr1); // [1,2,3,4,5]
```

```jsx
// 전개 연산자

const arr1 = [1,2,3];
const arr2 = [4,5];
const arrwrap = [...arr2]

conosole.log(arr1); // [1,2,3,4,5]
```

### 객체 조합

```jsx
object obj1 = {
	a : 'A',
	b : 'B'
};

object obj1 = {
	a : 'C',
	b : 'D'
};

const onjwrap = { obj1, obj2 };
console.log(onjwrap);
```

```jsx

{
	object obj1 = {
		a : 'A',
		b : 'B'
	},
	object obj1 = {
		a : 'C',
		b : 'D'
	}
}

// 객체 자체가 들어감
```

아래처럼 전개 연산자 사용 시 객체 자체가 아닌 각각의 값이 할당 됨

```jsx
object obj1 = {
	a : 'A',
	b : 'B'
};

object obj1 = {
	a : 'C',
	b : 'D'
};

const onjwrap = { obj1, obj2 };
console.log(onjwrap);
```

```jsx
{
	a:'A',
	b:'B',
	c:'C',
	d:'D'
}
```

### 기존의 배열 보존

```jsx
const arr1 = [1,2,3];
const arr2 = arr1.reverse();

console.log(arr1); // [3,2,1]
console.log(arr2); // [3,2,1]

//원본배열까지 역순으로 변경 됨
```

```jsx
const arr1 = [1,2,3];
const arr2 = [...arr1].reverse();

console.log(arr1); // [1,2,3]
console.log(arr2); // [3,2,1]

//원본배열은 유지 됨
```