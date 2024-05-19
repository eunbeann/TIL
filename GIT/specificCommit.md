# git reset --hard <commit id>

일반적인 방식으로 git clone을 하면 기본값은 가장 최신 버전

특정 버전의 커밋을 받아야하는 경우가 생겨서 찾아보았다

1.  우선 기존과 동일하게 클론 받기

```jsx
git clone <repo-url>
```

1. 클론한 디렉토리 위치에서 git log 찍어서 원하는 commit의 commit Id 카피

```jsx
git log
```

2-1. guthub history에서 commit id 확인하기

1. 확인한 commit id로 바꿔주기

```jsx
git reset --hard <commit id>
```
