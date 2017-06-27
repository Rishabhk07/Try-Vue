<template>
<v-navigation-drawer permanent clipped light>
  <v-list dense class="pt-0">
    <v-list-item v-for="navItem in navItems">
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title >{{ navItem.values }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list-item>
  </v-list>
</v-navigation-drawer>
</template>

<script>
import store from '@/store'
export default {
  name: 'side-navbar',
  computed: {
    navItems () {
      return store.state.SideNavBarItems
    }
  }
}
</script>
