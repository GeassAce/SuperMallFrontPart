<template>
  <div class="home">
    <nav-bar class="navbar">
      <div slot="center">购物街</div>
    </nav-bar>
    <bscroll ref = "bscroll"
    class = "scrollContent"
    :isClick = "true"
    :probeType = "3"
    :pull-upload = "true"
    @scrollXY = "getScrollPosition"
    @scrollPullingUp = "loadMoreGoods">
    <homeSwiper :banners="banner" />
    <recommandView :recommands="recommand"/>
    <featureRecommand/>
    <tab-switch-bar @changeGoodTab = "changeGoodView"  class="tabswitchbar" :titles = goodTypes />
    <good-list :goodList="currentGoods"/>
    </bscroll>
    <back-to-top  @click.native="toTopClick" :isShow = "isShowToTopBtn"/>
  </div>
</template>

<script>
/*
工具类
*/
import Utils from 'common/utils.js'
/*
独立组件
*/
import NavBar from 'components/common/navbar/navbar.vue'
import TabSwitchBar from 'components/content/tabswitchbar/tabswitchbar.vue'
import GoodList from 'components/content/goodListView/goodList.vue'
import Bscroll from 'components/common/myscroll/scroll.vue'
import BackToTop from 'components/content/backToTop/backToTop.vue'
/*
子页面组件
*/
import HomeSwiper from 'views/home/childView/homeSwiper.vue'
import RecommandView from 'views/home/childView/recommandView.vue'
import FeatureRecommand from 'views/home/childView/featureRecommand.vue'
/*
网络请求
*/
import homeRequest from 'networks/home/homeRequest.js'
export default {
  name: 'home',
  components: {
    NavBar,
    HomeSwiper,
    RecommandView,
    FeatureRecommand,
    TabSwitchBar,
    GoodList,
    Bscroll,
    BackToTop
  },
  data () {
    return {
      banner: [],
      dkeyword: {},
      keywords: {},
      recommand: [],
      goodLists: {
        sell: {
          page: 0,
          list: []
        },
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        }
      },
      currentGoodType: 'pop',
      goodTypes: [
        {
          title: '流行',
          type: 'pop'
        },
        {
          title: '新款',
          type: 'new'
        },
        {
          title: '精选',
          type: 'sell'
        }
      ],
      currentScrollPosition: null,
      isShowToTopBtn: false
    }
  },
  created () {
    // 获取首页多种数据
    this.getHomeMultidata()
    this.getGoodListData('pop')
    this.getGoodListData('new')
    this.getGoodListData('sell')
  },
  mounted () {
    const refresh = Utils.debounce(this.$refs.bscroll.refresh, 500)
    this.$bus.$on('finishLoadImg', () => {
      console.log('ddd')
      refresh()
    })
  },
  methods: {
    /*
    事件监听方法
    */
    changeGoodView (data) {
      console.log('父组件' + data)
      this.currentGoodType = data.type
    },
    getScrollPosition (position) {
      // console.log('监听位置中')
      this.currentScrollPosition = position
      // console.log(this.currentScrollPosition)
      // 决定是否显示返回顶部按钮
      this.isShowToTopBtn = (-position.y) > 1000
    },
    toTopClick () {
      console.log('准备回去')
      this.$refs.bscroll.scrollToPosition(0, 0, 500)
    },
    loadMoreGoods () {
      // 加载数据
      console.log('开始加载')
      this.getGoodListData(this.currentGoodType)
      const finishFunc = this.$refs.bscroll.finishPullUpLoad
      setTimeout(function () {
        finishFunc()
      }, 2000)
    },
    /*
    网络请求方法
    */
    getHomeMultidata () {
      homeRequest.getHomeMultidata()
        .then((result) => {
          console.log('222222')
          console.log(result)
          this.banner = result.data.banner.list
          this.dkeyword = result.data.dkeyword
          this.keywords = result.data.keywords
          this.recommand = result.data.recommend.list
          console.log(this.recommand)
        })
    },
    getGoodListData (type) {
      const page = this.goodLists[type].page + 1
      homeRequest.getGoodListData(type, page)
        .then(result => {
          this.goodLists[type].list.push(...result.data.list)
          this.goodLists[type].page += 1
          console.log(this.goodLists[type])
        })
    }
  },
  computed: {
    currentGoods () {
      return this.goodLists[this.currentGoodType].list
    }
  }
}
</script>

<style scoped>
.home{
  padding-top: 44px;
  position: relative;
  height: 100vh;
}
.tabswitchbar{
  position: sticky;
  top: 44px;
  background-color: #ffffff;
  z-index: 9;
}
.navbar {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  right: 0px;
  left: 0px;
  top: 0px;
  z-index: 9;
}
.scrollContent{
position:absolute;
top:44px;
right: 0px;
left: 0px;
bottom: 49px;
overflow: hidden;
}
</style>
