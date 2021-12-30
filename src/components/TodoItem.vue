<template>
  <div class="todo-item">
    <div class="item-text">
      <q-checkbox v-model="checkboxModel" class="checkbox" />
      <span :class="{ checked: checkboxModel }">
        {{ task.name }}
      </span>
    </div>
    <q-icon class="icon" @click="onDelete" name="close" />
  </div>
  <q-separator />
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
  padding: 0.5rem;
  color: #fff;
  margin: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .checkbox {
    margin-right: 1rem;
  }
  .checked {
    text-decoration: line-through;
    color: var(--text-secondary);
  }
  .icon {
    cursor: pointer;
    font-size: 1.5rem;
  }
}
</style>
