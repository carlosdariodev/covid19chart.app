<template>
  <div class="footer">
    <footer>{{msg}}</footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Footer',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "@/scss/main";

.footer{
  padding: 10px 4px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
}

footer{
  color: main.$footer-font-color;
  font-family: main.$font-family;
  font-size: main.$font-size-small;
  font-weight: main.$font-weigh-regular;
  line-height: main.$line-height-medium;
  display: inline-block;
}
</style>
