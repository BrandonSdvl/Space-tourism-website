<template lang="pug">
nav.nav
  img(
    :src="require('../assets/shared/icon-close.svg')",
    @click="$emit('showNav')"
  )
  router-link(to="/") 00 Home
  router-link(to="/destination") 01 Destination
  router-link(to="/crew") 02 Crew
  router-link(to="/technology") 03 Technology
</template>

<script>
export default {
  name: "NavBar",
  emits: ["showNav"],
};
</script>
