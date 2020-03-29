<template>
  <div>
    <tab-bar>
      <tab-bar-item path='/home' activateFontColorStyle='deeppink'>
         <img slot="tabbarItemImg" src="~assets/img/tabbar/home.svg">
         <img slot="tabbarItemImgActivate" src="~assets/img/tabbar/home_active.svg">
         <div slot="tabbarItemText">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category' activateFontColorStyle='deeppink'>
         <img slot="tabbarItemImg" src="~assets/img/tabbar/category.svg">
         <img slot="tabbarItemImgActivate" src="~assets/img/tabbar/category_active.svg">
         <div slot="tabbarItemText">类别</div>
      </tab-bar-item>
      <tab-bar-item path='/shopcart' activateFontColorStyle='deeppink'>
         <img slot="tabbarItemImg" src="~assets/img/tabbar/shopcart.svg">
         <img slot="tabbarItemImgActivate" src="~assets/img/tabbar/shopcart_active.svg">
         <div slot="tabbarItemText">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile' activateFontColorStyle='deeppink'>
         <img slot="tabbarItemImg" src="~assets/img/tabbar/profile.svg">
         <img slot="tabbarItemImgActivate" src="~assets/img/tabbar/profile_active.svg">
         <div slot="tabbarItemText">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/tabbar.vue'
import TabBarItem from 'components/common/tabbar/tabbarItem.vue'

export default {
  name: 'MainTabbar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
