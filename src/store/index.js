
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    SideNavBarItems: [
      {values: 'Jobs'},
      {values: 'Companies'},
      {values: 'Students'}
    ]
  }
})
