/**
* 页面：欢迎页
* Created by Administrator on 2018/8/3.
*/
<template>
    <div id="welcome">
      <transition name="fade" v-on:after-enter="toNext">
        <P v-if="show">欢迎使用Znote</P>
      </transition>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'welcome',
        components: {},
        created(){},
        mounted(){
          this.show = true
        },
        props: {},
        data(){
            return {
              show:false,
            }
        },
        computed: {},
        methods: {
          toNext(){
            this.show = false;
            this.$router.replace("/home");
          }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  #welcome{
    p{
      font-size: 40px;
      color: #333333;
    }
    .fade-enter-active{
      animation: fade-animation 3s;
    }
    @keyframes fade-animation {
      0%{
        opacity: 0;
        transform: scale(0);
      }
      60%{
        opacity: 1;
        transform: scale(1);
      }
      100%{
        opacity: 0;
      }
    }
  }
</style>

