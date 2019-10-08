<template>
  <div id="app">
    <keep-alive>
    <router-view/>   
    </keep-alive>
   <main-tabbar></main-tabbar>   
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
