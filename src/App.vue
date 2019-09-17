<template>
  <div id="app">
    <shell-header></shell-header>
    <nav class="app-nav">
      <router-link to="goods">商品</router-link>
      <router-link to="ratings">评价</router-link>
      <router-link to="seller">商家</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

import '../public/css/style.css';
import header from './components/ele-header';
export default {
  name: 'app',
  components: {
    "shell-header": header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "./assets/mixin.styl";
  #app
    .app-nav
      flexMixin(row nowrap,space-around)
      line-1px(rgba(7, 17, 27, .1))
      height 40px
      line-height 40px
      > a
        color rgb(77, 85 ,93)
        text-align center
        font-size 14px
        display block
        width 100%
        height 100%
        &.active
          color rgb(240, 20, 20)
</style>
