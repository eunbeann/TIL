# useNavigate()

- 양식 제출되거나 특정 이벤트(행동) 발생시에 url를 조작할 수 있게함
  - 특정 이벤트 발생이라는 말이 너무 모호하게 느껴져서 와닿지가 않았다 ㅠ.ㅠ
  - 더 검색해보고 예시 찾아보기! 아래 예시로 이해가 됨

```jsx
import { useNavigate } from 'react-router-dom';

function Func() {
  const navigate = useNavigate();

  const onClickImg = () => {
    navigate(`/comment/id/등등 내가 원하는 주소`);
  };

  return (
  	<img src={...} alt={...} onClick={onClickImg} />
  );
}

export default Func;
```

```jsx
import { useNavigate } from "react-router-dom";
  const Login = () => {
	const navigate = useNavigate();
	return(
      <div className="login">
		<input placeholder="전화번호, 사용자 이름 또는 이메일"/>
        <input placeholder="비밀번호/>
        <button onClick={() => {navigate("/main");}}>로그인</button>
      </div>
	)
  }
```

```jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const goToMain = () => {
    if (response.message === "valid user") {
      navigate("/main");
    } else {
      alert("가입된 회원이 아닙니다. 회원가입을 먼저 해주세요.");
      navigate("/signup");
    }
  };

  return (
    <div>
      <button className="loginBtn" onClick={goToMain}>
        로그인
      </button>
    </div>
  );
}

export default Login;
```

- useNavigation은 페이지 전환 시에 추가로 처리해야하는 로직이 있을 때에도 사용된다!
  - 로그인 버튼을 클릭 했을 때
    - 회원가입이 되어 있는 사용자라면 ⇒ Main 페이지로
    - 회원가입이 되어 있지 않은 사용자라면 ⇒ SignUp 페이지로

1. **성능 개선**
   **`useNavigate`** 훅을 직접 호출하면 컴포넌트가 렌더링될 때마다 새로운 **`navigate`** 함수가 생성되지만 **`useNavigate`**를 변수에 할당하면 컴포넌트의 렌더링과는 독립적으로 한 번만 **`navigate`** 함수가 생성된다.
   이후에는 이 변수를 사용하여 불필요한 함수 생성을 방지할 수 있다! 성능 개선 가능!
2. **가독성 개선**
   **`useNavigate`** 훅을 변수에 할당하면 코드의 가독성이 개선된다. **`useNavigate`** 훅을 직접 호출하면 컴포넌트 내에서 바로 **`navigate`** 함수를 사용해야 해서 이 때문에 컴포넌트 코드가 길어지고 복잡해질 수 있다….. 하지만 변수에 할당한 후에는 **`navigate`** 함수를 사용할 때 변수명으로 사용할 수 있으므로 코드의 가독성이 개선됨.
3. **재사용성**
   **`useNavigate`** 훅을 변수에 할당하면 이 변수를 다른 함수나 컴포넌트에서도 사용 가능 1. 이를 통해 **`navigate`** 함수를 중복 작성하지 않고, 재사용성을 높일 수 있다.

🔗 : [https://velog.io/@ahn-sujin/React-Link-컴포넌트와-useNavigate의-차이](https://velog.io/@ahn-sujin/React-Link-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%99%80-useNavigate%EC%9D%98-%EC%B0%A8%EC%9D%B4)

🔗 : [react 에서 navigate 사용하기 (useNavigate / Navigate)](https://basemenks.tistory.com/278)

🔗 : \***\*[[React] Link와 useNavigate](https://heycoding.tistory.com/72)\*\***
