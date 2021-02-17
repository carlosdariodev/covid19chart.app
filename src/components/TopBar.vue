<template>
  <div class="top-bar">
    <a>{{msg}}</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TopBar',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/scss/main.scss";

.top-bar{
  background-color: $top-bar-color;
  padding: 10px 16px;
  display: flex;
  align-items: center;
}

.top-bar a{
  color: $top-bar-font-color;
  font-family: $font-family;
  font-size: $font-size-small;
  line-height: $line-height-medium;
  display: inline-block;
  flex: 1;
  cursor: pointer;
  text-decoration: underline solid transparent;
  transition: text-decoration 0.2s ease-out;
  &:hover{
    text-decoration: underline solid $top-bar-font-color;
  }
}

</style>
