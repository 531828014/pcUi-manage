import Vue from 'vue'
import Table from './table/index'
import Form from './form/index'
import BreadCrumb from './breadCrumb/index'
import CopyRight from './copyright/index'
import ConditionSearch from './condition-search/index'

const components = [
    Table,
    Form,
    BreadCrumb,
    CopyRight,
    ConditionSearch
]

components.forEach(item => {
    Vue.component(item.name, item)
})