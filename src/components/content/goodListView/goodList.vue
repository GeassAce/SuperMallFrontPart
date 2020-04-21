<template>
  <div class="goodList">
    <good-list-item v-for="(item,index) in goodList" :key="index" :goodInfo="item"/>
  </div>
</template>

<script>
/*
  子组件
  */
import GoodListItem from 'components/content/goodListView/goodListItem.vue'
export default {
  name: 'goodList',
  components: {
    GoodListItem
  },
  props: {
    goodList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style  scoped>
.goodList{
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
}
</style>
