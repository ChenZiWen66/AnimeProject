import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import uuid from 'uuid'

Vue.prototype.$uuid = uuid;
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
