## State

- **props**는 **함수 매개변수**와 같이 **컴포넌트**에 전달
- **state**는 **함수 내에 선언된 변수**처럼 **컴포넌트 안**에서 관리
- props가 있음에도 state 사용 이유 → 사용하는 쪽, 구현하는 쪽을 철저하게 분리 : 편하게 사용하기 위함
- 렌더링 결과물에 영향을 주는 정보로 렌더링 결과물에 영향을 줌

- 컴포넌트 내부에서 바뀔 수 있는 값
    - 클래스형 컴포넌트가 가지고 있는 state
    - 함수형 컴포넌트에서 useState라는 함수를 통해 사용하는 state

### 클래스형 컴포넌트의 state

- 컴포넌트에 state 설정 시 다음과 같이 construnctor 메서드 작성

```jsx
constructor(props) {
    super(props);
      this.state={
      Subject:{title:'WEB',sub:'월드와이드웹!'}
    }
```

- 컴포넌트의 생성자 메서드
- construnctor() 함수가 컴포넌트 초기화
- render() 함수보다 먼저 작성함.
    - 컴포넌트의 생성자에서 super 호출 이전에는 this 사용이 불가

- state 초기값 설정시 constructor 메서드 없이도 간편하게 설정 가능

```jsx
state = {
        number: 0
    }
```

App 클래스 내부에서는 중괄호를 이용해 state를 조회함

`title={this.state.subject.title}`

### 함수형 컴포넌트

- useState 사용

`import React, { useState } from ‘react’;`

import문으로 useState를 불러오기

`const [message, setMessage] = useState(’초기값’);`

message → 현재 상태 저장

setState → state를 바꾸어주는 setter 함수 

→ message에는 ‘초기값’이라는 문자열이 들어갈 것이고, setMessage는 이에 대한 state 값을 변경하는 함수가 됨.