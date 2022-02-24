## SPA(Single Page Application) 이란?

- App.js 부분 변경하면 이 부분이 실제 화면에서 바뀌는 지 확인 가능함
- 실행 순서 살펴보기
    1. public/index.html
        1. HTML 템플릿 파일로 div 엘리멘트의 id를 root로 해둠

관리자 모드에서 코드를 확인해보면

`<title> React App </title>`

로 창 이름이 React App으로 뜸

- 

```jsx
//public \ index.html

**<title>React App</title>**
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
```

- index.html에서 title 값을 변경해 창 이름 변경
    
    ```jsx
    //public \ index.html
    
    **<title>React App</title>**
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
    ```
    

- index.html의<div id=”root”></div>를 지우면 창이 뜨지 않음
- 자바스크립트의 시작점인 src/index.js에서 위에 root id를 가진 div를 자바스크립트로 잡아줌.
    - `document.getElementById(’root’)`
    - 그 엘리먼트 안에서 화면을 꾸밀 수 있게 됨

## Single Age Application (SPA)

- 하나의 페이지의 어플리케이션
- 전통적으로는 각 템플릿(.html)을 보여줬었음 → 멀티페이지어플리케이션
- 하나의 템플링세 담아 동적으로 화면을 바꿔가며 표현함
- 템플릿은 하나지만 root ㅇdiv를 js로 잡아 동적으로 바꿔주면서 페이지가 바뀌는 것 처럼 보여주는 것임

### SPA에서의 화면 변경

- SPA에서는 페이지 전환 어케 함?
    - HTML 5의 history API를 이용 → 현재 페이지 내에서 화면 이동이 일어난 것 처럼 작동하게 해줌
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/69607cc3-fbf6-4e09-9a0a-15672773a058/Untitled.png)
    


2022.02.23 첫 TIL 