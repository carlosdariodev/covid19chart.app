<template>
  <div class="optionsbuttons">
    <button :class="color">{{text}}</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'OptionsButtons',
  props: {
    color: String,
    text: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "@/scss/main";

button{
  width: 220px;
  height: 36px;
  margin: 0;
  border: none;
  border-radius: main.$border-radius-big;
  cursor: pointer;
  color: $button-font-color;
  font-family: main.$font-family;
  font-size: main.$font-size-small;
  font-weight: main.$font-weigh-medium;
  line-height: main.$line-height-medium;
  white-space: nowrap;
  transition: background-color 0.1s ease-out;
}

.red{
  $background-color: main.$button-red-color;
  background-color: $background-color;
  &:hover{
    background-color: scale-color($background-color, $blackness: 6%);
  }
}

.blue{
  $background-color: main.$button-blue-color;
  background-color: $background-color;
  &:hover{
    background-color: scale-color($background-color, $blackness: 6%);
  }
}
</style>
