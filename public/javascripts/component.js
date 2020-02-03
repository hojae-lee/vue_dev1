Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var app_comp = new Vue({
    el: "#app_comp",
    data: {
        groceryList: [
            { id: 0, text: "삼겹살"},
            { id: 1, text: "돼지갈비"},
            { id: 2, text: "오리호박찜"},
            { id: 3, text: "뚝배기소고기"}
        ]
    }
});