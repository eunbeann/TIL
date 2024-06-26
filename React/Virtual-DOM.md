# React의 가상DOM

### 브라우저가 그려지는 원리와 가상DOM

- 리액트의 주요 특징 : 가상DOM을 사용함
- 브라우저가 렌더링하는 과정 알아보기
- **웹페이지 빌드 과정 (Critical Rendering Path CRP)**
  - 브라우저가 서버에서 페이지에 대한 HTML 응답을 받고 화면에 표시하기 전에 여러 단계 존재
  - 웹 브라우저가 HTML 문서를 읽고, 스타일 입히고 뷰 포트에 표시하는 과정
  - 화면에서 보여주는 과정을 CRP해서 여러

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fe6f082a-26ce-4e32-ab07-5130c17721a1/Untitled.png)

- DOM tree 생성
  - 렌더 엔진이 문서를 읽어 들여 파싱하고 어떤 내용을 페이지에 렌더링할지 결정함.
- Render tree 생성
  - 이 단계는 브라우저가 DOM과 CSSOM를 결합하는 곳,
  - 이 프로세스는 화면에 보이는 모든 콘텐츠의 콘텐츠와 스타일 정보를 모두 포함하는 최종 렌더링 트리를 출력
  - **즉 화면에 표시되는 모든 노드의 콘텐츠 및 스타일 정보를 포함함**
    - Layout (reflow) : 브라우저 페이지에 표시되는 각 요소의 크기와 위치 계산 단계
    - Paint : 실제 화면에 그리기

! 문제점

- 인터렉션에 의해 DOM 변화가 발생하면 render tree가 재생성 됨.
- 즉, 모든 요소들의 스타일을 다시 계산. Layout, Repaint 과정까지 다시 거치게 됨.
- 인터렉션이 적은 웹이면 괜찮지만 인터렉션이 많다면(요즘꺼는 다 많아)
  - DOM 조작 비용이 너무 큼ㅠ

> > 해결을 위해서는

- 가상 돔 Virtual Dom
  - 실제 DOM을 메모리에 복사해준 것
  - 두 가지 돔 존재
    - 데이터 변화 등으로 바뀐 돔 / 기존 돔
      - 두 돔을 **Diffing해 다른 점을 찾아** 다른 점만 실제 DOM에 적용함
      - 가상돔에 렌더링 되고, 바뀐 부분만 실제 DOM에 적용 시켜줌
- 정리해보자면!!
  - 데이터가 바뀌면 가상돔에 렌더링 되고, 이전에 생긴 가상돔과 비교해서 바뀐 부분만 실제 돔에 적용 시켜줌.
  - 바뀐 부분을 찾는 과정이 DIffing이며,
  - 바뀐 부분만 실제 돔에 적용시키는게 재조정(reconciliaton)임.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9ef76487-f6ef-4b21-adc0-330e0f3949fc/Untitled.png)

가상 돔 때문에 요소 30개가 변했다고 하더라도
한 번에 묶어서 / 한 번의 실제 돔 수정으로 처리해 / 돔 조작 비용 줄이기

→ 위 그림의 경우 2개의 요소가 바뀐 것
