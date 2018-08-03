import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const welcome = {path:'/welcome', component:(resolve) => {require(['VIEWS/welcome'],resolve)}};//欢迎页
const home = {path:'/home', component:(resolve) => {require(['VIEWS/home'],resolve);}};//主页面

export default new Router({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'active',
  routes: [
    welcome,
    home
  ]
})
