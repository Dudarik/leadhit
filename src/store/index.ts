import { createStore } from "vuex";

interface IStateData {
  date: string;
  visits: number;
}

export default createStore({
  state: {
    data: [] as IStateData[],
  },
  getters: {
    getData: (state) => state.data,
  },
  mutations: {
    setData(state, newData) {
      state.data = newData;
    },
  },
  actions: {},
  modules: {},
});
