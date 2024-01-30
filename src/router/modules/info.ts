const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/info",
  name: "info",
  component: Layout,
  redirect: "/info",
  meta: {
    icon: "info",
    title: "系统信息",
    rank: 5
  },
  children: [
    {
      path: "/info/infomation",
      name: "info",
      component: () => import("@/views/info/index.vue"),
      meta: {
        title: "系统信息",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} as RouteConfigsTable;
