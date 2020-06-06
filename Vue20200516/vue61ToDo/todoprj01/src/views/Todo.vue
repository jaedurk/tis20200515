<template>
  <div class="about">
    <h1>This is an todo page</h1>
    <todo-header></todo-header>
  </div>
</template>
<script>
import TodoHeader from "@/components/todo/TodoHeader.vue";
export default {
  /* npdtmc^2w */
  data() {
    return {};
  },
  components: {
    "todo-header": TodoHeader,
  },
};
</script>
