<aside>
💬 **리액트를 위한 상태 관리 라이브러리**

</aside>

## 특징

- React 문법 친화적

```jsx
const [data, setData] = useRecoilState(datas);
```

- 전역 상태 값도 React의 state 처럼 간단한 get/set 인터페이스로 사용할 수 있는 boilerplate-free API를 제공함.
  - **boilerplate-free**
    - 프로그래밍에서 반복적이고 지루한 작업을 줄이고 코드의 재사용성을 높이기 위한 개념
    - **`boilerplate`**
      - 반복적으로 작성되는 코드
        `[EX}`
        - 설정 파일의 생성
        - 초기화 코드 작성
        - 인터페이스 구현
        - 주로 비슷한 패턴을 가지며 문법적인 요구 사항을 충족시키기 위함
          -
    - 개발자가 반복적인 작업을 줄이고 코드를 간결하게 유지할 수 있도록 함. 이를 위해 여러 가지 기술 패턴이 사용될 수 있다.
    - **보일러플레이트 코드를 제거하면**
      - 코드의 가독성과 유지보수성이 향상될 수 있음
      - 개발자는 중요한 비즈니스 로직에 집중할 수 있으며 새로운 기능을 더 빠르게 개발할 수 있음.
    ```jsx
    public class Person {
        private String name;
        private int age;

        public Person(String name, int age) {
            this.name = name;
            this.age = age;
        }

        // Getter와 Setter 메서드
        // ...
    }
    ```
    ```jsx
    public record Person(String name, int age) {
        // 필드 정의만으로 생성자, Getter, equals(), hashCode(), toString() 메서드 자동 생성
        // ...
    }
    ```
- React와 개발 방향성이 같음
  - 동시성 모드(Concurrent Mode)를 비롯한 다른 새로운 React의 기능들과 호환 가능성도 가짐
- 간단한 비동기 처리
  - 추가 라이브러리 없이 간단하게 가능함.
  - 내부적인 캐싱
    - 동일한 atom 값에 대해 내부적으로 메모이즈된 값을 반환하여 속도가 빠름

### 사용하기

```jsx
yarn add recoil
```

- ES6에서 사용되는 것이 권장됨

**RecoilRoot**

- 컴포넌트에서 Recoil state를 사용하기 위해서는 recoil 상태를 사용하고자 하는 컴포넌트 부모에 RecoilRoot 선언
- Recoil Root는 여러 개 선언 가능
  ```jsx
  // App.js
  import React from "react";
  import { RecoilRoot } from "recoil";

  const App = () => {
    return (
      <RecoilRoot>
        <CharacterCounter />
      </RecoilRoot>
    );
  };
  ```

**Atoms**

- state의 단위
  - `업데이트` `구독` 가능
  - atom 값을 읽는 컴포넌트들은 암묵적으로 atom을 구독함.
    - atom에 변화 발생시 구독하는 모든 컴포넌트가 리렌더링 됨
  - `key` `dfault` 값을 필수로 선언해주어야 함
    - `key`
      - 내부적으로 atom을 식별하는 데 사용되는 고유한 문자열
      - 어플리케이션 전체에서 다른 atom과 selector에 대해서 고유해야함.
        - 전역적으로 고유한 값을 가져야 해 $ 같은 구분자를 붙여 사용하기도 한다.
    - `default`
      - atom의 초깃값
      - 다양한 타입 사용 가능
      - 동일한 타입의 값을 나타내는 다른 atom이나 selector도 가능
    ```jsx
    // atoms.js
    import { atom } from "recoil";

    export const countState = atom({
      key: "countState", // 전역적으로 고유한 값
      default: 0, // 초깃값
    });
    ```
- **Atoms 사용하기**
  - atom을 읽고 쓰기 위해서는 `useRecoilState()` 사용
  - 기본 값 대신 RcoilState를 인자로 받는 것을 제외하면 useState와 상당히 유사!!
  - 상태 값과, setter 함수를 리턴
    - 이 hook은 암묵적으로 state를 구독함.
      ⇒ atom 값 변경 시 컴포넌트 자동 리렌더링
  ```jsx
  // Counter.js
  import React from "react";
  import { useRecoilState, useResetRecoilState } from "recoil";
  import { countState } from "../states/atoms";

  export const Counter = () => {
    const [count, setCount] = useRecoilState(countState);
    const resetCount = useResetRecoilState(countState);

    const increase = () => {
      setCount(count + 1);
    };

    const reset = () => {
      resetCount();
    };

    return (
      <div>
        <h2>{count}</h2>
        <button onClick={() => increase()}>+</button>
        <button onClick={() => reset()}>reset</button>
      </div>
    );
  };
  ```
- **atom 및 selector 사용과 관련된 주요 hooks**
  - `useRecoilState()`
    - atom을 `읽고` `쓰기` 위해 사용
    - 컴포넌트는 atom을 구독함
  - `useRecoilValue()`
    - atom을 `읽기만` 할 때 사용
    - 컴포넌트는 atom을 구독함
  - `useSetRecoilState()`
    - atom을 `쓰려고만` 할 때 사용.
  - `useResetRecoilState()`
    - atom을 **default 값으로 초기화** 할 때 사용

+`useSetRecoilState()`, `useResetRecoilState()` hook

⇒ state를 구독하지 않음.

⇒ 따라서 atom 값이 변경되더라도 해당 컴포넌트는 리렌더링이 발생하지 않음

⇒ state를 변경하기만 하고 읽지 않는 경우 리렌더링 방지를 위해 아래와 같이 작성 필요

```jsx
// bad
const [value, setValue] = useRecoilState(valueState);
setValue({ ...value, foo: "bar" });

// good
const setValue = useSetRecoilState(valueState);
setMenu((prevValue) => ({ ...prevValue, foo: "bar" }));
```
