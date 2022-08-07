import { RouteRecordRaw } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    redirect: { name: 'Home' },
    children: [
      {
        path: '/nhfyyy/home',
        name: 'Home',
        component: () => import("@/views/HomePage.vue")
      }
    ]
  },
  {
    path: "/:any(.*)",
    name: "notFound",
    component: () => import("@/views/errors/404.vue")
  }
] as RouteRecordRaw[];

export default routes
