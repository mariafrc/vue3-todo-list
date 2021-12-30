import { v4 as uuidv4 } from "uuid";

// initial state
const state = () => ({
  all: [],
});

const getters = {
  active(state) {
    return state.all.filter((task) => task.completed === false)
  },
  completed(state) {
    return state.all.filter((task) => task.completed === true)
  }
};

const actions = {};

const mutations = {
  create(state, name) {
    state.all.push({
      id: uuidv4(),
      name,
      completed: false,
    });
  },
  toggleStatus(state, taskId) {
    const selectedTask = state.all.find((task => task.id === taskId));
    selectedTask.completed = !selectedTask.completed;
  },
  delete(state, taskId) {
    state.all = state.all.filter((task) => task.id !== taskId);
  },
  clearCompleted(state) {
    state.all = state.all.filter((task) => task.completed === false)
  }
};

export const todos = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
