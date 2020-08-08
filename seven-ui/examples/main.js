import Vue from 'vue'
import App from './App.vue'
import SevenUI from '../packages'
Vue.config.productionTip = false
Vue.use(SevenUI)

new Vue({
    render: h => h(App)
}).$mount('#app')