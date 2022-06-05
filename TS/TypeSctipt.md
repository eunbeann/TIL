### 타입스크립트란

---

- 자바스크립트에 타입을 부여한 언어 → 자바스크립트의 확장된 언어
- 브라우저 실행 시 파일 변환**(컴파일 compile)**이 필요함

### 왜 타입스크립트?

---

1. 에러의 사전 방지
   - 의도하지 않은 코드의 동작을 예방할 수 있다.
   - 10+20의 값으로 30을 도출하길 원했을 때 타입스크립트가 아니라면 1020이 출력되는 상황에서 오류 메시지를 띄워줌으로써 에러를 사전에 방지해줌
     ```powershell
     function sum(a: number. b:number) {
     	return a+b;
     }
     sum('10', '20'); //Error: "10"은 number에 할당할 수 없습니다.

     ```
2. 코드 가이드 및 자동 완성 (⇒ 개발 생산성 향상)

   - VS Code 내부가 타입스크립트로 작성되어 있어 타입스크립트 개발에 최적화 되어 있음

   ```powershell
   function sum(a: number, b: number): number {
   	return a+b;
   }
   var total = sum(10, 20);
   total.toLocaleString();
   ```

   - 위 코드를 JS에서 작성했을 때에는 `total`의 값이 정해져 있지 않은 상태로 개발자가 `sum()`의 함수의 결과를 예상하고 타입이 `number`라고 가정한 상태에서 number의 API인 `toLocaleString()`을 코딩한 것 오타가 났을 경우 브라우저 실행을 통해서야 오류 확인이 가능함.
   - TS의 경우 `total` 에 대한 타입이 지정되어 있어 VSCode에서 해당 타입에 대한 API를 미리 보기로 띄워줘 자동 완성으로 코드에 대한 오류가 적어짐
