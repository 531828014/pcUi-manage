import Vue from 'vue'
import Vuex from 'vuex'
import {saveUserInfo, getUserInfo, saveServerAddress, getServerAddress, saveSystemParameter, getSystemParameter} from 'utils/storage'
import {createDept} from 'model/department'
Vue.use(Vuex)

const state = {
    userInfo: getUserInfo(), // 用户信息
    serverAddress: getServerAddress(), // 服务器ip地址
    sysPrams: getSystemParameter(), // 系统参数
    menuIndex: 0, //菜单导航数组，默认下标0
}
const getters = {
    userName(state) {
        return state.userInfo.userName
    },
    defaultDept(state) {
        return createDept({
            id: state.userInfo.deptId,
            name: state.userInfo.deptName
        })
    },
}
const mutations = {
    setUserInfo(state, info) {
        state.userInfo = Object.assign(state.userInfo, info)
    },
    setServerAddress(state, address) {
        state.serverAddress = address
    },
    setSystemParameter(state, parameter) {
        state.sysPrams = parameter
    },
    setMenuIndex(state, index) {
        state.menuIndex = index
    }
}
const actions = {
    saveUserInfo({commit}, info) {
        commit('setUserInfo', saveUserInfo(info))
    },
    saveServerAddress({commit}, address) {
        commit('setServerAddress', saveServerAddress(address))
    },
    saveSystemParameter({commit}, parameter) {
        commit('setSystemParameter', saveSystemParameter(parameter))
    }
}

export default new Vuex.Store({
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
});