import Vue from 'vue'
import Table from './table/index'
import Form from './form/index'
import BreadCrumb from './breadCrumb/index'
import CopyRight from './copyright/index'

const components = [
    Table,
    Form,
    BreadCrumb,
    CopyRight,
]

components.forEach(item => {
    Vue.component(item.name, item)
})