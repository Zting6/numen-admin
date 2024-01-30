const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/event",
  name: "Event",
  component: Layout,
  redirect: "/event",
  meta: {
    icon: "listIcon",
    title: "攻击事件",
    rank: 1
  },
  children: [
    {
      path: "/event/attack",
      name: "Event",
      component: () => import("@/views/event/index.vue"),
      meta: {
        title: "攻击事件",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} as RouteConfigsTable;
