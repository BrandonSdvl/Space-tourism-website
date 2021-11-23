<template lang="pug">
nav.nav
  img(
    :src="require('../assets/shared/icon-close.svg')",
    @click="$emit('showNav')"
  )
  router-link(to="/") Home
  router-link(to="/destination") Destination
  router-link(to="/crew") Crew
  router-link(to="/technology") Technology
</template>

<script>
export default {
  name: "NavBar",
  emits: ["showNav"],
};
</script>
