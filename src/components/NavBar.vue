<template lang="pug">
nav.nav
  img(
    :src="require('../assets/shared/icon-close.svg')",
    @click="$emit('showNav')"
  )
  ul
    li
      router-link(to="/") 00 Home
    li
      router-link(to="/destination") 01 Destination
    li
      router-link(to="/crew") 02 Crew
    li
      router-link(to="/technology") 03 Technology
</template>

<script>
export default {
  name: "NavBar",
  emits: ["showNav"],
};
</script>
