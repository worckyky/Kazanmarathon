<template>
  <router-link :to="route" class="Button">
    <slot/>
  </router-link>
</template>

<script>
  export default {
    props: {
      route: {
        default: '/'
      }
    }
  }
</script>

<style scoped lang="scss">
@import "assets/styles/variables";
  .Button {
    padding: 16px 24px;
    background-color: $yellow;
    border: 1px solid $yellow;
    color: $black;
    font-size: 20px;
    line-height: 24px;
    text-decoration: none;
    width: fit-content;
    -webkit-transition: ease-in-out 0.2s;
    -moz-transition: ease-in-out 0.2s;
    -ms-transition: ease-in-out 0.2s;
    -o-transition: ease-in-out 0.2s;
    transition: ease-in-out 0.2s;
    &:hover {
      background-color: transparent;
      border: 1px solid $yellow;
    }
  }
</style>
