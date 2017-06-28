<template>
  <v-toolbar class="red darken-2" light>
    <v-toolbar-title>Hiring Blocks</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-toolbar-item v-if="loggedIn" v-on:click.native="loginToggle(false)" class="accent-1"dark >
      <v-btn>SignOut</v-btn>
    </v-toolbar-item  >
      <v-toolbar-item v-else>
        <router-link  to="login" ><v-btn>SignIn</v-btn></router-link>
        <router-link  to="signup" ><v-btn>SignUp</v-btn></router-link>

      </v-toolbar-item>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  import store from '@/store'
  export default {
    name: 'TopToolBar',
    computed: {
      loggedIn () {
        return store.state.user.loggedIn
      }
    },
    methods: {
      loginToggle (value) {
        store.dispatch('handleLoginLogout', value)
        console.log('Rishabh Khanna')
      }
    }
  }
</script>
