<template>
  <div class="tabswitchbar">
    <div class="tabswitchbarItem" v-for="(item,index) in titles"
    :key="index"
    :class="{active : index === currentIndex}"
    @click="changeTab(index,item)"
    >
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabswitchbar',
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    changeTab (index, item) {
      console.log(item)
      this.currentIndex = index
      // 传递给父组件
      this.$emit('changeGoodTab', item)
    }
  }
}
</script>

<style scoped>

.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 2px solid var(--color-tint);
}

.tabswitchbar{
  margin-top: 10px;
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
}
.tabswitchbarItem{
  flex: 1;
}
</style>
