<details>
<summary> 리액트에서 불변성 지키기 </summary>
<div markdown="1">

<b>불변성이란</b> : 메모리 영역에서 값이 변하지 않는 것 <br />
<b>리액트에서 왜 불편성?</b> : 리액트는 상태 업데이트를 하는 원리로 얕은 비교를 수행, 불변성을 지킴으로써 사이드 이펙트를 방지하고 효율적으로 상태를 업데이트 할 수 있도록 함. <br />
<b>불변성 지키는 법</b> : spread operator, map, filter, slice, reduce 메소드로 새로운 주소 값을 가진 객체를 생성하여 상태를 업데이트 !

</div>
</details>
