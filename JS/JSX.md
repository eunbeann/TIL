๐[https://ko.reactjs.org/docs/introducing-jsx.html](https://ko.reactjs.org/docs/introducing-jsx.html)

- ๊ธฐ๋ฅ์ ์ธ ํฐ ์ฐจ์ด๋ ์์
- JSX๋ ๋ฆฌ์กํธ ์๋ฆฌ๋จผํธ๋ฅผ ์์ฑ

# JSX

javascript์ xml์ ์ถ๊ฐํ ํ์ฅํ ๋ฌธ๋ฒ

๋น๋์์๋ Babel์ ์ํด JS๋ก ๋ณํ๋๋ค.

```jsx
const element = <h1> Hello, world!</h1>
```

JS๋ฅผ ํ์ฅํ ๋ฌธ๋ฒ์ธ JSX.

- ์๋ฐ์คํฌ๋ฆฝํธ์ HTML ๋ฌธ๋ฒ ์์ฑ์ด ๊ฐ๋ฅ โ ์ปดํฌ๋ํธ ์์ฑ์ ์ฉ์ด

React์ ํจ๊ป ์ฐ์ด๋ ๊ฒ ๊ถ์ฅ๋๋ค. โ ๋ค๋ฅธ ํ๋ก ํธ ํ๋ ์์ํฌ์์๋ ์ฌ์ฉ ๊ฐ๋ฅ

- JSX ํ๊ทธ ์์์ ์ค๊ดํธ {}๋ JS๋ฅผ ์ฌ์ฉํ  ์ ์๋๋ก ํจ
- [https://gocoder.tistory.com/2219](https://gocoder.tistory.com/2219)

```jsx
const name = 'GoCoder'; /* ๋ณ์ ์์ฑ */
const element = <h1>Hi! {name}</h1>;/* ๋ณ์ ์๋ ฅ */
ReactDOM.render(
element,
document.getElementById('root')
);

์ถ์ฒ: https://gocoder.tistory.com/2219 [๊ณ ์ฝ๋ IT Express]
```