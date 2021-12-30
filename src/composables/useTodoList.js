import { computed, ref } from "vue";
import { useStore } from "vuex";

export function useTodoList() {
  const store = useStore();
  const filter = ref("all");

  function setFilter(value) {
    filter.value = value;
  }

  const todos = computed(function () {
    switch (filter.value) {
      case "active":
        return store.getters["todos/active"];

      case "completed":
        return store.getters["todos/completed"];

      default:
        return store.state.todos.all;
    }
  });

  return {
    todos,
    setFilter,
  }
}
