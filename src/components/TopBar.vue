<template>
  <div class="top-bar">
    <a :href="link" target="_blank">{{msg}}</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TopBar',
  props: {
    msg: String,
    link: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "@/scss/main";

.top-bar{
  background-color: main.$top-bar-color;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  text-align: center;
}

.top-bar a{
  color: main.$top-bar-font-color;
  font-family: main.$font-family;
  font-size: main.$font-size-small;
  font-weight: main.$font-weigh-regular;
  line-height: main.$line-height-medium;
  display: inline-block;
  flex: 1;
  cursor: pointer;
  text-decoration: underline solid transparent;
  transition: text-decoration 0.1s ease-out;
  &:hover{
    text-decoration: underline solid main.$top-bar-font-color;
  }
}

</style>
