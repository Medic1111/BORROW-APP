<template>
  <div id="app">    
    <router-view/>
    <sidebar-nav/>
  </div>
</template>

<script>
import SidebarNav from './components/SidebarNav.vue'

export default {
  components: {
    SidebarNav
  }
}
</script>


<style>
body {
  background-image: linear-gradient(to bottom left, #9ab85f, #9ab85f, #5F9AB8, #b85f9a);
  height: 98vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
