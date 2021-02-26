<template>
  <div class="datebutton">
    <button>{{msg}}</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DateButton',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "@/scss/main";

button{
  width: 220px;
  height: 36px;
  border: main.$border-style;
  border-radius: main.$border-radius-big;
  background-color: main.$button-grey-color;
  cursor: pointer;
  color: main.$standard-font-color;
  font-family: main.$font-family;
  font-size: main.$font-size-small;
  font-weight: main.$font-weigh-regular;
  line-height: main.$line-height-medium;
  white-space: nowrap;
  transition: background-color 0.1s ease-out;
  &:hover{
    background-color: scale-color(main.$button-grey-color-hover, $blackness: 4%);
  }
}
</style>
