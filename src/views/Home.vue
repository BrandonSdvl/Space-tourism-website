<template lang="pug">
section.view--home
  div
    p So, you want to travel to
    h1 Space
    p Let’s face it; if you want to go to space, you might as well genuinely go to
      | outer space and not hover kind of on the edge of it. Well sit back, and relax
      | because we’ll give you a truly out of this world experience!

  router-link(to="/destination") Explore
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
