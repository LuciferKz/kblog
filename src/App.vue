<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import '@/assets/css/reset.css'
import '@/assets/css/transition.css'

export default {
  name: 'App'
}
</script>

<style>
#app {
  max-width: 1400px;
  height: 100%;
  margin-top: 60px;
  text-align: center;
  color: #2c3e50;
}
#wrap {
  height: 100%;
  margin: 0 20px;
}
</style>
