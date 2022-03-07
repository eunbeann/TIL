## React Hooks

- class 없이 state 사용할 수 있는 기능

### 필요한 이유

1. 기술은 언제나 문제점을 해결하기 위해 발전
2. 원래 React는 Class Component를 사용, React Hooks는 Functional Component를 사용하기 때문에 그 부분을 우선적으로 비교함
3. React Component
    1. Class Componenet (클래스 컴포넌트)
    
    ```jsx
    import React, { Component } from 'react'
    
    export default class Hello extends Component {
    	render() {
    		return (
    			<div>
    				hello my friends!
    			</div>
    		)
    	}
    }
    ```
    
    1. 더 많은 기능 제공
    2. 더 긴 코드 양
    3. 더 복잡한 코드
    4. 더딘 성능
    
    1. Functional Component (함수형 컴포넌트)
        
        ```jsx
        import React form 'react'
        
        export default function Hello() {
        	return (
        		<div>
        			hello my friends!
        		</div>
        	)
        }
        ```
        
        1. 더 적은 기능 제공
        2. 짧은 코드 양
        3. 더 심플한 코드
        4. 더 빠른 성능
    2. 

### 함수형에서는 사용 못하는 클래스 컴포넌트 기능

- 리액트의 생명주기

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a28b5ff6-cf56-4a73-aeaf-222b317edb0e/Untitled.png)

1. 리액트 시작 할 때 실행
2. 시작 이후 업데이트
3. 컴포넌트가 더 이상 사용하지 않을 때 컴포넌트를 언마운트 해주기

⇒ 함수형에서는 이 생명주기를 사용 X

### 리액트 16.8 Hooks 업데이트로 변경되어 사용 가능

- 함수형 컴포넌트에서도 생명 주기 사용 가능
    - 데이터 가져오기
    - 컴포넌트 시작과 동시에 API 호출하기 등

```jsx
import React, { Component } from 'react'
import Axios from 'axios'

export default class Hellp extends Component {

	construct(props) {
		super(props);
//초기값 넣어주기
		this.state = { name: "" };
}

componentDidMount() {
 Axios.get('/api/user/name')
	.then(response => {
// 내용 업데이트
		this.setState({ name: response.data.name })
	})
	}

render() {
	return (
		<div>
			My name is {this.state.name}
		</div>
		)
	}
]
```

```jsx
import React, { useEffect, useState } from 'react'
import Axios from 'axios'

export default function Hello() {
//[getter, setter]
	const [Name, setName] = useState("")
//useState 괄호안 -> name의 초기값
// setName이라는 setter 이용해 Name state 업데이트
	useEffect(() => {
		Axios.get('/api/user/name')
		.then(response => {
			setName(response.data.name)
		})
}, [])

return (
	<div>
		My name is {Name}
	</div>
	)
}
```

### Hooks로 인한 다른 이점

```jsx
// 일반 클래스 컴포넌트에서 생명주기 사용하는 부분

componentDidMount() {
	//컴포넌트가 마운트 되면 updateLists 함수를 호출 
	this.updateLists(this.props.id)
}
ComponentDidUpdate(prevProps) {
	if (prevProps.id !== this.props.id) {
			//updateLists 함수를 호출할 때
			//사용되는 id가 달라지면 다시 호출
			this.updateLists(this.props.id)
	}
}
//updateLists 함수 정의
updateLists = (id) => {
	fetchLists(id)
		.then((lists) => this.setState({
			lists
		}))
}

```

```jsx
// React Hooks를 이용한 생명주기 이용

useEffect(() => {
		fetchLists(id)
			.then((repos) => {
				setRepos(repos)
			})
}, [id])

// 하나씩 안해주고 한꺼번해 해도 됨
```

- 선명하게 코드가 간결해짐
    - classComponent 에서는 생명주기 이용시 componentDIdMount와 ComponentDidUpdate 그리고 compoenentWillUnmount 이렇게 다르게 처리를 해주지만 리액트 HOok사용시 useEffect안에ㅓ 모든 처리가 가능하기 때문

### Hooks를 통해 ···

- HOC 컴포넌트를 Custom React Hooks로 대체하여 Wrapper 컴포넌트를 줄이게 됨

### HOC (Higher Order Component)

- 화면에서 재사용 가능한 로직만을 분리해서 component로 만들고, 재사용 불가능한 UI와 같은 다른 부분들은 parameter로 받아서 처리하는 방법

```jsx
export default class Apnage extends Component {

	state = {
		user: []
	}

componentDidMount() {
	fetchUsers()
		.then(users => {
			this.setState({ users })
		})
{

render() {
		const { users } = this.state;
		return (
			<div>
				A페이지
				{user.map(({ name, url }) => (
					<div key={name}>
						<p> {name}, {url} </p>
					</div>
				))}
			</div>
		)
	}
}
```