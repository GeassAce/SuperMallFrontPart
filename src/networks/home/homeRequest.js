import { requestForMain } from 'networks/httpRequest.js'

// 首页多种数据集合
function getHomeMultidata () {
  return requestForMain({
    method: 'get',
    url: '/home/multidata'
  })
}

function getHomeData () {
  return requestForMain({
    method: 'get',
    url: '/home/data?type=sell&page=3'
  })
}

/*
请求商品分页
*/
function getGoodListData (type, page) {
  return requestForMain({
    method: 'get',
    url: '/home/data',
    params: {
      type: type,
      page: page
    }
  })
}

const homeRequset = {
  getHomeMultidata,
  getHomeData,
  getGoodListData
}

export default homeRequset
