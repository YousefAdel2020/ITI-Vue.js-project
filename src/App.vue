<template>

<navbar/>
<router-view></router-view>
<footercomponet/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import navbar from './components/navbar.vue'
import homecomponent from './components/homecomponent.vue'
import footercomponet from './components/footercomponet.vue'
import shopcomponent from './components/shopcomponent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    navbar,
    homecomponent,
    footercomponet,
    shopcomponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
 
}
</style>
