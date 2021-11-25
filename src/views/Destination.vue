<template lang="pug">
section.view--destination
  h2.view__title 01 Pick your destination
  .destination
    .destination__image-container
      Slider(
        v-show="currDestination === idx",
        v-for="(destination, idx) in destinations",
        :slidesLen="slidesLen",
        :currSlide="currDestination",
        @updateSlide="updateSlide"
      )
        img.destination__img(
          :src="destination.images.png || destination.images.webp",
          draggable="false"
        )
    nav.destination__nav
      ul
        li(
          v-for="(destination, idx) in destinations",
          @click="currDestination = idx"
        ) {{ destination.name }}
    .destination__content-container.disable-selection
      Slider.destination__content(
        v-show="currDestination === idx",
        v-for="(destination, idx) in destinations",
        :slidesLen="slidesLen",
        :currSlide="currDestination",
        @updateSlide="updateSlide"
      )
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
import Slider from "../components/Slider.vue";

export default {
  name: "Destination",
  components: {
    Slider,
  },
  setup() {
    const store = useStore();
    const currDestination = ref(0);

    const updateSlide = (newSlide) => {
      currDestination.value = newSlide;
    };

    return {
      destinations: computed(() => store.state.destinations),
      slidesLen: computed(() => store.state.destinations.length),
      currDestination,
      updateSlide,
    };
  },
};
</script>
