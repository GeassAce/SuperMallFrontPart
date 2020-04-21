<template>
  <div class="recommandView">
     <div class="recommandItem" v-for="(item,index) in recommands" :key="index">
       <a :href="item.link">
         <img class="recomandItemImg" :src="item.image" alt="">
         <div class="recommandItemText">{{item.title}}</div>
       </a>
     </div>
  </div>
</template>

<script>
export default {
  name: 'ReCommandView',
  props: {
    recommands: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style  scoped>
.recommandView {
  width: 100%;
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 1px 0px 5px 0px;
  font-size: 12px;
  text-align: center;
  box-shadow: 0px 5px 1px  rgba(100,100,100,.2);
}
.recommandItem {
  flex: 1;
}
.recommandItem img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>
