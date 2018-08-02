<template>
  <div id="app">
    <transition name="fade">
      <P>欢迎使用Znote</P>
    </transition>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "~SCSS/index";
</style>
<style rel="stylesheet/scss" lang="scss" scoped>
  #app{
    @include center;
    position: fixed;
    width: 100%;
    height: 100%;
    p{
      font-size: 40px;
      color: #333333;
    }
    .fade-enter-active, .fade-leave-active {
      transition: all 3s ease;
    }
    .fade-enter, .fade-leave-to{
      opacity: 0;
    }
  }
</style>
