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