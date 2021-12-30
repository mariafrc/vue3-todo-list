<template>
  <div class="todo-list">
    <TodoInput />
    <div class="list-container">
      <TodoItem v-for="todo in todos" :key="todo.id" :task="todo" />
    </div>
    <div class="footer">
      <span>{{ taskLeft }} left</span>
      <div class="filter-buttons">
        <button @click="setFilter('all')">All</button>
        <button @click="setFilter('active')">Active</button>
        <button @click="setFilter('completed')">Completed</button>
      </div>

      <button @click="clearCompleted">Clear completed</button>
    </div>
  </div>
</template>

<script>
import TodoInput from "./TodoInput.vue";
import TodoItem from "./TodoItem.vue";

import { computed } from "vue";
import { useStore } from "vuex";

import { useTodoList } from "../composables/useTodoList";

export default {
  components: { TodoInput, TodoItem },
  setup() {
    const store = useStore();
    const { setFilter, todos } = useTodoList();

    const taskLeft = computed(function () {
      return store.getters["todos/active"].length;
    });

    function clearCompleted() {
      store.commit("todos/clearCompleted");
    }

    return {
      todos,
      taskLeft,
      setFilter,
      clearCompleted,
    };
  },
};
</script>

<style lang="scss">
.todo-list {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40vw;
  height: 80vh;
  // background: var(--todo-bg-color);
  display: flex;
  flex-direction: column;
  .list-container {
    flex-grow: 1;
    padding-top: 2rem;
    overflow: auto;
    background: var(--todo-bg-color);
  }
  .footer {
    background: var(--todo-bg-color);
    display: flex;
    padding: 1rem;
    align-items: center;
    .filter-buttons {
      margin-left: 3rem;
      flex-grow: 1;
    }
  }
}
</style>
