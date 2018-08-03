<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
      this.jumpNext();
  },
  data(){
    return {}
  },
  methods: {
      jumpNext(){
          this.$router.replace("/welcome");
      }
  }
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
  }
</style>
