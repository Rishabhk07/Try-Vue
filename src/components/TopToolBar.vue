<template>
  <v-toolbar class="danger" light>
    <v-toolbar-title>Hiring Blocks</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn v-if="loggedIn" v-on:click.native="loginToggle(false)" class="accent-1"dark >
      SignOut
    </v-btn>
    <v-btn v-else v-on:click.native="loginToggle(true)" class="accent-1"dark >
      SignIn
    </v-btn>
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
