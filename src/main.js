import Vue from 'vue'
import App from './App.vue'
import router from 'router/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from 'store/index';
import 'api/setting/index'
import 'sass/index.scss'
import 'components/index.js'
import VCharts from 'v-charts'

Vue.use(VCharts)
Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'mini' })

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
