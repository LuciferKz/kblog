import axios from 'axios'

let $http = axios.create({
  baseURL: 'http://api.zhangzhenkai.com'
})

let articles = {
  all () {
    return $http.get('/article/all')
  },
  fetchById (id) {
    return $http.get('/article/' + id)
  },
  fetch (query) {
    return $http.post('/article/fetch', query)
  }
}

let category = {
  all () {
    return $http.get('/category/all')
  }
}

export default {
  articles,
  category
}
