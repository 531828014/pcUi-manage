import Vue from 'vue'
import Table from './table/index'
const components = [
    Table
]

components.forEach(item => {
    Vue.component(item.name, item)
})