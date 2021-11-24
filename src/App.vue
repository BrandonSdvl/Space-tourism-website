<template lang="pug">
Header
main
  router-view.view
</template>
<script>
import Header from "./components/Header.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  name: "App",
  components: {
    Header,
  },
  setup() {
    const route = useRoute();

    const currentRoute = computed(() => {
      document.body.classList = [];
      if (route.name) {
        document.body.classList.add(`body--${route.name.toLowerCase()}`);
        return route.name;
      } else {
        document.body.classList.add("body--home");
        return "Home";
      }
    });

    return {
      currentRoute,
    };
  },
};
</script>

<style lang="scss" src="./scss/styles.scss"></style>
