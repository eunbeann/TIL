## 커밋 메시지 형식

```powershell
<type>(<scope>): <short summary>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

- 커밋 메시지의 각 줄을 100자를 넘기지 말아야 함

### 커밋 메시지 헤더 (Commit Message Header)

```powershell
커밋 메시지 헤더
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ 명령문, 현재 시제로 작성합니다. 대문자를 사용하지 않으며, 마침표로 끝내지 않습니다.
  │       │
  │       └─⫸ Commit Scope: animations|bazel|benchpress|common|compiler|compiler-cli|core|
  │                          elements|forms|http|language-service|localize|platform-browser|
  │                          platform-browser-dynamic|platform-server|router|service-worker|
  │                          upgrade|zone.js|packaging|changelog|dev-infra|docs-infra|migrations|
  │                          ngcc|ve
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
The <type> and <summary> fields are mandatory, the (<scope>) field is optional.
```

### <type>에 들어갈 수 있는 항목들

- feat : 새로운 기능 추가
- fix : 버그 수정
- docs : 문서 관련
- style : 스타일 변경 (포매팅 수정, 들여쓰기 추가)
- refactor : 코드 리팩토링
- test : 테스트 관련 코드
- build : 빌드 관련 파일 수정
- ci : CI 설정 파일 수정
- pref : 성능 개선
- chore : 그 외 자잘한 수정

### <scope>에 들어갈 수 있는 항목들

변경된 부분은 모두 들어갈 수 있음

- $location, $browser, $compile, $rootScope, ngHref, ngClick, ngView 등 ⇒ 생략 가능함
- 이름이 들어가면 어디가 바뀌었는지 알기 쉬우므로 함수 변경 시 → 함수 이름, 메소드 추가 시 → 해당 클래스 이름 넣기

### <short summary> 요약 설명

- 명령문
- 현재 시제로 작성
- 첫 글자 대문자 (X), 소문자로 작성
- 마지막에 마침표 붙이지 않음
- 변경되었을 때 : “chage” (o) , “changed” (x) , “changs” (x)

### 메시지 내용 (Message Body)

- 명령문, 현재 시제로 작성
- 변경한 이유와 변경 전과의 차이점 설명

### 메시지 하단 (Message Footer)

- **모든 주요 변경 내역 (Breaking changes)**
- 다음과 같이 하단에 언급되어야 함
    - 변경점(description of the change)
    - 변경 사유 (justification)
    - 마이그레이션 지시 (migration instructions)
- 해결된 이슈 (Referencing issues)
    - 해결된 이슈는 커밋 메시지 하단에 `Closes #<이슈번호>`와 같이 기록되어야 함
    - 해결된 이슈가 여러개인 경우 다음과 같이 작성
        
        `Closes #123, #245, #992` 
        Closes 대신 Fixes 를 사용하기도 함 (Angular 9 규약)
        

```powershell
feat($browser): onUrlChange event (popstate/hashchange/polling)

Added new event to $browser:
- forward popstate event if available
- forward hashchange event if popstate not available
- do polling when neither popstate nor hashchange available

Breaks $browser.onHashChange, which was removed (use onUrlChange instead)
```

```powershell
fix($compile): couple of unit tests for IE9

Older IEs serialize html uppercased, but IE9 does not...
Would be better to expect case insensitive, unfortunately jasmine does
not allow to user regexps for throw expectations.

Closes #392
Breaks foo.bar api, foo.baz should be used instead
```

```powershell
feat(directive): ng:disabled, ng:checked, ng:multiple, ng:readonly, ng:selected

New directives for proper binding these attributes in older browsers (IE).
Added coresponding description, live examples and e2e tests.

Closes #351
```

```powershell
style($location): add couple of missing semi colons
```

```powershell
docs(guide): updated fixed docs from Google Docs

Couple of typos fixed:
- indentation
- batchLogbatchLog -> batchLog
- start periodic checking
- missing brace
```

```powershell
feat($compile): simplify isolate scope bindings

Changed the isolate scope binding options to:
  - @attr - attribute binding (including interpolation)
  - =model - by-directional model binding
  - &expr - expression execution binding

This change simplifies the terminology as well as
number of choices available to the developer. It
also supports local name aliasing from the parent.

BREAKING CHANGE: isolate scope bindings definition has changed and
the inject option for the directive controller injection was removed.

To migrate the code follow the example below:

Before:

scope: {
  myAttr: 'attribute',
  myBind: 'bind',
  myExpression: 'expression',
  myEval: 'evaluate',
  myAccessor: 'accessor'
}

After:

scope: {
  myAttr: '@',
  myBind: '@',
  myExpression: '&',
  // myEval - usually not useful, but in cases where the expression is assignable, you can use '='
  myAccessor: '=' // in directive's template change myAccessor() to myAccessor
}

The removed `inject` wasn't generaly useful for directives so there should be no code using it.
```