<template>
  <section class="content">
    <section class="crumbs">
      <router-link :to="{ name: 'Blog' }">Blog</router-link> > {{ article.title }}
    </section>
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
      this.$api.articles.fetchById(this.$route.params.aid).then((res) => {
        this.article = res.data.article
      })
    } else {
      throw Error('没有文章id')
    }
  }
}
</script>

<style>
  .crumbs {
    padding-bottom: 15px;
    border-bottom: 1px solid #eff1f2;
  }

  .main-article {
    padding: 20px 0;
  }

  .main-article h1 {
    font-size: 24px;
  }
</style>
