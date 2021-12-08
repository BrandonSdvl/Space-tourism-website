import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Destination from "../views/Destination.vue";
import Crew from "../views/Crew.vue";
import Technology from "../views/Technology.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/destination/:pathMatch(.*)*",
    name: "Destination",
    component: Destination,
  },
  {
    path: "/crew/:pathMatch(.*)*",
    name: "Crew",
    component: Crew,
  },
  {
    path: "/technology/:pathMatch(.*)*",
    name: "Technology",
    component: Technology,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
