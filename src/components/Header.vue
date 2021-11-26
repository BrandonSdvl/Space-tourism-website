<template lang="pug">
header.header
  img.header__logo(:src="require('../assets/shared/logo.svg')")
  img.header__hamburger(
    :src="require('../assets/shared/icon-hamburger.svg')",
    @click="showNav()"
  )
  NavBar(ref="nav", @showNav="showNav")
</template>

<script>
import { ref } from "vue";
import NavBar from "./NavBar.vue";
export default {
  name: "Header",
  components: {
    NavBar,
  },
  setup() {
    const nav = ref(null);

    const showNav = () => {
      if (!nav.value.$el.classList.contains("nav--show")) {
        nav.value.$el.classList.add("nav--show");
      } else {
        nav.value.$el.classList.remove("nav--show");
      }
    };

    return {
      showNav,
      nav,
    };
  },
};
</script>
