<template>
  <div class="route-child">
    <h1>My life before and after Vue Router</h1>
    <div class="nav">
      <router-link to="#/:before">Before</router-link> |
      <router-link to="#/:after">After</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

