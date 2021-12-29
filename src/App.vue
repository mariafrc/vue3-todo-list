<template>
  <div class="content">
    <div class="header"></div>
    <TodoList />
  </div>
</template>

<script setup>
import TodoList from "./components/TodoList.vue";
</script>

<style lang="scss">
// global style here
:root {
  --background-color: #3a0ca3;
  --header-color: #7209b7;
  --todo-bg-color: #262438;
  --todo-item-color: #7209b7;
}
body {
  margin: 0px;
}
.content {
  // background: var(--background-color);
  height: 100vh;
  overflow: hidden;
  position: relative;
  .header {
    height: 30vh;
    // background: var(--header-color);
  }
}
</style>
