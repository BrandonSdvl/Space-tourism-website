<template lang="pug">
section.view--technology
  h2.view__title 
    span.view__number 03 &nbsp;
    | Space launch 101
  .technology
    .technology__image-container
      Slider(
        v-show="currTechnology === idx",
        v-for="(tech, idx) in technology",
        :slidesLen="slidesLen",
        :currSlide="currTechnology",
        @updateSlide="updateSlide"
      )
        img.technology__img(:src="tech.images.landscape", draggable="false")
    nav.technology__nav
      ul.technology__list
        li.technology__list-item(
          v-for="(tech, idx) in technology",
          @click="currTechnology = idx",
          :class="{ 'technology__list-item--active': currTechnology === idx }"
        ) {{ idx + 1 }}
    .technology__content-container.disable-selection
      Slider.technology__content(
        v-show="currTechnology === idx",
        v-for="(tech, idx) in technology",
        :slidesLen="slidesLen",
        :currSlide="currTechnology",
        @updateSlide="updateSlide"
      )
        span THE TERMINOLOGY...
        h3.heading-3 {{ tech.name }}
        p.body-text {{ tech.description }}
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import Slider from "../components/Slider.vue";

export default {
  name: "Technology",
  components: {
    Slider,
  },
  setup() {
    const store = useStore();
    const currTechnology = ref(0);

    const updateSlide = (newSlide) => {
      currTechnology.value = newSlide;
    };

    return {
      technology: computed(() => store.state.technology),
      slidesLen: computed(() => store.state.technology.length),
      currTechnology,
      updateSlide,
    };
  },
};
</script>
