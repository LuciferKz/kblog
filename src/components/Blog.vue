<template>
  <section class="content">
    <section class="blogs">
      <ul class="blog-ul">
        <router-link tag="li" :to="{ name:'Detail', params: { aid: article._id } }" v-for="article in articles" :key="article._id" @click="goDetail">
          <h2 class="title">{{ article.title }}</h2>
          <p class="date">{{ article.meta.createAt | formatDate }}</p>
          <!-- <section>
            <article v-html="article.content"></article>
          </section> -->
        </router-link>
      </ul>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      logo: 'logo',
      articles: []
    }
  },
  mounted () {
    this.$api.articles.all().then((res) => {
      console.log(res)
      this.articles = res.data.articles
    })
  },
  methods: {
    goDetail () {
      this.$router.go()
    }
  }
}
</script>

<style scoped>
  .blogs {
    padding: 20px 0;
  }

  .blog-ul li {
    padding: 10px 0;
    cursor: pointer;
  }

  .blog-ul li .title {
    padding-bottom: 10px;
  }

  .blog-ul li .date {
    padding-bottom: 20px;
    font-size: 14px;
  }

</style>
