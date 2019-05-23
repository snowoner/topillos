import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    score: 0
  },
  mutations: {
    add1(state) {
      state.score++;
    },
    add50(state) {
      state.score += 50;
    }
  },
  actions: {
    
  },
  getters: {
    getScore(state) {
      return state.score;
    }
  }
});
