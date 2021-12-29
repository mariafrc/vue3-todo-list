<template>
  <input v-model="inputModel" type="text" name="todo" @keyup.enter="onAdd" />
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const inputModel = ref("");

    function onAdd(e) {
      console.log("add");
      store.commit("todos/create", inputModel.value);
      inputModel.value = "";
      e.target.blur();
    }

    return {
      inputModel,
      onAdd,
    };
  },
};
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  /* margin: 1rem; */
  padding: 0.3rem;
  /* border-radius: 0.3rem; */
  box-sizing: border-box;
}
</style>
