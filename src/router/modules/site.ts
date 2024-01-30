const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/site",
  name: "Site",
  component: Layout,
  redirect: "/site",
  meta: {
    icon: "defend",
    title: "防护站点",
    rank: 2
  },
  children: [
    {
      path: "/site/defense",
      name: "Site",
      component: () => import("@/views/site/index.vue"),
      meta: {
        title: "防护站点",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} as RouteConfigsTable;
