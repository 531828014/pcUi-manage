import Vue from 'vue'
import Table from './table/index'
import Form from './form/index'
const components = [
    Table,
    Form
]

components.forEach(item => {
    Vue.component(item.name, item)
})