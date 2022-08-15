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
    path: '/nhfyyy/public',
    name: 'Public',
    component: () => import("@/views/public/Home.vue"),
    children: [
      {
        path: 'patient',
        name: 'Patient',
        component: () => import("@/views/public/Patient.vue")
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
