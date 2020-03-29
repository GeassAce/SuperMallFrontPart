import { requestForMain } from 'networks/httpRequest.js'

// 首页多种数据集合
function getHomeMultidata () {
  return requestForMain({
    method: 'get',
    url: '/home/multidata'
  })
}

const homeRequset = {
  getHomeMultidata
}

export default homeRequset
