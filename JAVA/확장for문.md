### 일반 for 문

```java
for (초기값; 조건식; 증감식;) {
	// 반복할 코드
}
```

- 하나의 변수를 선언하고 그 값을 카운트로 반복되게 되는 형식
- 보통 int i 로 i 값 선언 후 i 값을 카운트 값으로 사용

```java
public class Main {
	public static void main(String[] args) {
			for (int i=0; i<=10; i++){
				System.out.print(i + " ") ;
			}
	}
}
```

```java
// 출력 결과
0 1 2 3 4 5 6 7 8 9 10
```

### 향상된 for 문

[ 조건 ]

1. JDK 1.5 이상
2. 사용할 변수는 지역변수로 인식된다. (for문 안에서 사용되기 때문)
3. 대상은 배열 or 여러 원소를 포함한 자료형이여야 한다.

아래 세개 모두 동일한 뜻이며 이해를 위해 세 가지를 모두 기록

```java
for (변수타입 변수이름 : 배열이름) {
		// 반복할 코드
}
```

```java
for (자료형 변수명 : 배열명) {
		// 반복할 코드
}
```

```java
for (자료형 한 단계 아래의 자료형 변수명 : 배열명) {
		// 반복할 코드
}
```

- 간편하고 가독성이 좋은 코드
- ArrayIndexOutOfBoundsException 예외를 피할 수 있음
- 여러 원소로 이루어진 집합의 모든 원소에 대해 특정 작업을 반복하기 위해 사용
  - ArrayList의 원소를 출력하거나
  - 배열 원소를 출력할 때 사용

[ 단점 ]

1. 인덱스 사용 불가능
2. 1의 단점을 배열이나 ArrayList 값을 사용해서 해결 할 수 있으나 절대 수정은 불가능함.

```java
// 예제1

String[] arr = {"1-1", "1-2", "1-3", "1-4", "1-5"};
for(String s : arr) {
	System.out.println(s);
}
```

```java
// 예제2

String[] arr = {"1-1", "1-2", "1-3", "1-4", "1-5"}, {"2-1", "2-2", "2-3", "2-4", "2-5"}
	for(String[] arrs : arr) {
		for(String s : arr) {
			System.out.println(s);
		}
}
```
