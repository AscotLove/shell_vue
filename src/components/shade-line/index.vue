<template>
  <div id="lines">
    <div class="lineShade"></div>
    <slot >
      <div>优惠</div>
    </slot>
    <div class="lineShade"></div>
  </div>
</template>

<script>
  export default {
    name: "lines"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/extends.styl";
#lines
  @extend.flex-ext
  margin 28px 0 24px
  align-items center
  .message
    font-size 15px
    font-weight 700
    margin 0 12px
  .lineShade
    flex 1
    height 1px
    background-color rgba(255, 255, 255, .2)
</style>