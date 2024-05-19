# Jest

- react-testing library와 함께 사용 되는 것 ⇒ 이 둘로 웹 테스팅
  - 얘가 렌더링 해주고 렌더링 된 걸 jest로 테스트함
- 테스팅 프레임 워크
- 최소한의 설정으로 동작해 test case를 만들어 코드가 잘 돌아가는 지를 확인 함
- create-react-app으로 설치시 자동 설치됨
- 만약 다르게 설치했다면
  1. Jest 라이브러리 설치 `npm install jest —save-dev`
  2. Test 스크립트 변경 “test” : “jest” or “jest —watchAll”
  3. 테스트 작성할 폴더 및 파일 기본 구조 생성
- 테스팅 파일을 jest가 찾아줌!!! > 파일이름에 .test. / .spec. / .tests. / 가 있으면 테스트를 위한 파일임을 인지하고 테스트 해줌

## Jest 파일 구조 + 사용법

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9b854b8a-494a-4309-9e61-db10514130c8/Untitled.png)

it === test

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c4d42634-554a-4c0a-89b2-738ff560f412/Untitled.png)

### “describe”

- argument (name, fn)
- 어떤 관련 테스트를 그룹화하는 블록 만들기
  - 비슷한 테스트들이 describe 하나에 들어가서 그룹화됨

### “it” === test

- argument (name fn, timeout)
- 개별 테스트를 수행하는 곳, 각 테스트를 작은 문장처럼 설명
  -
- 테스트 내부에 expect/matcher 존재
  - expect : 값 테스트 할 때 마다 사용 되며, 혼자 거의 안쓰고 matcher와 함께 사용
  - matcher : 다른 방법으로 갑을 테스트하기 위해 matcher 사용

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1185eb29-2fc8-45bf-b7e1-d276c1035f67/Untitled.png)

- toBe를 not.toBe로 진행해도 됨. → 이 경우 4가 아닌 값을 넣어야지 PASS
