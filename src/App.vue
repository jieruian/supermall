<template>
  <div id="app">
     <main-tabbar></main-tabbar>
    <router-view/>
  </div>
</template>

<script>
import mainTabbar from 'components/content/maintabbar/mainTabbar'

export default {
    name: 'app',
    components: {
      mainTabbar

    }
  }
</script>

<style>
 @import "assets/css/base.css";
</style>
