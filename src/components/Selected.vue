<template>
  <div class="selected">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Selected',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "@/scss/main";

.selected{
  border: main.$border-style;
  border-radius: main.$border-radius-big;
  background-color: main.$component-background-color;
  display: block;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  width: 100%;
}
</style>
