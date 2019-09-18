<template>
  <ul id="list">
    <li v-for="item in seller.supports" :key="item">
      <i class="seller-supports-img"  :class="iconClass[item.type]"></i>
      <span>
        {{item.description}}
      </span>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "list",
  props: {
    seller: Object
  },
    data() {
      return {
        iconClass: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
</style>