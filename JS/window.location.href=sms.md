```jsx
 window.location.href = sms:?body=${encodeURIComponent("hi")};

```

**`window.location.href`**

- 현재 웹사이트의 URL 변경

**`sms:?body=${encodeURIComponent("hi")}`**

- SMS URL 구성
- sms:
  - URL 스키마
- body:
  - 메시지 본문 지정 매개 변수

**`encodeURIComponent("hi")`**

- 메시지 본문의 텍스트 “hi” 인코딩
- 예시엔 특수문자가 없기 때문에 sms?body=hi와 같이 평가되지만 실제 사용에서는 그렇지 않기 떄문에 **`encodeURIComponent` 필요**

### 내가 사용한 것

[[ FEAT ] 문자메시지로 공유하기 기능 추가 ](https://github.com/Gwasuwon-shot/Tutice_Client/pull/470)

```jsx
function handleShareViaMessage() {
  const message = `안녕하세요, 과외 수업 관리 필수 앱 Tutice 입니다. \n\n[${userName}]선생님이 [${studentName}]학생의\nTutice 초대장을 보냈습니다.\n\nTutice 링크 \n ${URL}`;
  const smsLink = `sms:?body=${encodeURIComponent(message)}`;
  window.location.href = smsLink;
}
```

- 문자열이 길어서 따로 변수에 지정함
- 특수문자가 있어 인코딩 컴포넌트로 감쌌음
