<template lang="pug">
nav.nav
  img.nav__icon-close(
    :src="require('../assets/shared/icon-close.svg')",
    @click="$emit('showNav')"
  )
  ul.nav__list
    .nav__indicator(ref="indicator")
    li.nav__item
      router-link.nav__link(to="/")
        span.nav__number 00 &nbsp;
        | Home
    li.nav__item
      router-link.nav__link(to="/destination")
        span.nav__number 01 &nbsp;
        | Destination
    li.nav__item
      router-link.nav__link(to="/crew")
        span.nav__number 02 &nbsp;
        | Crew
    li.nav__item
      router-link.nav__link(to="/technology")
        span.nav__number 03 &nbsp;
        | Technology
</template>

<script>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "NavBar",
  emits: ["showNav"],
  setup() {
    const indicator = ref(null);
    const route = useRoute();

    watch(route, () => {
      moveIndicator();
    });

    const moveIndicator = () => {
      switch (route.name) {
        case "Home":
          indicator.value.style.top = "0";
          break;
        case "Destination":
          indicator.value.style.top = "25%";
          break;
        case "Crew":
          indicator.value.style.top = "50%";
          break;
        case "Technology":
          indicator.value.style.top = "75%";
          break;
        default:
          indicator.value.style.top = "0";
          break;
      }
    };

    return {
      indicator,
      moveIndicator,
    };
  },
};
</script>
