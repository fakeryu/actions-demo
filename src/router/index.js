import VueRouter from "vue-router";
import Person from "../pages/Person";
import Count from "../pages/Count";

const router = new VueRouter({
  routes: [
    {
      path: "",
      component: Person,
    },
    {
      path: "/person",
      component: Person,
      beforeEnter: (to, from, next) => {
				
			}
    },
    {
      path: "/count",
      component: Count,
      // 懒加载
      // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
  ],
});

//全局前置路由守卫
//初始化+路由切换前
router.beforeEach((to, from, next) => {});

//全局后置路由守卫
//初始化+路由切换后
router.afterEach((to, from) => {
  document.title = to.meta.title || "666";
});

export default router;
