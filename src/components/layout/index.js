import Vue from 'vue'
import Pagination from './pagination/index'
import TablePage from './table-page/index'
import FormInfo from './form-info/index'
const components = [
    Pagination,
    TablePage,
    FormInfo
]

components.forEach(item => {
    Vue.component(item.name, item)
})