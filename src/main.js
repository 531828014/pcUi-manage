import Vue from 'vue'
import App from './App.vue'
import router from 'router/index';
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import store from 'store/index';
import 'api/setting/index'
import 'sass/index.scss'
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');
Vue.config.productionTip = false
Vue.use(Antd)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
