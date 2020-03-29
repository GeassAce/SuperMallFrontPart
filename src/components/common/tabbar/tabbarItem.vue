<template>
    <div class="tabbar-item" @click='ClickToView'>
      <div v-if="!isActivate">
        <slot name="tabbarItemImg"></slot>
      </div>
        <div v-else>
        <slot name="tabbarItemImgActivate"></slot>
      </div>
      <div :style="tabbarTextStyle">
        <slot name="tabbarItemText"></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'tabbarItem',
  props: {
    path: {
      type: String
    },
    activateFontColorStyle: {
      type: String,
      default () {
        return 'red'
      }
    }
  },
  computed: {
    isActivate () {
      return this.$route.fullPath.indexOf(this.path) !== -1
    },
    tabbarTextStyle () {
      return this.isActivate ? { color: this.activateFontColorStyle } : {}
    }
  },
  methods: {
    ClickToView () {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style  scoped>
.tabbar-item{
  flex:1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tabbar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
}
</style>
