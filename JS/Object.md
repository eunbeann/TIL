### Object 객체

1. 객체 중괄호로 작성
2. 키(key)와 값(value)로 구성된 프로퍼티가 들어감
3. 각 프로퍼티는 ,로 구분 : 마지막은 없어도 되지만 있는게 수정 추가에 용이

```jsx
const superman = {
	name:'clark',
	age : 33,
}
```

### 접근하기

1. 접근 (점, 대괄호 사용)
    1. superman.name //’ clark’
    2. superman[’age’] //33
2. 추가 (점, 대괄호 사용)
    1. superman.gender =’male’;
    2. superman[’hairColor’] = ‘black’;
3. 삭제 (delete 키워드 사용)
    1. delete superman.hairColor;
