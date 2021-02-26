<template>
  <div class="home">
    <TopBar link="https://www.paypal.com/donate?hosted_button_id=8RCZJZPSN9H72" msg="Please consider making a donation to support this website"/>
    <Content/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TopBar from '@/components/TopBar.vue';
import Content from '@/components/Content.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    TopBar,
    Content,
  },
});
</script>

<style lang="scss">
@use "@/scss/main.scss";
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
</style>