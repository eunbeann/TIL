## 브라우저

- Chrome, Safari, Firefox, Internet Explorer
- MDN : 웹에서 페이지를 찾아 보여주고, 사용자가 하이퍼링크를 통해 다른 페이지로 이동할 수 있도록 하느 ㄴ프로그램
- 유저가 선택한 자원을 서버로 부터 받아와서 유저에게 보여줌
  - 자원 : 페이지뿐만 아니라 이미지, 비디오같은 컨텐츠도 포함. 받아온 자원을 렌더링을 통해 유저에게 보여줌

## 렌더링

- 개발자가 작성한 문서가 브라우저에 출력되는 과정
- 동작 과정

  1. HTML과 CSS 파일을 파싱해서 각각 Tree 생성 (Parsing)
  2. 두 Tree를 결합하여 Rendering Tree 생성 (Style)
  3. Rendering Tree에서 각 노드의 위치와 크기 계산 (Layout)
  4. 계산된 값을 이용해 각 노드를 화면상의 실제 픽셀로 변환 후 레이어 생성 (Paint)
  5. 레이러를 합성하여 실제 화면에 나타낸다 (Composite)

  ### Parsing

  1. 받아온 HTML 파일을 해석하여 DOM Tree를 구성함

     ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/56d20a08-d6e9-4bc2-8c64-fc1d019bf4aa/Untitled.png)

  ### Style

  - DOM Tree와 CSSOM Tree를 매칭시켜 Render Tree 구성
    ex) visiblity :hidden의 경우 요소가 공간을 차지해 Render Tree에 포함되지만 display: none의 경우 RenderTreee에 제외됨.
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a93ea186-4850-4c55-aae1-c41be50bd154/Untitled.png)

  1.

  ### Layout

  - Render Tree를 화면에 어떻게 배치하는지 노드의 정확한 크기 계산
  - 루트부터 노드를 순회하면서 노드의 정확한 크기와 위치 계산 → RenderTree에 계산 → %값으로 크기 값 지정 시 이 단계에서 픽셀 단위로 변경됨

  ### Paint

  - Layout 단계에서 계산된 값을 이용해 RenderTree의 각 노드를 화면상의 실제 픽셀로 변환
  - 변환 결과는 여러 개의 레이어로 관리
  - 스타일이 복잡할 수록 이 시간이 늘어남

  ### Composite

  - Paint에서 생성된 레이러를 실제 화면에 나타내기

[NAVER D2](https://d2.naver.com/helloworld/59361)
