/**
* 主界面
* Created by Administrator on 2018/8/2.
*/
<template>
    <div id="home">
      <el-container class="content">
        <el-aside class="left">
          <h5>菜单列表</h5>
          <el-menu background-color="#333333" text-color="#ffffff">
            <el-submenu v-for="index in 20" :key="index" :index="index">
              <template slot="title">选项{{index}}</template>
              <el-menu-item v-for="itemIndex in 2" :key="itemIndex" :index="index+'-'+itemIndex">选项{{index+'-'+itemIndex}}</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container class="right">
          <el-header class="right-title">这里是题目</el-header>
          <el-main class="right-content">这里是内容……</el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'home',
        components: {},
        created(){

        },
        props: {},
        data(){
            return {
                apiData: {}
            }
        },
        computed: {},
        methods: {}
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  #home{
    width: 100%;
    height: 100%;
    .content{
      width: inherit;
      height: inherit;
      .left{
        width: 25%;
        height: 100%;
        background-color: #333333;
        h5{
          @include center;
          height: 70px;
          color: white;
          font-size: 24px;
        }
      }
      .left::-webkit-scrollbar{
        display: none;
      };
      .right{
        width: 75%;
        height: 100%;
        .right-title{
          border-bottom: 1px dashed #333333;
          font-size: 24px;
          padding: 10px;
        }
        .right-content{
          padding: 10px;
        }
      }
    }
  }
</style>

