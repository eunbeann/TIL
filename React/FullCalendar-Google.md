# FullCalendar

기본 구글 API보다 UI가 깔끔한 FullCalendar!

일정을 간편하게 불러오고 싶어서 구글 연동 방법을 사용하기로 함

처음에 오래 헤맸는데 생각보다 쉬워서 나 같은 사람이 시간 낭비 하지 않길 바라며 기록한다.

!! 공식 문서 잘되어 있으니까 제대로 확인하기 !!

우선 캘린더 설치

```
npm install --save @fullcalendar/react @fullcalendar/daygrid @fullcalendar/google-calendar
```

- 공식 문서에는 두 가지만 install 해주는데 우리는 google calendar 연동까지 필요하므로 google-calendar까지 설치해주기

```
import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default class DemoApp extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />
    )
  }
}
```

fullcalendar react 공식 문서의 예시

이렇게 하면 기본적인 캘린더 틀은 완성 됨.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4ef8d873-8d48-44c8-9acd-cf17afa019ca/Untitled.png)

구글 연동을 위해서는

- 사전 작업
  - Google dev 페이지에서 API key 발급 받기
  - 구글 캘린더 설정 바꿔주기
- 코드 내에서

  - `@fullcalendar/google-calendar` 설치, import 해주기
  - `plugins={[dayGridPlugin, googleCalendarPlugin]}` 플러그인에 추가
  - `googleCalendarApiKey={apiKey}
        events={{
          googleCalendarId: 'ds.likelion@gmail.com',
        }}`
    apikey랑 캘린더 아이디 추기

- 연동완료!

```
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import '../css/Calendar.css';

// https://fullcalendar.io/docs/google-calendar
export default function Calendarpg() {
  const apiKey = process.env.REACT_APP_CAL_API_KEY;

  return (
    <div className="cal-container">
      <FullCalendar
        plugins={[dayGridPlugin, googleCalendarPlugin]}
        initialView="dayGridMonth"
        googleCalendarApiKey={apiKey}
        events={{
          googleCalendarId: 'ds.likelion@gmail.com',
        }}
        eventDisplay={'block'}
        eventTextColor={'#FFF'}
        eventColor={'#F2921D'}
        height={'660px'}
      />
    </div>
  );
}
```

- 각 요소는 공식 문서의 API를 참고해서 바꿀 수 있다.
-
