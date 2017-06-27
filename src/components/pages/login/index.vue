<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 md6 offset-md3>
        <v-card>
          <v-toolbar class="indigo" light>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <span class="title">Enter Info</span>
            <v-text-field
              label="email"
              class="mt-5"
            ></v-text-field>
            <v-text-field
              label="password"
              type="password"
            ></v-text-field>
            <v-btn >Login</v-btn>
            <v-btn>RESET</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
