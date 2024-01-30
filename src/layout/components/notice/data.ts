export interface ListItem {
  avatar: string;
  title: string;
  datetime: string;
  type: string;
  description: string;
  status?: "" | "success" | "warning" | "info" | "danger";
  extra?: string;
}

export interface TabItem {
  key: string;
  name: string;
  list: ListItem[];
}

export const noticesData: TabItem[] = [
  {
    key: "1",
    name: "通知",
    list: [
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
        title: "检测到一次恶意 SQL 注入攻击",
        datetime: "刚刚",
        description: "攻击者尝试通过 SQL 注入攻击访问系统。",
        type: "1"
      },
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
        title: "拒绝服务攻击警报",
        datetime: "5 分钟前",
        description: "",
        type: "1"
      },
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
        title: "恶意蠕虫扫描攻击",
        datetime: "10分钟前",
        description: "检测到一次来自恶意蠕虫的扫描攻击。",
        type: "1"
      },
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
        title:
          "DDoS 攻击",
        datetime: "1小时前",
        description: "系统正在遭受分布式拒绝服务攻击",
        type: "1"
      },

    ]
  },
  {
    key: "2",
    name: "消息",
    list: [
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
        title: "系统更新已完成",
        description: "网络攻击防御系统已完成最新版本的更新。",
        datetime: "昨天",
        type: "2"
      },
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
        title: "新的安全策略已部署",
        description: "",
        datetime: "2 天前",
        type: "2"
      },
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
        title: "升级到最新防火墙版本",
        description:
          "",
        datetime: "一年前",
        type: "2"
      }
    ]
  },
  {
    key: "3",
    name: "代办",
    list: [
      {
        avatar: "",
        title: "查看系统性能报告",
        description: "审查最新的系统性能报告以确保系统正常运行",
        datetime: "",
        extra: "未开始",
        status: "info",
        type: "3"
      },
      {
        avatar: "",
        title: "升级防病毒引擎",
        description:
          "及时升级防病毒引擎以确保及时检测最新的病毒威胁",
        datetime: "",
        extra: "马上到期",
        status: "danger",
        type: "3"
      },

    ]
  }
];
