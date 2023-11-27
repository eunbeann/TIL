- 유틸리티 타입 (제네릭 타입으로도 불림)

### Omit<Type,Keys> 
    - 특정 속성만 제거한 타입을 정의함
    - pick과 반대되는 개념!

```jsx
interface Todo {
  title: string
  description: string
  completed: boolean
  createdAt: number
}

// description을 제외
type TodoPreview = Omit<Todo, 'description'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
  createdAt: 1615544252770,
}
```
