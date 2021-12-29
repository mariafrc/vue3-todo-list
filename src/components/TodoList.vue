<template>
  <div class="todo-list">
    <TodoInput />
    <div class="list-container">
      <TodoItem v-for="todo in todos" :key="todo.id" :task="todo" />
    </div>
  </div>
</template>

<script>
import TodoInput from "./TodoInput.vue";
import TodoItem from "./TodoItem.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  components: { TodoInput, TodoItem },
  setup() {
    const store = useStore();

    const todos = computed(function () {
      return store.state.todos.all;
    });

    return { todos };
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
  background: var(--todo-bg-color);
  overflow: hidden;
  .list-container {
    margin-top: 2rem;
  }
}
</style>
