import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{},
    url:'http://127.0.0.1:9090',
    show:true
  },
  mutations: {
    setUserInfo(state,userInfo){
      state.userInfo=userInfo
    },
    setShow(state,show){
      state.show=show
    }
  },
  actions: {
  },
  modules: {
  }
})
