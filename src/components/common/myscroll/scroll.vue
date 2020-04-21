<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
     <slot>
     </slot>
    </div>
  </div>
</template>

<script>
// 导入betterScroll
import BScroll from 'better-scroll'
export default {
  name: 'bScroll',
  data () {
    return {
      bscroll: null// better-scroll对象
    }
  },
  props: {
    // 是否开启scroll内原型元素的监听事件
    isClick: {
      type: Boolean,
      default () {
        return false
      }
    },
    // 是否监听bscroll
    probeType: {
      type: Number,
      default () {
        return 0
      }
    },
    // 是否监听上拉加载事件
    pullUpload: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  mounted () {
    // 在挂载虚拟DOM之后来初始化BScroll
    this.bscroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: this.isClick,
      pullUpLoad: this.pullUpload
    })

    // 监听坐标
    this.bscroll.on('scroll', (position) => {
      this.$emit('scrollXY', position)
    })
    // 监听上拉到底
    this.bscroll.on('pullingUp', () => {
      console.log('父组件加载')
      this.$emit('scrollPullingUp')
    })
  },
  methods: {
    scrollToPosition (x, y, time) {
      this.bscroll && this.bscroll.scrollTo(x, y, time)
    },
    finishPullUpLoad () {
      this.bscroll && this.bscroll.finishPullUp()
    },
    refresh () {
      console.log('执行了')
      this.bscroll && this.bscroll.refresh()
    }
  }
}
</script>

<style scoped>

</style>
