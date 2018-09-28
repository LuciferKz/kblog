<template>
  <section class="cate-filter">
    <h3>随笔分类</h3>
    <k-radio-group :options="categories" v-model="checkedOption"></k-radio-group>
  </section>
</template>

<script>
import KRadioGroup from '../form/KRadioGroup'
export default {
  name: 'KCateFilter',
  components: { KRadioGroup },
  data () {
    return {
      categories: [],
      checkedOption: null
    }
  },
  mounted () {
    this.$api.category.all().then((res) => {
      this.categories = res.data.categories.map((cat) => {
        return {
          text: cat.name,
          value: cat._id
        }
      })
    })
  },
  watch: {
    checkedOption (val) {
      this.$api.articles.fetch({
        query: {
          categoryId: val
        }
      }).then((res) => {
        console.log(res)
        this.$store.commit('filterArticles', res.data.articles)
        return res
      })
    }
  }
}
</script>
