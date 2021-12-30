<template>
  <div class="todo-item">
    <div>
      <q-checkbox v-model="checkboxModel" />
      <span :class="{ checked: checkboxModel }">
        {{ task.name }}
      </span>
    </div>
    <button @click="onDelete">delete</button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  props: {
    task: { type: Object, required: true },
  },
  setup(props) {
    const store = useStore();

    const checkboxModel = computed({
      get() {
        return props.task.completed;
      },
      set(value) {
        store.commit("todos/toggleStatus", props.task.id);
      },
    });

    function onDelete() {
      store.commit("todos/delete", props.task.id);
    }

    return { onDelete, checkboxModel };
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
  .checked {
    text-decoration: line-through;
  }
}
</style>
