
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import UserModule from './modules/user'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: UserModule
  },
  state: {
    SideNavBarItems: [
      {values: 'Jobs'},
      {values: 'Companies'},
      {values: 'Students'}
    ]
  },
  plugins: [
    createPersistedState({
      getState: (key) => Cookies.getJSON(key),
      setState: (key, state) => Cookies.set(key, state, {
        expires: 3
      }),
      reducer (state) {
        return {
          user: state.user
        }
      }
    })
  ]
})
