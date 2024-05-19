# 마진 상쇄

## 박스의 기본

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/212869d7-af21-4dc1-b218-5769bced87f9/Untitled.png)

## 마진 상쇄 (Margin-collapsing)

- 마진이 겹쳤을 경우 두 가지의 마진 중 더 큰 마진으로 결합됨.
- 상하 마진이 겹치는 경우에 발생

## 마진 상쇄 발생 상황

- 인접한 형제 박스 간 상하 마진이 겹치는 경우
  - 큰 마진 값 하나만 적용되며, 동일한 마진을 가지는 경우 동일한 값을 한 번만 갖게 됨
- 빈 요소(height == 0)의 상하 마진이 겹치는 경우
  - 위 아래의 경계가 없으므로 본인의 상단 마진 값과 하단 마진 값 중 더 큰 값으로 상쇄함.
- 부모 박스와 첫 번째 자식 박스의 상단 마진이 겹치는 경우
  - 브라우저는 부모 바그와 자식 박스 강의 경계를 그 사이의 border / padding / inline 콘텐츠 유무로 판단
  - inline 콘텐츠가 없거나, 명시적인 padding, border 값을 주지 않은 경우 마진이 겹침
    - 자식 요소의 마진 크기와 관계 없이 상쇄된 마진은 부모 박스 바깥으로만 렌더링
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/45ca46ba-8535-430e-b122-bb20f1ce12c3/Untitled.png)
  - 위와 같은 방법으로 padding 혹은 border 값을 주어 벽을 만들어주면 의도대로 자식 요소 배치 가능

## 마진 상쇄 규칙

- block-level의 요소일 경우에만 적용됨
- 마진이 0일 경우에도 상쇄 규칙 적용
- 좌우 마진은 상쇄와 관계 없음

## 마진 상쇄 규칙 예외

1. position : absolute인 경우
2. float:left/right인 경우 (clear되지 않은 상태)
3. display:flex 일 때 내부 flexbox item
4. display:grid일 때 내부 grid item
