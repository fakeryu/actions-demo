<template>
  <div id="app">
    <!-- <count />
    <person /> -->
    <ele />
  </div>
</template>

<script>
import 'animate.css'
// import count from './components/Count.vue'
// import count from './components/CountVuex.vue'
// import person from './pages/Person.vue'
import ele from './pages/ElementCom.vue'
export default {
  name: 'App',
  components: {
    ele
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
}
</style>
