import axios from 'axios'

// 主要请求服务器
function requestForMain (config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 请求拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })

  // 返回拦截器
  instance.interceptors.response.use(result => {
    return result.data
  }, err => {
    console.log('请求返回错误')
    console.log(err)
  })

  return instance(config)
}

export { requestForMain }
