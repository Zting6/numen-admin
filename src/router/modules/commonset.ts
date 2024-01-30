export default {
  path: "/common",
  redirect: "/common/ip",
  meta: {
    icon: "set",
    title: "通用配置",
    // showLink: false,
    rank: 4
  },
  children: [
    {
      path: "/common/ip",
      name: "ip",
      component: () => import("@/views/common/ip.vue"),
      meta: {
        title: "IP组"
      }
    },
    {
      path: "/common/other",
      name: "other",
      component: () => import("@/views/common/other.vue"),
      meta: {
        title: "其他"
      }
    },

  ]
} as RouteConfigsTable;
