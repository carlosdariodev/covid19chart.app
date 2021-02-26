<template>
  <div class="date">
    <div class="date-unit">
      <p>From</p>
      <DateButton msg="January 22nd, 2020"/>
    </div>
    <div class="date-unit">
      <p>to</p>
      <DateButton msg="February 16th, 2021"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DateButton from '@/components/DateButton.vue';

export default Vue.extend({
  name: 'Date',
  components: {
    DateButton,
  },
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "@/scss/main";

.date{
  border: main.$border-style;
  border-radius: main.$border-radius-big;
  background-color: main.$component-background-color;
  display: inline-block;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px 16px;
  justify-content: center;
}

.date-unit{
  display: inline-block;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: space-between;
  width: 100%;
  max-width: 274px;
  flex: 1;
}

p{
  color: main.$standard-font-color;
  font-family: main.$font-family;
  font-size: main.$font-size-small;
  font-weight: main.$font-weigh-regular;
  line-height: main.$line-height-medium;
  flex: 1;
  white-space: nowrap;
}

</style>
