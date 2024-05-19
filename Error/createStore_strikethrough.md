# createStore_strikethrough

## 에러 코드

### Console

`property createStore of #<Object> which has only a getter`

IDE에서는 createStore에 취소선이 그어져 보임.

## 문제 해결

`npm remove redux react-redux`

`npm install redux@4.1.2 react-redux`

리덕스를 옛날 버전으로 재설치해주

## 참고 링크

[https://codingapple.com/forums/topic/createstore가-이상합니다/](https://codingapple.com/forums/topic/createstore%EA%B0%80-%EC%9D%B4%EC%83%81%ED%95%A9%EB%8B%88%EB%8B%A4/)
