<template>
  <tr class="stats-row" :class="{invisible: filterRow(name, this.$store.state.filterString)}">
    <td><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="9" r="8" fill="#F9FBFD" stroke="#D0DAE4" stroke-width="2"/>
    <path d="M5 9.5L8 12L13.5 6" stroke="#D0DAE4" stroke-width="2"/>
    </svg></td>
    <td :title="`${name}`">{{name}}</td>
    <td><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="16" height="16" rx="3" fill="#F9FBFD" stroke="#D0DAE4" stroke-width="2"/>
    </svg>
    </td>
    <td><svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="38" height="14" rx="7" stroke="#D0DAE4" stroke-width="2"/>
    <circle cx="8" cy="8" r="5" fill="#D0DAE4"/>
    </svg>
    </td>
    <td><svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="38" height="14" rx="7" stroke="#D0DAE4" stroke-width="2"/>
    <circle cx="8" cy="8" r="5" fill="#D0DAE4"/>
    </svg>
    </td>
    <td>{{numberWithCommas(newCases)}}</td>
    <td>{{numberWithCommas(totalCases)}}</td>
    <td>{{numberWithCommas(newDeaths)}}</td>
    <td>{{numberWithCommas(totalDeaths)}}</td>
    <td>{{numberWithCommas(newRecovered)}}</td>
    <td>{{numberWithCommas(totalRecovered)}}</td>
  </tr>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'StatsRow',
  components: {
  },
  props: {
    active: Boolean,
    name: String,
    color: String,
    showCases: Boolean,
    showDeaths: Boolean,
    newCases: Number,
    totalCases: Number,
    newDeaths: Number,
    totalDeaths: Number,
    newRecovered: Number,
    totalRecovered: Number,
  },
  methods: {
    numberWithCommas(x: number) {
      return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },
    filterRow(a: string, b: string){
      const c = new RegExp(""+b, "i");
      const d = a.match(c);
      return (d ? false : true);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "@/scss/main";

.stats{
  border: main.$border-style;
  border-radius: main.$border-radius-big;
  background-color: main.$component-background-color;
  display: block;
  padding: 12px 16px;
  display: flex;
  align-items: center;
}

.invisible{
  display: none;
}

tr{
  width: 100%;
  display: grid;
  grid-template-columns: 34px minmax(120px, 1fr) 34px repeat(2, minmax(144px, 1fr)) repeat(6, minmax(168px, 1fr));
}

td{
  white-space: nowrap;
  display: inline-block;
  border: none;
  overflow: hidden;
  text-align: center;
  &:nth-child(1), &:nth-child(3){
    max-height: 18px;
    margin: 6px 8px;
  }
  &:nth-child(2){
  text-align: left;
  font-weight: main.$font-weigh-light;
    margin: 4px 24px 4px 4px;
  }
  &:nth-child(4), &:nth-child(5){
    max-height: 16px;
    margin: 7px 0;
  }
  &:nth-child(n+6){
    margin: 4px 24px;
  }
  &:nth-child(2), &:nth-child(n+6){
  line-height: 22px;
  color: main.$table-element-font-color;
  font-size: main.$font-size-small;
  font-weight: main.$font-weigh-light;
  }
}

svg:hover{
  cursor: pointer;
}
</style>
