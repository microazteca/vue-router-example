<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to my first project with Vue CLI and Vue Router" />
    <BeforeAndAfter></BeforeAndAfter>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import BeforeAndAfter from "@/components/BeforeAndAfter.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    BeforeAndAfter,
  },
};
</script>
