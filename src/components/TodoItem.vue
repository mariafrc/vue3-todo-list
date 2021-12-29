<template>
  <div class="todo-item">
    <span>{{ task.name }}</span>
    <button @click="onDelete">delete</button>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  props: {
    task: { type: Object, required: true },
  },
  setup(props) {
    const store = useStore();

    function onDelete() {
      store.commit("todos/delete", props.task.id);
    }

    return { onDelete };
  },
};
</script>

<style lang="scss" scoped>
.todo-item {
  padding: 1rem;
  color: #fff;
  margin: 0.3rem;
  border-radius: 0.3rem;
  background: #3c3958;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
