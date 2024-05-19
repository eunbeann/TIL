# 해시(Hash)

### 1. 해시 개념

//HTTPS://YOUTU.BE/ZFL29YDL9D8

### key:value의 형태를 갖는 자료 구조

1. 전화번호부와 완전히 동일하다!

   1. 전화번호부에서 친구 번호 찾을 때 검색창에 이름 검색해서 번호 얻어오는 것과 같다.
      `이름=key` `전화번호=value`
   2. `key` 무언가를 찾기 위한 검색어
      `value` 그 검색어로 나온 결과

1. 배열은 오직 정수로만 접근할 수 있어서,
   내가 친구 이름을 알아도 이름 기반으로 전화번호를 찾을 방법은 없다.
1. 그래서 해시가 없었을 때에는 0부터 끝까지 하나하나 열어보면서
   내 친구가 맞는지 비교하고 검색해야한다.

```java
// 배열은 오직 정수로만 접근 가능
int[] phonebook = new int[5];
phonebook[0]

// 친구 이름을 알아도 이름 기반 검색 불가 ㅠㅠ
String name = "eunbean"
phonebook[name] => error

// 0부터 끝까지 열어보면서 친구가 맞는지 비교하고 검색해야 함.
for(int i=0l i<n; i++) {
	phonebookName[i] == name?
}
```

- hash는 배열과 달리 String 타입 같은 다른 어떤 데이터형을 기반으로
  자료구조를 접근하고 데이터를 관리함.
- 해시에는 여러 특징들이 있지만, 코테를 위해 이해할 한 가지만 고르면…
  **⇒ 해시는 모든 데이터 타입으로 접근이 가능함!**

# 2. 예시

### 프로그래머스 : 완주하지 못한 선수

- N명이 마라톤 참가, N-1명만 완주해서, 완주하지 못한 한 명을 찾는 문제
- a,b,c 중 b,c 만들어 왔다면 ⇒ a가 완주
- hash 없으면 인덱스 다 뒤져가면서 “A”이름 선수 찾고, 이 선수의 데이터를 입력해야 함
  - 근데 참여 선수 많으면 단순 비교는 정답이 될 수 없다.

### Hash로 풀어보면 !

- Hashmap을 만들고
  `HashMap.put(”A”, true);`라고 입력하면
  `HashMap[”A”] = true;`와 동일한 동작 수행
- 값을 읽어오려고 할 때에는
  `bool fin = hashmap.get(”A”);` 라고 입력해
  `bool fin = hashmap[”A”];` A번째 인덱스에서 값을 읽어오는 것과 같은 동작 수행.
- getOrdefault
  - hashMap.get(”A”);
    → A라는 key가 존재한다는 가정하에 A의 value를 반환함. “A”키가 존재하지 않으면 에러가 나옴. 그래서 매번 key 존재를 확인하고 get 해야함
    ⇒ 이것을 개선한게 getOrDefault
    getOrDefault(”A”, false) : A가 있다면, A의 value를 반환하고, A가 없다면, false를 반환
    : 키 없는 경우의 예외 처리를 한 함수내에서 처리해줌
    get, put, getOrDefault
    | get | 값 읽어오기 |
    | ------------ | ----------------------- |
    | put | 해시 생성하기 |
    | getOrDefault | 키 없는 경우의 예외처리 |

# 어떤 문제에서 써야하나요?

- 딱 하나의 조건만 보면 확실한데, String을 기반으로 정보를 기록하고 관리해야 할 때는 무조건 hash쓴다고 생각하자

### 1. 완주하지 못한 선수

- N명이 마라톤 참가, N-1명만 완주해서, 완주하지 못한 한 명을 찾는 문제
- 선수 이름 String ⇒ Hash
- 선수 이름 / 완주 여부
- String key / bool value

### 2. 신고 결과 받기

1. 게시판 사용자 중 신고 당한 사람 기준으로 신고자들의 목록 관리
2. 신고 당한 사람의 이름 String ⇒ Hash
3. String Key / ArrayList<String> Value

### 3. 위장

1. 옷의 종류에 따라 몇 개의 옵션이 있는지?
2. 옷의 종류가 정수가 아닌 (얼굴, 상의 하의, 겉옷) String ⇒ Hash
3. String Key : Integer Value

# 결론!!

- String을 기준으로 정보를 기록하고 관리하려면 단순 배열을 쓸 수 없으니 Hash를 쓰장

### 정리~

1. Hash는 전화번호부와 같다.
   1. 정수가 아닌 key를 가질 수 있어 배열로 담을 수 없는 정보를 담을 수 있게 됨
   2. 대부분 그 key 는 string임.
   3. put/ get /getOrDefault 만 잘 알자!

### +자바스크립트, 파이썬에서 Hash 쓰기

- 자바스크립트에서는 Map을 파이썬에서는 Dictionary를 사용하는 듯 하다!
- Map

  ```java
  const map1 = new Map();

  map1.set("a", 1);
  map1.set("b", 2);
  map1.set("c", 3);

  console.log(map1.get("a"));
  // 1

  map1.set("a", 97); // 덮어씌워지는 군

  console.log(map1.get('a'));
  // 97

  console.log(map1.size);
  // 3

  map1.delete('b');

  console.log(map1.size);
  //2
  ```
