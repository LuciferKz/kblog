<template>
    <section id="wrap">
        <KHeader></KHeader>
        <section class="content">
            <section class="ability-diagram"></section>
            <section class="section-first"></section>
            <section class="section-second"></section>
            <section class="section-third"></section>
        </section>
        <footer id="footer">
        </footer>
    </section>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      logo: 'logo'
    }
  },
  mounted () {
    console.log(this.$api.articles)
    this.$api.articles.all().then((res) => {
      console.log(res)
    })
  }
}
</script>

<style scoped>
</style>
