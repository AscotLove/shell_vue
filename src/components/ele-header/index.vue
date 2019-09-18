<template>
  <div id="ele-header">
    <div class="ele-header-top">
      <img :src="seller.avatar" alt="">
      <img class="bg-img" :src="seller.avatar" alt="">
      <div class="seller-data">
        <h3 class="seller-name">
          <i class="seller-name-img"></i>
          {{seller.name}}
        </h3>
        <p class="seller-description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</p>
        <p class="seller-supports" v-if="seller.supports && seller.supports.length">
          <i class="seller-supports-img" :class="iconClass[seller.supports[0].type]"></i>
          <span>
          {{seller.supports[0].description}}
          </span>
        </p>
      </div>
      <div class="supports-length" v-if="seller.supports && seller.supports.length" @click="showMask = true">
      <span>
        {{seller.supports.length}}个
      </span>
        <i class="iconfont icon">
          &#xe603;
        </i>
        <i></i>
      </div>

    </div>

    <div class="seller-bulletin" @click="showMask = true">
      <i class="seller-bulletin-img"></i>
      <span>
         {{seller.bulletin}}
      </span>
      <i class="iconfont icon">
        &#xe603;
      </i>
    </div>

    <seller-Mask :seller="seller"></seller-Mask>
  </div>

</template>

<script>
  import shade from '../shade'

  export default {
    name: "ele-header",
    data() {
      return {
        iconClass: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
        showMask: false
      }
    },
    props: {
      seller: Object
    },
    components: {
      "seller-Mask": shade
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/mixin.styl";
  @import "../../assets/extends.styl";
  #ele-header
    box-sizing border-box
    font-size 10px
    color rgb(255, 255, 255)
    background-color rgba(7, 17, 27, .5)
    .ele-header-top
      @extend.flex-ext
      flexMixin(wrap, space-between)
      position relative
      padding 24px 12px 18px 24px
      img
        width 64px
        height 64px
        border-radius 2px
        margin-right 16px
      .bg-img
        width 100%
        height 100%
        z-index -1
        filter blur(10px)
        position absolute
        left 0
        top 0
      .seller-data
        flex 1
        .seller-name
          @extend.flex-ext
          font-size 16px
          line-height 18px
          color rgb(255, 255, 255)
          font-weight bold
          margin 2px 0 8px
          .seller-name-img
            width 30px
            height 18px
            margin-right 6px
            icon-mixin(brand)
        .seller-description
          font-size 12px
          color rgb(255, 255, 255)
          font-weight 200
        .seller-supports
          @extend.flex-ext
          margin 10px 0 2px
          line-height 12px
          .seller-supports-img
            width 12px
            height 12px
            margin-right 4px
            margin-top 1px
            &.decrease
              icon-mixin(decrease_1)
            &.discount
              icon-mixin(discount_1)
            &.special
              icon-mixin(special_1)
            &.guarantee
              icon-mixin(guarantee_1)
            &.invoice
              icon-mixin(invoice_1)
          span
            color rgb(255, 255, 255)
            font-weight 200
      .supports-length
        position absolute
        right 12px
        height 24px
        line-height 24px
        font-weight 200
        background rgba(0, 0, 0, .2)
        border-radius 14px
        text-align center
        padding 0 5px 0 10px
        @media screen and (-webkit-device-pixel-ratio: 2)
          bottom 36px
        @media screen and (-webkit-device-pixel-ratio: 3)
          bottom 18px
    .seller-bulletin
      @extend.flex-ext
      align-items center
      padding 0 12px
      height 28px
      .seller-bulletin-img
        icon-mixin(bulletin)
        flex-shrink 0
        margin-right 4px
        width 22px
        height 12px
      span
        overflow hidden
        white-space nowrap
        text-overflow ellipsis


</style>