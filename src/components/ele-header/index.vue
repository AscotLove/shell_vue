<template>
  <div id="ele-header">
    <img :src="seller.avatar" alt="">
    <div class="seller-data">
      <h3 class="seller-name">{{seller.name}}</h3>
      <p class="seller-description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</p>
      <p class="seller-supports" v-if="seller.supports && seller.supports.length">
        <i class="seller-supports-img"></i>
        <span>
          {{seller.supports[0].description}}
        </span>
      </p>
    </div>
  </div>
</template>

<script>

  export default {
    name: "ele-header",
    props: {
      seller: Object
    },
    components: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/mixin.styl";
  @import "../../assets/extends.styl";
#ele-header
  @extend.flex-ext
  flexMixin(nowrap,space-between)
  background-color rgba(7, 17, 27 ,.5)
  padding 24px 12px 18px 24px
  img
    width 64px
    height 64px
    border-radius 2px
    margin-right 16px
  .seller-data
    flex 1
    .seller-name

      font-size 16px
      color rgb(255, 255, 255)
      font-weight bold
      margin 2px 0 8px
    .seller-description
      font-size 12px
      color rgb(255, 255, 255)
      font-weight 200
    .seller-supports
      margin 10px 0 2px
      font-size 10px
</style>