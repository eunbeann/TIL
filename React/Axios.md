# Axios란 무엇인가?

## Axios란 무엇인가?

- 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리
- BE와 FE의 통신을 쉽게하기 위해 Ajax와 더불어 사용함

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7367236f-f6f3-4c9e-9bae-a640cc7ca2c1/Untitled.png)

## Axios 사용하기

- axios 모듈 설치

```jsx
npm install axios --save
```

레지스토리 안에있는 axios를 우리 프로젝트에 설치해줌

정보 받아오기

```jsx
axios.get("경로");
```

## Axios를 인스턴스화하기

- 중복된 부분을 반복해서 입력하는 것을 최소화하기 위함

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9a904823-4d3d-4715-b47f-0b961160013b/Untitled.png)

## Axios 인스턴스 만드는 순서

- 인스턴스를 생성할 폴더 파일 생성
  - src 폴더 안에 api 폴더 생성 후 axios.js / requests.js 만들기

```jsx
import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.themoivedb.org/3",
  params: {
    api_key: "key 값",
    language: "ko-KR",
  },
});

export default instance;
```

인스턴스화 한 후 다른 부분만 넣기

```jsx
const request = {
  fetchNowPlaying: `movie/now_playing`,
  fetchNetflixOriginals: `/discover/tv?with_network=213`,
  fetchTrending: `/trending/all/week`,
  fetchTopRated: `/movie/top_rated`,
  fetchActionMovies: `/discover/movie?with_genres=28`,
  fetchComedyMovies: `/discover/movie?with_genres=35`,
  fetchHorroMovies: `/discover/movie?with_genres=27`,
  fetchRomanceMovies: `/discover/movie?with_genres=10749`,
  fetchDocumentaries: `/discover/movie?with_genres=99`,
};

export default request;
```

- 디오리진, 리액트 5주차 수업
