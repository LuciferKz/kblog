<template>
  <section class="content">
    <section class="main-article">
      <h1>{{ article.title }}</h1>
      <article v-html="article.content"></article>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      article: {}
    }
  },
  mounted () {
    if (this.$route.params.aid) {
      this.$api.articles.getById(this.$route.params.aid).then((res) => {
        this.article = res.data.article
      })
    } else {
      throw Error('没有文章id')
    }
  }
}
</script>

<style>
  .main-article {
    padding: 20px
  }
</style>
