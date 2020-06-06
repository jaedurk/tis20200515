<template>
  <div class="about">
    <h1>This is an signup page</h1>
    <user-register></user-register>
  </div>
</template>
<script>
// @ is src. @: 절대 경로
import UserRegister from "@/components/user/UserRegister.vue";
export default {
  /* npdtmc^2w */
  components: {
    "user-register": UserRegister,
  },
};
</script>
<style lang="stylus" scoped></style>
