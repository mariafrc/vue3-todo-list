<template>
  <div class="content">
    <TodoList />
  </div>
</template>

<script setup>
import TodoList from "./components/TodoList.vue";
</script>

<style lang="scss">
// global style here
:root {
  --background-color: #0e0f16;
  --text-primary: #050504;
  --text-secondary: #9da9fa;

  --todo-bg-color: #0f2147;
}
body {
  margin: 0px;
}
.content {
  background: var(--background-color);
  height: 100vh;
  overflow: hidden;
  position: relative;
}
</style>
