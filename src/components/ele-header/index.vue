<template>
  <div id="ele-header">
    <img src="" alt="">
  </div>
</template>

<script>

  export default {
    name: "ele-header",
    components: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "src/assets/mixin.styl";
#ele-header
  flexMixin(nowrap, space-around)
  background-color rgba(7, 17, 27 ,.5)
</style>