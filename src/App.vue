<template>
  <div id="app">
    <section id="wrap">
      <KHeader></KHeader>
      <router-view/>
      <footer id="footer"></footer>
    </section>
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
  color: #2c3e50;
}
#wrap {
  height: 100%;
  margin: 0 20px;
}
.content {
  min-height: 100%;
  margin: 70px 0 20px;
  background-color: #FFF;
}
</style>
