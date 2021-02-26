import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filterString: "",
    countries: {
      spain :{
        active: false,
        name: "Spain",
        color: "",
        showCases: false,
        showDeaths: false,
        newCases: 13151,
        totalCases: 7637217367,
        newDeaths: 1234,
        totalDeaths: 124215,
        newRecovered: 21412,
        totalRecovered: 124124,
      },
        germany :{
        active: false,
        name: "Germany",
        color: "",
        showCases: false,
        showDeaths: false,
        newCases: 13151,
        totalCases: 6217367,
        newDeaths: 1234,
        totalDeaths: 124215,
        newRecovered: 21412,
        totalRecovered: 124124,
      },
    }
  },
  mutations: {
    changeFilter(state, x){
      state.filterString = x;
    }
  },
  actions: {
  },
  modules: {
  }
})
