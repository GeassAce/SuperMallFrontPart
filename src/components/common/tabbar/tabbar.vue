<template>
  <div>
    <div class="tabbar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabbar'
}
</script>

<style scoped>
.tabbar{
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100,100,100,.2);
  width: 100%;
  z-index: 99;
}

</style>
