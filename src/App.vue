<template>
  <div id="app">
    <side-nav-bar></side-nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import SideNavBar from '@/components/SideNav.vue'
export default {
    components: {SideNavBar},
    name: 'app'
}
</script>
<style>
</style>
