import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    articles: []
  },
  mutations: {
    filterArticles (state, articles) {
      state.articles = articles
    }
  },
  actions: {
  },
  getters: {
  }
})

export default Store
