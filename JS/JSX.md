# JSX

🔗[https://ko.reactjs.org/docs/introducing-jsx.html](https://ko.reactjs.org/docs/introducing-jsx.html)

- 기능적인 큰 차이는 없음
- JSX는 리액트 엘리먼트를 생성

javascript에 xml을 추가한 확장형 문법

빌드시에는 Babel에 의해 JS로 변환된다.

```jsx
const element = <h1> Hello, world!</h1>;
```

JS를 확장한 문법인 JSX.

- 자바스크립트에 HTML 문법 작성이 가능 ⇒ 컴포넌트 작성에 용이

React와 함께 쓰이는 게 권장된다. → 다른 프론트 프레임워크에서도 사용 가능

- JSX 태그 안에서 중괄호 {}는 JS를 사용할 수 있도록 함
- [https://gocoder.tistory.com/2219](https://gocoder.tistory.com/2219)

```jsx
const name = 'GoCoder'; /* 변수 생성 */
const element = <h1>Hi! {name}</h1>;/* 변수 입력 */
ReactDOM.render(
element,
document.getElementById('root')
);

출처: https://gocoder.tistory.com/2219 [고코더 IT Express]
```
