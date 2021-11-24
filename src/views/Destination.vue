<template lang="pug">
section.view--destination
  h2.view__title 01 Pick your destination
  .destination
    .destination__image-container
      transition(name="fade", v-for="(destination, idx) in destinations")
        img.destination__img(
          :src="destination.images.png",
          v-show="currDestination === idx"
        )
    nav.destination__nav
      ul
        li(
          v-for="(destination, idx) in destinations",
          @click="currDestination = idx"
        ) {{ destination.name }}
    .destination__content-container
      transition(name="fade", v-for="(destination, idx) in destinations")
        .destination__content(v-show="currDestination === idx")
          .destination__details
            h2 {{ destination.name }}
            p {{ destination.description }}
          .destination__numbers
            div
              h3 Avg. distance
              span {{ destination.distance }}
            div
              h3 Est. travel time
              span {{ destination.travel }}
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";

export default {
  name: "Destination",
  setup() {
    const store = useStore();
    const currDestination = ref(0);

    return {
      destinations: computed(() => store.state.destinations),
      currDestination,
    };
  },
};
</script>
