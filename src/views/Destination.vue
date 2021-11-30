<template lang="pug">
section.view--destination
  h2.view__title
    span.view__number 01 &nbsp;
    | Pick your destination
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
      .destination__indicator(ref="indicator")
      ul.destination__list
        li.destination__list-item(
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
          h2.destination__name {{ destination.name }}
          p.body-text {{ destination.description }}
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
import { computed, ref, onMounted, watch, onUnmounted } from "vue";
import Slider from "../components/Slider.vue";

export default {
  name: "Destination",
  components: {
    Slider,
  },
  setup() {
    const store = useStore();
    let currDestination = ref(0);
    const indicator = ref(null);
    let items = [];

    onMounted(() => {
      window.addEventListener("resize", moveIndicator);
      items = document.querySelectorAll(".destination__list-item");
    });

    onUnmounted(() => {
      window.removeEventListener("resize", moveIndicator);
    });

    watch(currDestination, () => {
      moveIndicator();
    });

    const updateSlide = (newSlide) => {
      currDestination.value = newSlide;
    };

    const moveIndicator = () => {
      indicator.value.style.left = `${
        items[currDestination.value].getBoundingClientRect().left
      }px`;
      indicator.value.style.width = `${
        items[currDestination.value].clientWidth
      }px`;
    };

    return {
      destinations: computed(() => store.state.destinations),
      slidesLen: computed(() => store.state.destinations.length),
      indicator,
      currDestination,
      updateSlide,
    };
  },
};
</script>
