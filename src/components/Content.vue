<template>
  <div class="content">
    <!--<Options/>-->
    <Stats/>
    <Chart/>
    <!--<Selected/>-->
    <Footer msg="Copyright © 2020 covid19chart.app All rights reserved."/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
//import Options from '@/components/Options.vue';
import Stats from '@/components/Stats.vue';
import Chart from '@/components/Chart.vue';
//import Selected from '@/components/Selected.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
  name: 'Content',
  components: {
    //Options,
    Stats,
    Chart,
    //Selected,
    Footer,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "@/scss/main";

.content{
  margin: 40px auto 0;
  max-width: 1600px;
  display: flex;
  flex-wrap: wrap;
  padding: main.$spacing-standard;
  gap: 40px;
}
</style>
