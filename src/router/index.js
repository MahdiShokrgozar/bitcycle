import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];


const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		}

		if (to.hash) {
			return {
				selector: to.hash,
			};
		} else {
			window.scrollTo(0, 0);
		}
	},
	routes,
});


export default router;

