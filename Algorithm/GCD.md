### 유클리드 알고리즘

- 주어진 두 수 사이에 존재하는 최대공약수 (GCD\*)를 구하는 알고리즘

### 원리

- 임의의 두 자연수 a,b가 주어졌을 경우,. 둘 중 큰 값이 a라고 가정
- a를 b로 나눈 나머지를 n이라고 할 때 ( n = a%b )
- n이 0일때, b가 최대 공약수 (GCD)
- n이 0이 아니라면, a에 b값을 다시 넣고 n을 b에 대입한 후 다시 위에 step2부터 반복

### 접근 방법

1. 반복문을 이용

```c
int GCD(int a,int b){
    while(1){
        int r = a%b;
        if(r==0) return b;

        a = b;
        b = r;
    }
}
```

1. 재귀를 이용

```c
int GCD(int a, int b)
{
    if(b==0)return a;
    else return GCD(b,a%b);
}
```

GCD로 LCM 구하기

```c
int LCM(int a, int b)
{
    return a * b / GCD(a,b);
}
```

\*GCD : greatest common divisor

### 🔗참고 자료

\***\*[[Algorithm] 유클리드 호제법 - 최대공약수(GCD) 구하기](https://coding-factory.tistory.com/599)\*\***
