<template lang="pug">
transition(name="fade")
  div(
    @mousedown="handleMouseDown",
    @mouseup="handleMouseUp",
    @touchstart="handleTouchStart",
    @touchend="handleTouchEnd"
  )
    slot
</template>

<script>
import { ref } from "vue";

export default {
  name: "Slider",
  props: {
    slidesLen: Number,
    currSlide: Number,
  },
  emits: ["updateSlide"],
  setup(props, { emit }) {
    let xInitial = ref(0);
    let yInitial = ref(0);

    const handleMouseDown = (e) => {
      xInitial.value = e.x;
      yInitial.value = e.y;
    };

    const handleMouseUp = (e) => {
      if (Math.abs(e.y - yInitial.value) > 35) {
        return;
      }

      if (Math.abs(e.x - xInitial.value) >= 50) {
        if (e.x - xInitial.value > 0) {
          prev();
        } else if (e.x - xInitial.value < 0) {
          next();
        }
      }
    };

    const handleTouchStart = (e) => {
      xInitial.value = e.changedTouches[0].clientX;
      yInitial.value = e.changedTouches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (Math.abs(e.changedTouches[0].clientY - yInitial.value) > 15) {
        return;
      }

      if (Math.abs(e.changedTouches[0].clientX - xInitial.value) >= 30) {
        if (e.changedTouches[0].clientX - xInitial.value > 0) {
          prev();
        } else if (e.changedTouches[0].clientX - xInitial.value < 0) {
          next();
        }
      }
    };

    const prev = () => {
      if (props.currSlide <= 0) {
        emit("updateSlide", props.slidesLen - 1);
      } else {
        emit("updateSlide", props.currSlide - 1);
      }
    };

    const next = () => {
      if (props.currSlide >= props.slidesLen - 1) {
        emit("updateSlide", 0);
      } else {
        emit("updateSlide", props.currSlide + 1);
      }
    };

    return {
      handleMouseDown,
      handleMouseUp,
      handleTouchStart,
      handleTouchEnd,
      prev,
      next,
      xInitial,
      yInitial,
    };
  },
};
</script>
