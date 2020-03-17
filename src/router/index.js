import Vue from "vue";
import VueRouter from "vue-router";
import Dictionary from "../views/Dict.vue";
import Thesaurus from "../views/Thes.vue";
import Translate from "../views/Trans.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dictionary",
    component: Dictionary
  },
  {
    path: "/thesaurus",
    name: "Thesaurus",
    component: Thesaurus
  },
  {
    path: "/translate",
    name: "Translate",
    component: Translate
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
