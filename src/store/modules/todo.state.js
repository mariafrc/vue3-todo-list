import { v4 as uuidv4 } from "uuid";

// initial state
const state = () => ({
  all: [],
});

const getters = {};

const actions = {};

const mutations = {
  create(state, name) {
    state.all.push({
      id: uuidv4(),
      name,
      completed: false,
    });
  },
  delete(state, taskId) {
    state.all = state.all.filter((task) => task.id !== taskId);
  },
  toggleStatus(state, taskId) {
    const selectedTask = state.all.find((task => task.id === taskId));
    selectedTask.completed = !selectedTask.completed;
  }
};

export const todos = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
