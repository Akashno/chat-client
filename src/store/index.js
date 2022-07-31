import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isRightSection:true,
    isLeftSection:true,
    member:null,
    room:null,
  },
  getters: {

    isLeftSection(state){
      return state.isLeftSection
    },
    isRightSection(state){
      return state.isRightSection
    },
    member(state){
      return state.member
    },
    room(state){
      return state.room
    }
  },
  mutations: {
    toggleRightSection(state){
      state.isRightSection = !state.isRightSection
    },
    toggleLeftSection(state){
      state.isLeftSection = !state.isLeftSection
    },
    setMember(state,payload){
      state.member = payload 
    },
    changeRoom(state,payload){
      state.room = payload
    }
  },
  actions: {
    toggleRightSection({commit}){
      commit('toggleRightSection')
    },

    toggleLeftSection({commit}){
      commit('toggleLeftSection')
    },
    setMember({commit},payload){
      commit('setMember',payload)
    },
    changeRoom({commit},payload){
      commit('changeRoom',payload)
    }
  },
  modules: {
  }
})
