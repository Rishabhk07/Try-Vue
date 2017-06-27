export default {
  state: {
    loggedIn: false,
    token: null
  },
  mutations: {
    logIn (state, token) {
      state.loggedIn = true
      state.token = token
    },
    logOut (state) {
      state.loggedIn = false
      state.token = undefined
    }
  },
  actions: {
    handleLoginLogout (context, value) {
      if (value) {
        // try to login via Axios here
        context.commit('logIn', value.token)
        console.log(value)
      } else {
        context.commit('logOut')
        console.log(value)
      }
    }
  }
}
