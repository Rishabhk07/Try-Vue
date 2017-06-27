<template>
  <div id="app">
    <side-nav-bar></side-nav-bar>
    <top-tool-bar></top-tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import SideNavBar from '@/components/SideNav.vue'
  import TopToolBar from '@/components/TopToolBar.vue'
export default {
    components: {SideNavBar, TopToolBar},
    name: 'app'
}
</script>
<style>
</style>
