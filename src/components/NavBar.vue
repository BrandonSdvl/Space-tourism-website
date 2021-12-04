<template lang="pug">
nav.nav
  img.nav__icon-close(
    :src="require('../assets/shared/icon-close.svg')",
    @click="$emit('showNav')"
  )
  ul.nav__list(ref="navList")
    .nav__indicator(ref="indicator")
    li.nav__item
      router-link.nav__link(to="/", @click="handleClick")
        span.nav__number 00 &nbsp;
        | Home
    li.nav__item
      router-link.nav__link(to="/destination", @click="handleClick")
        span.nav__number 01 &nbsp;
        | Destination
    li.nav__item
      router-link.nav__link(to="/crew", @click="handleClick")
        span.nav__number 02 &nbsp;
        | Crew
    li.nav__item
      router-link.nav__link(to="/technology", @click="handleClick")
        span.nav__number 03 &nbsp;
        | Technology
</template>

<script>
import { ref, watch, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "NavBar",
  emits: ["showNav"],
  setup(props, { emit }) {
    const indicator = ref(null);
    const navList = ref(null);
    const route = useRoute();
    let screenWidth = ref(window.screen.width);
    let navX = 0;
    let items = [];

    onMounted(() => {
      window.addEventListener("resize", handleResize);
      navX = navList.value.getBoundingClientRect().x;
      items = document.querySelectorAll(".nav__item");
    });

    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });

    watch(route, () => {
      moveIndicator();
    });

    const handleResize = () => {
      screenWidth.value = window.screen.width;
      navX = navList.value.getBoundingClientRect().x;

      if (screenWidth.value < 745) {
        indicator.value.style.width = "4px";
        indicator.value.style.height = "";
        indicator.value.style.top = "0px";
        indicator.value.style.right = "0px";
        indicator.value.style.bottom = "";
        indicator.value.style.left = "";
      } else if (screenWidth.value >= 745) {
        indicator.value.style.width = "";
        indicator.value.style.height = "3px";
        indicator.value.style.top = "";
        indicator.value.style.right = "";
        indicator.value.style.bottom = "0px";
        indicator.value.style.left = "0px";
      }
      moveIndicator();
    };

    const handleClick = () => {
      if (screenWidth.value < 745) {
        emit("showNav");
      }
    };

    const moveIndicator = () => {
      if (screenWidth.value < 745) {
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
      } else {
        navX = navList.value.getBoundingClientRect().x;
        switch (route.name) {
          case "Home":
            indicator.value.style.left = `${
              items[0].getBoundingClientRect().x - navX
            }px`;
            indicator.value.style.width = `${items[0].clientWidth}px`;
            break;
          case "Destination":
            indicator.value.style.left = `${
              items[1].getBoundingClientRect().x - navX
            }px`;
            indicator.value.style.width = `${items[1].clientWidth}px`;
            break;
          case "Crew":
            indicator.value.style.left = `${
              items[2].getBoundingClientRect().x - navX
            }px`;
            indicator.value.style.width = `${items[2].clientWidth}px`;
            break;
          case "Technology":
            indicator.value.style.left = `${
              items[3].getBoundingClientRect().x - navX
            }px`;
            indicator.value.style.width = `${items[3].clientWidth}px`;
            break;
          default:
            break;
        }
      }
    };

    return {
      indicator,
      navList,
      moveIndicator,
      handleClick,
      screenWidth,
    };
  },
};
</script>
