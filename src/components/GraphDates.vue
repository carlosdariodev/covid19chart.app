<template>
  <div class="graph-dates">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'GraphDates',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "@/scss/main";

.graph-dates{
  border-top: main.$border-style;
  background-color: main.$component-background-color;
  display: block;
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0 main.$spacing-standard;
}
</style>
