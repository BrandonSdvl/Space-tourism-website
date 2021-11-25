<template lang="pug">
section.view--crew
  h2.view__title 02 Meet your crew
  .crew
    .crew__image-container
      Slider(
        v-show="currCrew === idx",
        v-for="(crewmate, idx) in crew",
        :slidesLen="slidesLen",
        :currSlide="currCrew",
        @updateSlide="updateSlide"
      )
        img.crew__img(
          :src="crewmate.images.png || crewmate.images.webp",
          draggable="false"
        )
    nav.crew__nav
      ul
        li(v-for="(crewmate, idx) in crew", @click="currCrew = idx")
    .crew__content-container.disable-selection
      Slider.crew__content(
        v-show="currCrew === idx",
        v-for="(crewmate, idx) in crew",
        :slidesLen="slidesLen",
        :currSlide="currCrew",
        @updateSlide="updateSlide"
      )
        span {{ crewmate.role }}
        h3 {{ crewmate.name }}
        p {{ crewmate.bio }}
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import Slider from "../components/Slider.vue";

export default {
  name: "Crew",
  components: {
    Slider,
  },
  setup() {
    const store = useStore();
    const currCrew = ref(0);

    const updateSlide = (newSlide) => {
      currCrew.value = newSlide;
    };

    return {
      crew: computed(() => store.state.crew),
      slidesLen: computed(() => store.state.crew.length),
      currCrew,
      updateSlide,
    };
  },
};
</script>
