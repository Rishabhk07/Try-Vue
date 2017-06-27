export default {
  state: {
    loggedIn: false
  },
  mutations: {
    logIn (state) {
      state.loggedIn = true
    },
    logOut (state) {
      state.loggedIn = false
    }
  },
  actions: {
    handleLoginLogout (context, value) {
      if (value) {
        // try to login via Axios here
        context.commit('logIn')
        console.log(value)
      } else {
        context.commit('logOut')
        console.log(value)
      }
    }
  }
}
