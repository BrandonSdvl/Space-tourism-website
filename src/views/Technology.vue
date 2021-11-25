<template lang="pug">
section.view--technology
  h2.view__title 03 Space launch 101
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
      ul
        li(v-for="(tech, idx) in technology", @click="currTechnology = idx") {{ idx + 1 }}
    .technology__content-container.disable-selection
      Slider.technology__content(
        v-show="currTechnology === idx",
        v-for="(tech, idx) in technology",
        :slidesLen="slidesLen",
        :currSlide="currTechnology",
        @updateSlide="updateSlide"
      )
        span The terminology...
        h3 {{ tech.name }}
        p {{ tech.description }}
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
