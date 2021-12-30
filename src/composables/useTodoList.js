import { computed, ref } from "vue";
import { useStore } from "vuex";

export function useTodoList() {
  const store = useStore();
  const filter = ref("All");

  function setFilter(value) {
    filter.value = value;
  }

  const todos = computed(function () {
    switch (filter.value) {
      case "Active":
        return store.getters["todos/active"];

      case "Completed":
        return store.getters["todos/completed"];

      default:
        return store.state.todos.all;
    }
  });

  return {
    todos,
    filter,
    setFilter,
  }
}
