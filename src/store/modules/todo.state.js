import { v4 as uuidv4 } from "uuid";

// initial state
const state = () => ({
  all: [],
});

const getters = {};

const actions = {};

const mutations = {
  setTodos(state, todos) {
    state.all = todos;
  },
  create(state, name) {
    state.all.push({
      id: uuidv4(),
      name,
      completed: false,
    });
  },
  delete(state, id) {
    state.all = state.all.filter((todo) => todo.id !== id);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
