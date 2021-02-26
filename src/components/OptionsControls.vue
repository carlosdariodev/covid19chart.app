<template>
  <div class="optionscontrols">
    <OptionsButton color="red" text="RESET DATA"/>
    <OptionsButton color="blue" text="EXPORT DATA"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import OptionsButton from '@/components/OptionsButton.vue';

export default Vue.extend({
  name: 'OptionsControls',
  components: {
    OptionsButton,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "@/scss/main";

.optionscontrols{
  display:flex;
  justify-content: space-between;
  gap: 20px;
}
</style>
