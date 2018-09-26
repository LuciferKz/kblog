import axios from 'axios'

let $http = axios.create({
  baseURL: 'http://api.zhangzhenkai.com'
})

let articles = {
  all () {
    return $http.get('/article/all')
  }
}

export default {
  articles
}
