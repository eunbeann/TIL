## 개념

- Next.js에서 제공하는 서버사이드렌더링을 위한 함수
- 페이지 요청 때마다 서버 쪽에서 실행되어 외부 데이터를 가져옴
⇒ 해당 데이터를 페이지의 props로 전달함.

**[ 특징 ]**

- 페이지가 요청될 때마다 서버 측에서 실행됨.
- 반환 값은 페이지의 props로 사용
- 외부 데이터를 가져오는 데 사용 가능

## 예시

- 페이지의 렌더링에 필요한 데이터가 외부에서 제공 될 경우
- 페이지의 렌더링에 필요한 데이터가 사용자의 요청에 따라 달라지는 경우

```jsx
// pages/index.js

export default function Page() {
  const { posts } = useState(null);

  // getServerSideProps 함수를 사용하여 외부 데이터를 가져옵니다.
  const { data } = await getServerSideProps({
    // 페이지의 경로를 지정합니다.
    pagePath: '/',

    // 외부 데이터를 가져오는 방법을 지정합니다.
    // 예를 들어, API를 호출하거나 데이터베이스에서 데이터를 가져올 수 있습니다.
    // 여기서는 API를 호출하는 예시를 보여줍니다.
    getData: async () => {
      const response = await fetch('https://example.com/api/posts');
      const data = await response.json();
      return data;
    },
  });

  // 외부 데이터를 페이지의 props로 전달합니다.
  useEffect(() => {
    posts = data;
  }, [data]);

  return (
    <div>
      {posts && posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
```

- getServerSideProps로 [`https://example.com/api/posts`](https://example.com/api/posts) API를 호출해 외부 데이터를 가져옴.
- 데이터는 data 배열에 저장.
- 페이지의 props로 전달

## 참고 링크
<https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props>
