<template>
  <div class="backToTop" v-show="isShow">
      <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'backToTop',
  props: {
    isShow: {
      type: Boolean,
      default () {
        return false
      }
    }
  }
}
</script>

<style scoped>
.backToTop{
position: fixed;
bottom: 55px;
right: 23px;
}
.backToTop img{
  width: 43px;
  height: 43px;
}
</style>
