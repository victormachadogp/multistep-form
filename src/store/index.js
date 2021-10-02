import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fullName: "",
    cpf: "",
  },
  mutations: {
    setFullName(state, payload) {
      state.fullName = payload.fullName;
    },
    setCpf(state, payload) {
      state.cpf = payload.cpf;
    },
  },
  actions: {},
  modules: {},
});
