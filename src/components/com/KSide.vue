<template>
  <section class="side-content">
    <k-cate-filter></k-cate-filter>
  </section>
</template>

<script>
import KCateFilter from './KCateFilter'

export default {
  name: 'KSide',
  components: { KCateFilter },
  data () {
    return {
    }
  }
}
</script>

<style>
  .side-content h3 {
    padding-bottom: 10px;
  }
</style>
