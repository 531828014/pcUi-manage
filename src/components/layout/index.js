import Vue from 'vue'
import Pagination from './pagination/index'
import TablePage from './table-page/index'
const components = [
    Pagination,
    TablePage
]

components.forEach(item => {
    Vue.component(item.name, item)
})