<template>
  <div class="options">
    <Date/>
    <OptionsControls/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Date from '@/components/Date.vue';
import OptionsControls from '@/components/OptionsControls.vue';

export default Vue.extend({
  name: 'Options',
  components: {
    Date,
    OptionsControls,
  },
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "@/scss/main";

.options{
  display:flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  width: 100%;
  flex-wrap: wrap;
}
</style>
