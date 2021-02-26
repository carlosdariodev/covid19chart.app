<template>
  <div class="stats">
    <table>
      <thead>
        <th>
          Active
        </th>
        <th>
          <input type="text" placeholder="Search" v-on:input="changeFilter(msg)" v-model="msg"/>
        </th>
        <th>
          Color
        </th>
        <th>
          Show cases
        </th>
        <th>
          Show deaths
        </th>
        <th>
          New cases
        </th>
        <th>
          Total cases
        </th>
        <th>
          New deaths
        </th>
        <th>
          Total deaths
        </th>
        <th>
          New recovered
        </th>
        <th>
          Total recovered
        </th>
      </thead>
      <StatsRow v-for="el in this.$store.state.countries" v-bind:key="el.name" :active="el.active" :name="el.name" :color="el.color" :showCases="el.showCases" :showDeaths="el.showDeaths" :newCases="el.newCases" :totalCases="el.totalCases" :newDeaths="el.newDeaths" :totalDeaths="el.totalDeaths" :newRecovered="el.newRecovered" :totalRecovered="el.totalRecovered"/>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import StatsRow from '@/components/StatsRow.vue';
import { mapMutations } from 'vuex'

export default Vue.extend({
  name: 'Stats',
  components: {
    StatsRow,
  },
  methods: {
    ...mapMutations([
      'changeFilter',
    ]),
  },
  data() {
    return {
      msg: "",
    }
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
  display: flex;
  align-items: center;
  width: 100%;
  overflow: auto;
}

table{
  display: flex;
  flex-wrap: wrap;
  height: 400px;
  min-height: 400px;
  max-height: 400px;
  align-content: flex-start;
}

thead{
  width: 100%;
  display: grid;
  grid-template-columns: 34px minmax(120px, 1fr) 34px repeat(2, minmax(144px, 1fr)) repeat(6, minmax(168px, 1fr));
  position: sticky;
  top: 0;
  background-color: main.$component-background-color;
}

th{
  display: inline-block;
  border: none;
  text-align: center;
  color: main.$table-header-font-color;
  font-size: main.$font-size-small;
  font-weight: main.$font-weigh-regular;
  white-space: nowrap;
  &:nth-child(1), &:nth-child(3){
  max-height: 18px;
  margin: 6px 8px;
  visibility: hidden;
  }
  &:nth-child(2){
  text-align: left;
  font-weight: main.$font-weigh-light;
  margin: 4px 24px 4px 4px;
  }
  &:nth-child(n+4){
  margin: 4px 24px;
  }
  &:nth-child(2), &:nth-child(n+4){
  line-height: 22px;
  }
  &:nth-child(n+6){
  cursor: pointer;
  }
}

input{
  text-align: left;
  font-weight: main.$font-weigh-light;
  font-size: main.$font-size-small;
  display: inline-block;
  border: none;
  width: 100%;
  height: 100%;
  outline: none;
  color: main.$table-header-font-color;
  background-color: transparent;
  &::placeholder{
    opacity: 1;
  }
}
</style>
