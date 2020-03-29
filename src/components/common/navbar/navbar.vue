<template>
  <div class="navbar">
    <div class="navbarItem navbarItemLeft">
      <slot name="left"></slot>
    </div>
    <div class="navbarItem navbarCenter">
      <slot name="center"></slot>
    </div>
    <div class="navbarItem navbarItemRight">
      <slot name="right"></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style scoped>
 .navbar{
   border: 10 black solid;
   height: 44px;
   line-height: 44px;
   display: flex;
   text-align: center;
   box-shadow: 0 1px 1px rgba(100,100,100,.1);
 }
 .navbarItem {
   flex: 1;
 }
 .navbarItemLeft .navbarItemRight {
   width: 60px;
 }
</style>
