# 단축 평가

### 단축 평가 (short-circuit evaluation)

- 특정 변수에서 값이 제대로 주어졌을 때만 그 값을 조회하고, 그렇지 않을 때에는 undefined를 반환하게 하려면?
-

```jsx
//본 코드

const dog = {
  name: "멍멍이",
};

function getName(animal) {
  return animal.name;
}

const name = getName(dog);
console.log(name); // 멍멍이
```

```jsx
// 제대로 된 객체가 주어지지 않은 코드

const dog = {
  name: "멍멍이",
};

function getName(animal) {
  return animal.name;
}

const name = getName();
console.log(name);
```

![스크린샷 2023-10-30 20.59.19.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7ad86236-f6d6-4580-b6eb-a551d5eb5146/ff6d4ead-a2a7-47a7-bfd8-bfc9e2f0ffdf/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-10-30_20.59.19.png)

당연히 에러 발생

```jsx
const dog = {
  name: "멍멍이",
};

function getName(animal) {
  if (animal) {
    return animal.name;
  }
  return undefined;
}

const name = getName();
console.log(name);
```

animal 값이 없어도 에러 발생하지 않음 위 코드를 줄여보자

### && 연산자로 코드 단축

```jsx
const dog = {
  name: "멍멍이",
};

function getName(animal) {
  return animal && animal.name;
}

const name = getName();
console.log(name); // undefined
```

⇒ 위가 작동하는 이유는 A && B 연산자를 사용하게 될 때에는 A가 Truthy한 값이라면, B가 결과값이 됨. A가 Falsy한 값이라면, 결과는 A가 됨

```jsx
console.log(true && "hello"); // hello
console.log(false && "hello"); // false
console.log("hello" && "bye"); // bye
console.log(null && "hello"); // null
console.log(undefined && "hello"); // undefined
console.log("" && "hello"); // ''
console.log(0 && "hello"); // 0
console.log(1 && "hello"); // hello
console.log(1 && 1); // 1
```

⇒ 특정 값이 유효할 때만 어떤 값을 조회하는 작업을 할 때 유용

## || 연산자로 코드 단축

- 어떤 값이 Falsy 하다면 대체로 사용할 값을 지정해 줄 때 유용

```jsx
const namelessDog = {
  name: "",
};

function getName(animal) {
  const name = animal && animal.name;
  if (!name) {
    return "이름이 없는 동물입니다";
  }
  return name;
}

const name = getName(namelessDog);
console.log(name); // 이름이 없는 동물입니다.
```

```jsx
const namelessDog = {
  name: "",
};

function getName(animal) {
  const name = animal && animal.name;
  return name || "이름이 없는 동물입니다.";
}

const name = getName(namelessDog);
console.log(name); // 이름이 없는 동물입니다.
```

- A || B 는 만약 A가 Truthy 할 경우 결과는 A가 됨.
  반면, A가 Falsy 하다면 결과는 B가 됨
