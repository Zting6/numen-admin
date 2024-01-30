export default {
  path: "/defend",
  redirect: "/defend/userlist",
  meta: {
    icon: "deSet",
    title: "防护配置",
    // showLink: false,
    rank: 3
  },
  children: [
    {
      path: "/defend/userlist",
      name: "userlist",
      component: () => import("@/views/defend/userlist.vue"),
      meta: {
        title: "黑白名单"
      }
    },
    {
      path: "/defend/frequlimit",
      name: "frequlimit",
      component: () => import("@/views/defend/frequlimit.vue"),
      meta: {
        title: "频率限制"
      }
    },

  ]
} as RouteConfigsTable;
