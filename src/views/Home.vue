<template>
  <div class="home">
    <TopBar msg="Please consider making a donation to support this website"/>
    <date/>
    <stats/>
    <selected/>
    <chart/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TopBar from '@/components/TopBar.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    TopBar,
  },
});
</script>

<style lang="scss">
@import "@/scss/main.scss";

#app {
  font-family: $font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>