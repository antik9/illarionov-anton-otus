import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterApp from './vue/Router.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
    render: function(createElement) {
        return createElement(RouterApp)
    }
}).$mount('#app')
