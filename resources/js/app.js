import Vue from "vue";

require('./bootstrap');
window.Vue = require('vue')
// Vue.component('mainapp',require('./components/mainapp.vue').default)
Vue.component('Akib',require('./components/Akib.vue').default)

const app = new Vue({
 el:'#app'
})
