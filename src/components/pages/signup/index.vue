<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs6 md6 offset-md3 offset-xs3>
        <v-card>
          <v-toolbar class="red darken-4" light>
            <v-toolbar-title>Signup</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <span class="title">Enter Info</span>
            <v-text-field
              label="name"
              v-model="name"
            ></v-text-field>
            <v-text-field
              label="email"
              v-model="email"
            ></v-text-field>
            <v-text-field
              label="password"
              v-model="password"
              type="password"
            ></v-text-field>
            <v-btn @click.native="signup" success light center>Signup</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import API from '@/http'
  export default {
    name: 'login',
    data: () => ({
      name: '',
      email: '',
      password: ''
    }),
    methods: {
      signup () {
        API.post('/signup/user', {
          name: this.name,
          email: this.email,
          password: this.password
        }).then((response) => {
          console.log(JSON.stringify(response))
        })
      }
    }
  }
</script>
