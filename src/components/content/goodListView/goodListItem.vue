<template>
  <div class="goodListInfo">
     <img :src="goodInfo.show.img" alt="" @load="loadImg">
     <div class="goodInfo">
       <p>{{goodInfo.title}}</p>
       <span class="price">{{goodInfo.price}}</span>
       <span class="collect">{{goodInfo.cfav}}</span>
     </div>
  </div>
</template>

<script>
export default {
  name: 'gooListItem',
  props: {
    goodInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    loadImg () {
      // 在事件总线上生命一个完成Img加载事件
      this.$bus.$emit('finishLoadImg')
    }
  }
}
</script>

<style scoped>
.goodListInfo{
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goodListInfo img{
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.goodInfo{
  font-size: 12px;
  overflow: hidden;
  text-align: center;
  bottom: 5px;
  right: 0px;
  left: 0px;
  position: absolute;
}

.goodInfo p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
.goodInfo .price {
    color: var(--color-high-text);
    margin-right: 20px;
}
.goodInfo .collect::before {
  content: "";
  position: absolute;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  width: 14px;
  height: 14px;
  right: 75px;
  top: 15px;
  margin-left:10px;
}

</style>
