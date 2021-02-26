<template>
  <div class="chart">
    <Graph/>
    <GraphDates/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Graph from '@/components/Graph.vue';
import GraphDates from '@/components/GraphDates.vue';

export default Vue.extend({
  name: 'Chart',
  components: {
    Graph,
    GraphDates,
  },
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "@/scss/main";

.chart{
  border: main.$border-style;
  border-radius: main.$border-radius-big;
  background-color: main.$component-background-color;
  display: block;
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  overflow: hidden;
}
</style>
