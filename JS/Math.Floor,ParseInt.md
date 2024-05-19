# Math.Floor,ParseInt

- 두 메서드가 양수일 경우 ⇒ 내림한 결과

  ```jsx
  a = Math.floor("18.34"); // 18
  b = Math.floor("72.78"); // 72

  a2 = parseInt("18.34"); // 12
  b2 = parseInt("72.78"); // 56
  ```

- 두 메서드 **음수일 경우** ⇒ 차이 발생

  ```jsx
  c = Math.floor("-18.34"); // -19
  d = Math.floor("-72.78"); // -73

  c2 = parseInt("-18.34"); // -18
  d2 = parseInt("-72.78"); // -72
  ```

  - Math.floor : 소수 첫째 자리에서 양수일 때 처럼 **내림**
  - parseInt : 올림 → 소수점을 버려 **올림한** 값이 나옴

*

```jsx
e = Math.floor("12  34  56"); // NaN

e2 = parseInt("12  34  56"); // 12
```

### 참고자료

🔗 : \***\*[[Javascript] parseInt()과 Math.floor()의 차이](https://velog.io/@mnmm/js-parseint-mathfloor)\*\***
