<template>
  <ul>
    <li v-for="item in items" :key="item.name">{{item.name}}</li>
  </ul>
</template>

<script>
  export default {
    name: "ele-goods",
    created: {

    }
  }
</script>

<style scoped>

</style>