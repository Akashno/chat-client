import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isRightSection:true
  },
  getters: {
    isRightSection(state){
      return state.isRightSection
    }
  },
  mutations: {
    toggleRightSection(state){
      state.isRightSection = !state.isRightSection
    }
  },
  actions: {
    toggleRightSection({commit}){
      commit('toggleRightSection')
    }
  },
  modules: {
  }
})
