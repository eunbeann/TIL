## JS의 변수 선언 방식인 `var`, `let`, `const`의 차이점

### 1. 변수 선언 방식

- var
  - 함수 레벨의 스코프\*
  - 코드량이 많아졌을 경우 같은 이름의 변수명이 여러번 선언 되어, 문제 원인 파악이 어려움
    `*스코프 : 유효한 참조 범위`

|       | 변수 재선언 가능 | 변수 재할당 가능 (immutable) |
| ----- | ---------------- | ---------------------------- |
| var   | O                | O                            |
| const | X                | X                            |
| let   | X                | O                            |

### 정리

- `var`은 코드 꼬임, 의도하지 않은 변수 재할당 같은 이유로 거의 사용하지 않음.
- 기본적으로 `const` 사용
- 재할당이 필요한 경우에 한정하여 `let` 을 사용한다.
  - 이때, 변수의 스코프는 최대한 좁게 만들다.
  - 재할당이 필요 없는 상수와 객체에는 `const` 사용

### 🔗

[https://80000coding.oopy.io/e1721710-536f-43f2-823b-663389f5fbfa](https://80000coding.oopy.io/e1721710-536f-43f2-823b-663389f5fbfa)

[https://velog.io/@bathingape/JavaScript-var-let-const-차이점](https://velog.io/@bathingape/JavaScript-var-let-const-%EC%B0%A8%EC%9D%B4%EC%A0%90)
