<template>
  <div class="graph">
    <svg width="1436" height="440" viewBox="0 0 1436 440" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 438L90.3771 401.582L168.026 383.879L253.849 340.886L380.54 355.555L481.688 313.573L533.795 245.796L609.401 193.193H714.125L802.502 129.968L907.227 101.643L1004.8 129.968L1068.14 101.643H1112.59L1164.7 32.348L1215.78 61.1787L1274.53 70.7889L1304.67 24.761H1388.45L1438 2" stroke="#F20B7A" stroke-width="2" stroke-dasharray="8 8"/>
      <path d="M2 438L95.6082 431.404L168.471 423.794L259.549 404.515L380.481 409.588L485.221 387.265L552.011 361.897L606.152 353.779L707.35 367.478L807.536 345.154L897.097 331.456L1012.97 353.779L1106.07 331.456L1154.14 302.029L1229.53 322.324L1281.14 294.419L1339.33 278.184L1383.35 241.147L1438 231" stroke="#F20B7A" stroke-width="2"/>
      <path d="M2 438L76.8865 430.848L145.701 409.394L222.612 418.078L326.846 404.286L388.576 422.675L503.942 398.156H594.008L651.691 362.909L738.722 347.584L834.86 368.528L886.471 341.965L963.887 347.584L1012.97 320.511L1090.89 304.165L1130.36 273.004L1167.8 286.797L1234.59 255.636L1314.03 266.364L1385.38 240.312L1438 202" stroke="#0A7FF3" stroke-width="2" stroke-dasharray="8 8"/>
      <circle cx="708" cy="193" r="4" fill="#F20B7A"/>
      <circle cx="708" cy="367" r="4" fill="#F20B7A"/>
      <circle cx="708" cy="354" r="4" fill="#0A7FF3"/>
      <svg width="180" height="36" viewBox="0 0 180 36" x="2" y="2">
        <rect x="1" y="1" width="176" height="32" rx="12" ry="12" stroke="#D0DAE4" stroke-width="2" fill="#FBFBFC"/>
        <text x="88" y="23" text-anchor="middle" fill="#495960">December 14th, 2021</text>
      </svg>
    </svg>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Graph',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "@/scss/main";

.graph{
  margin: main.$spacing-standard main.$spacing-standard 0;
  overflow: auto;
}

svg{
  overflow: hidden;
  display: block;
}

svg circle{
  cursor: pointer;
}

svg text{
  font-weight: main.$font-weigh-light;
  color: main.$table-element-font-color;
  font-size: main.$font-size-small;
}
</style>
