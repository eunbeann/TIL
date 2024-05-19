# react-slick

- SBC 구현하면서 사용했던 기능인 슬라이드 배너

애니메이션이라고 백날천날 검색했더니 마땅한 검색 결과가 안나와서 당황했었다.

배너 슬라이더라고 검색했더니 바로 발견!

우리나라에서 흔히 슬라이더라고 부르고 정식 용어로는 캐로셀(Carousel)이라고 한다.

직접 구현하는 방법 VS 라이브러리 사용

두 가지 선택지가 있었는데 나는 라이브러리를 사용했고,

그 사용기를 남겨보려고 한다.

## React-Slick

🔗[https://react-slick.neostack.com/](https://react-slick.neostack.com/)

위 링크는 공식 문서이며 라이브러리에 대한 다양한 설명과 함께 여러 예시가 제시되어 있어 보기 좋다.

### React-Slick 시작하기

- 라이브러리 설치하기
  - 터미널에서 npm / yarn을 이용해 설치해준다.

```
//npm
npm install react-slick --save

//yarn
yarn add react-slick
```

> - react-slick@0.28.0
>   added 7 packages ~

위와 같은 문장이 뜨면 설치 완료!

- 라이브러리 설치 후 CSS 도 설치해주자
  - 동일하게 터미널에서 설치

```
npm install slick-carousel --save
```

하단 코드는 기본 예시이다.

```
import React, { Component } from "react";
import Slider from "react-slick";
**import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // 두 번째에서 설치해준 CSS 파일**

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/50355c0c-54ec-4622-abfa-9f2630ba249b/Untitled.png)

CSS import 후 확인하면 아래와 같은 모양의 캐러셀 완성!

여기서 기본 settings 를 살펴 보자면

```
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
```

- dots
  - 캐러셀 하단 현재 위치를 보여주는 버튼 false 값을 주면 invisible 상태가 된다.
- infinite
  - 컨텐츠가 끝까지 갔을 경우 그냥 가만히 있을지, 처음으로 돌아와 반복할지를 결정한다.
- speed
  - 슬라이더가 넘어가는 속도, 단위는 ms로 기본 설정인 500은 0.5초를 의미한다.
- slidesToShow
  - 한 번에 보여줄 컨텐츠
- slidesToScroll
  - 한 번에 넘어가는 컨텐츠

위 까지는 기본 제공 옵션이지만 캐러셀을 커스터마이징하기 위해 사용하면 좋은 옵션들도 있다

- autoplay
  - true/false의 값을 가지며 true값을 받을 시 자동으로 컨텐츠가 넘어간다.
  - default 값은 false
- autoplaySpped
  - int 값을 가지며 autoplay를 지정해주었으므로 자동으로 넘어가는 시간도 조정 가능하다
  - default 값은 3000 (0.3초)

외에도 다양한 옵션 설정이 가능하며 자세한 사항은 공식 문서 내 API 탭에서 확인 가능하다.
