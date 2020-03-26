# vue_dev1

1. vue.js란
웹 페이지 화면을 개발하기 위한 프론트앤드 프레임워크이다. 
컨트롤러 대신 뷰 모델을 가지고 있으며 MVVM (Model-View-ViewModel)패턴을 기반으로 디자인되었으며 컴포넌트를 사용하여 재사용이 가능한 UI들을 묶고 뷰레이러를 정리하는 것을 가장 강력한 기능으로 꼽는다.
데이터 바인딩: 뷰에 표시되는 내용과 모델의 데이터를 동기화
뷰 모델(ViewModel): 뷰와 모델의 중간 영역, 돔리스너와 데이터 바인딩을 제공하는 영역.
돔리스너(DOMListener): 동의 변경 내역에 대해 즉각적으로 반응하여 특정 로직을 수행하는 장치.
컴포넌트 기반 프레임워크로 코드의 재사용이 쉽고 HTML 코드에서 화면의 구조를 직관적으로 파악 가능하다.

2. 리액트과 앵귤러의 장점을 가진 프레임워크
앵귤러의 양방향 데이터 바인딩과 리액트의 단방향 데이터 흐름의 장점을 모두 결합한 프레임워크
- 양방향 데이터 바인딩: 뷰에 표시되는 값과 모델 데이터 값이 동기화되어 한 쪽이 변경시 다른 한 쪽도 변경되는 것.
리액트와 마찬가지로 가상돔을 사용하여 빠른 렌더링방식 적용
- 가상돔을 사용시 돔 요소가 변경이 일어나도 화면 전체를 다시 그리지 않고 화면을 갱신함.

3. 밑에 사이트로 들어가 Vue.js를 공부할 수 있다.
우선 Vue.js는 편하고 보기좋게 사용 할 수 있도록 개선 중이고 부담 없이 입문하기 쉬운 프레임워크이다.
매우 친절한 프레임워크임으로 한 번 시작해보자.

https://kr.vuejs.org/v2/guide/


```js
var app = new Vue({
    el: '#app',
    data: {
        message: 'HelloWold Vue!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '마우스 잘올렸어!'+new Date() +" 로드 된 시간" 
    }
});
```
