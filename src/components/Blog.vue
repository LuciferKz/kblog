<template>
  <section class="content">
    <section class="blogs">
      <ul class="blog-ul">
        <router-link tag="li" :to="{ name:'Detail', params: { aid: article._id } }" v-for="article in articles" :key="article._id" @click="goDetail">
          <h2 class="title">{{ article.title }}</h2>
          <p class="date">{{ article.meta.createAt | formatDate }}</p>
        </router-link>
      </ul>
    </section>
    <section class="side-container">
      <k-side></k-side>
    </section>
  </section>
</template>

<script>
import KSide from './com/KSide'

export default {
  name: 'Index',
  components: { KSide },
  data () {
    return {
      logo: 'logo',
      articles: [],
    }
  },
  mounted () {
    this.$api.articles.all().then((res) => {
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
    flex: 1;
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

  .side-container {
    width: 200px;
    padding: 10px 10px 10px 20px;
    border-left: 1px solid #eff1f2;
  }

</style>
