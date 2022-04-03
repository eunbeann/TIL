# TDD 테스트 주도 개발이란?

실제 코드 작성 이전 테스트 코드 작성

- 테스트 코드 작성 후 이 코드를 Pass 할 수 있는 실제 코드를 작성
1. 원하는 기능의 테스트 코드 작성
2. 테스트 실행 → Fail
3. 테스트 코드에 맞는 실제 코드 작성으로 다시 테스트
    1. 원래는 이 부분만 작성을 했던 것
4. 테스트 실행 → Pass

### TDD의 장점

1. 많은 기능을 테스트하므로 소스 코드에 안정감 부여
2. 실제 개발에 많은 시간 소요되는 부분은 디버깅이므로 TDD 사용 시 디버깅 시간이 줄고, 실제 개발 시간도 줄어듦
3. 소스 코드 하나하나를 신중하게 짤 수 있으므로 깨끗한 코드가 나올 확률이 높아짐

## 리액트에서의 TDD

### React Testing Library

 - React 구성 요소 작업을 위한 API를 추가해 DOM Testing Library 위에 구축됨

- Create-react-app으로 생성된 프로젝트에는 같이 설치됨!
- 아닌 경우에는

```jsx
npm install --save--dev @testing library/react
```

리액트 컴포넌트를 테스트하는 가벼운 솔루션 

Enzyme ⇒ 에어비엔비에서 만든 구성 요소의 구현 세부 정보를 테스트함. 구현 주도 테스트 (IDT)

React Testing Library

- Enzyme을 대처하는 솔루션
- Enzyme은 구현 세부 정보를 테스트하고, React Testing Library는 개발자를 React 애플리케이션 사용자 입장에 둠
- 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cadd4e1b-521e-4bee-a082-7f827bc0f0b7/Untitled.png)

- 각 컴포넌트에서의 데이터를 props로 전달해주는데 각 컴포넌트 안에서는 state로 데이터 흐름을 가져오게 됨.
- enzyme은 구현 주도 테스트이므로 props이 어떻게 구현되고 state의 흐름을 구현 위주로 테스트하지만
- 사용자는 기능이 더 중요하므로 해위ㅐ 주도로 어떤 기능이 있고, 어떤 기능이 더 잘 작동하는지를 더 중요시 함.