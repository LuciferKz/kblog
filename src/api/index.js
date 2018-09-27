import axios from 'axios'

let $http = axios.create({
  baseURL: 'http://api.zhangzhenkai.com'
})

let articles = {
  all () {
    return $http.get('/article/all')
  },
  getById (id) {
    return $http.get('/article/' + id)
  }
}

export default {
  articles
}
