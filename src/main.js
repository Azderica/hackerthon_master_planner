import Vue from 'vue'
// App.vue의 경로

import App from './App.vue'

new Vue({
    el: '#app',
    render: h => h(App),    // 첫세팅, 초반에는 모름
})
// error가 뜨면 아무것도 없어서 안뜨는 것 