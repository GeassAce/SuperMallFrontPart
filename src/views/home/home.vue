<template>
  <div>
    <nav-bar class="navbar">
      <div slot="center">购物街</div>
    </nav-bar>
    <homeSwiper :banners="banner" />
    <recommandView :recommands="recommand"/>
    <h2>首页</h2>
    <p>这里是首页啊，你看到了吗</p>
        <h2>首页</h2>
    <p>这里是首页啊，你看到了吗</p>
        <h2>首页</h2>
    <p>这里是首页啊，你看到了吗</p>
        <h2>首页</h2>
    <p>这里是首页啊，你看到了吗</p>
        <h2>首页</h2>
    <p>这里是首页啊，你看到了吗</p>
        <h2>首页</h2>
    <p>这里是首页啊，你看到了吗</p>
        <h2>首页</h2>
    <p>这里是首页啊，你看到了吗</p>
        <h2>首页</h2>
    <p>这里是首页啊，你看到了吗</p>
        <h2>首页</h2>
    <p>这里是首页啊，你看到了吗</p>
        <h2>首页</h2>
    <p>这里是首页啊，你看到了吗</p>
        <h2>首页</h2>
    <p>这里是首页啊，你看到了吗</p>
        <h2>首页</h2>
    <p>这里是首页啊，你看到了吗</p>
        <h2>首页</h2>
    <p>这里是首页啊，你看到了吗</p>
        <h2>首页</h2>
    <p>这里是首页啊，你看到了吗</p>
        <h2>首页</h2>
    <p>这里是首页啊，你看到了吗</p>
        <h2>首页</h2>
    <p>这里是首页啊，你看到了吗</p>
        <h2>首页</h2>
    <p>这里是首页啊，你看到了吗</p>
        <h2>首页</h2>
    <p>这里是首页啊，你看到了吗</p>
        <h2>首页</h2>
    <p>这里是首页啊，你看到了吗</p>
        <h2>首页</h2>
    <p>这里是首页啊，你看到了吗</p>
        <h2>首页</h2>
    <p>这里是首页啊，你看到了吗</p>
  </div>
</template>

<script>
// 界面组件
import NavBar from 'components/common/navbar/navbar.vue'
import HomeSwiper from 'views/home/childView/homeSwiper.vue'
import RecommandView from 'views/home/childView/recommandView.vue'
// 网络请求
import homeRequest from 'networks/home/homeRequest.js'
export default {
  name: 'home',
  components: {
    NavBar,
    HomeSwiper,
    RecommandView
  },
  data () {
    return {
      banner: [],
      dkeyword: {},
      keywords: {},
      recommand: []
    }
  },
  created () {
    // 获取首页多种数据
    homeRequest.getHomeMultidata()
      .then((result) => {
        console.log(result)
        this.banner = result.data.banner.list
        this.dkeyword = result.data.dkeyword
        this.keywords = result.data.keywords
        this.recommand = result.data.recommend.list
        console.log(this.recommand)
      })
  }
}
</script>

<style scoped>
.navbar {
  background-color: var(--color-tint);
  color: white;
}
</style>
