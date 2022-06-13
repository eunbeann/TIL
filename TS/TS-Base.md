- 웹 브라우저는 타입스크립트는 인식할 수 없음

터미널에 `$tsc -w` 입력해 켜두고 작업 시 자동 변환 된다.

- 새로운 js파일이 생성되면서 반영됨.

## 타입 지정해주기

다음과 같은 방식으로 식별자 다음에 콜론을 붙여 기입한다

### 기본 방식

`vlaue : type` `let 이름 : string = "bean";`

- string에 담긴 array만 올 수 있어

`let 이름 : string [] = [”kim”, “park”];`

### Object

- object도 타입 지정 가능
  - ? ⇒ 해당 속성은 옵션 값

`let 이름 : {name? : string } = {name: “kim”};`

### Union type

- union type : 다양한 타입이 들어올 수 있게하기
- string 혹은 number가 들어올 수 있음
  - `let 이름 : string|number = “kim”;`
  - `let 이름 : string|number = 1234;`

### Type alias

- 타입은 변수에 담아 쓸 수 있다

```powershell
type 내타입 = string | number;

let 이름 : 내타입 = 1234;
```

### function

함수에 타입 지정 가능

- 파라미터 값 number, return 값 number

```powershell
function 함수 (x : number): number {
	return x *2
}
```

### Tuple

- array에 쓸 수 있는 tuple 타입
  `type Member = [number, boolean];`
- let john: Member = [123, true];

### Object에 속성이 많아 타입 지정을 여러 개 해줘야 한다면

```powershell
type Member2 = {
// 글자로 된 모든 object 속성의 타입은 : string
	[key : string] : string;
};

let john : Member2 = {name: "kim", age: "1234" };
```

### class 타입 지정 가능

```powershell
class User {
	name : string;
	constructor(name : string) {
		this.name = name;
 }
}
```
