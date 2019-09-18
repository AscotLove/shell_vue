<template>
  <div id="shade">
    <div class="container">
      <div class="shade-top">
        <h3>{{seller.name}}</h3>
        <div class="shade-score">
          <i class="start" v-for="(item, index) in startArray" :class="item" :key="index"></i>
        </div>
        <shade-line>
          <div class="message">优惠信息</div>
        </shade-line>
        <shade-list :seller="seller"></shade-list>
        <shade-line>
          <div class="message">商家公告</div>
        </shade-line>
      </div>
    </div>
    <div class="shade-footer"></div>


  </div>

</template>

<script>
  import lines from '../shade-line';
  import list from '../shade-list';
  const LENGTH = 5;
  const ON = "on";
  const OFF = "off";
  const HALF = "half";
  export default {
    name: "shade",
    components: {
      'shade-line': lines,
      'shade-list': list
    },
    data() {
      return {
        num: 1
      }
    },
    props: {
      seller: Object
    },
    computed: {
      startArray() {
        let startArr = [];
        let on = Math.floor(this.seller.score * 2) / 2;
        const half = on % 1 !== 0;
        on = Math.floor(on);
        for (let i = 0; i < on; i++) {
          startArr.push(ON)
        }
        if (half) {
          startArr.push(HALF)
        }
        while (startArr.length < LENGTH) {
          startArr.push(OFF)
        }
        return startArr
      },

    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/mixin.styl";
  @import "../../assets/extends.styl";
  #shade
    position fixed
    top 0
    left 0
    width 100%
    z-index 99
    background-color rgba(7, 17, 27, .8)
    height 100%
    font-size 12px
    color rgb(255, 255, 255)
    .container
      overflow auto
      height calc(100vh - 64px)
      .shade-top
        height 100%
        box-sizing border-box
        padding 64px 36px 16px
        h3
          font-size 16px
          font-weight 700
          line-height 16px
          text-align center
      .shade-score
          @extend.flex-ext
          justify-content center
          margin-top 16px
          .start
            width 24px
            height 24px
            margin-right 20px
            &:last-child
              margin-right 0
          .half
            icon-mixin(star24_half)
          .on
            icon-mixin(star24_on)
          .off
            icon-mixin(star24_off)
    .shade-footer
      background-color rgba(7, 17, 27, .8)
      width 100%
      height 64px
      position absolute
      left 0
      bottom 0
</style>