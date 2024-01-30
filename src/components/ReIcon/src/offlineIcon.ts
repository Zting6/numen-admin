import { IconifyIcon, addIcon } from "@iconify/vue/dist/offline";

/**
 * 这里存放本地图标，在 src/layout/index.vue 文件中加载，避免在首启动加载
 */

// 本地菜单图标，后端在路由的icon中返回对应的图标字符串并且前端在此处使用addIcon添加即可渲染菜单图标
import HomeFilled from "@iconify-icons/ep/home-filled";
import InformationLine from "@iconify-icons/ri/information-line";
import Lollipop from "@iconify-icons/ep/lollipop";

const DataIcon: IconifyIcon = {
  body: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="0.9em" viewBox="0 0 48 48"><defs><mask id="ipTAlignBottomTwo0"><path fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7 16h6v24H7zm14-8h6v32h-6zm14 14h6v18h-6z"/></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTAlignBottomTwo0)"/></svg>`,
};
const ListIcon: IconifyIcon = {
  body: `<svg xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.8em" viewBox="0 0 48 48"><defs><mask id="ipTAlignTextLeftOne0"><g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><path fill="#555" d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"/><path stroke-linecap="round" d="M26 24H14m20-9H14m18 18H14"/></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTAlignTextLeftOne0)"/></svg>`,
};
const Defend: IconifyIcon = {
  body: `<svg xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.9em" viewBox="0 0 48 48"><defs><mask id="ipTProtect0"><g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><path fill="#555" d="M6 9.256L24.009 4L42 9.256v10.778A26.316 26.316 0 0 1 24.003 45A26.32 26.32 0 0 1 6 20.029z"/><path stroke-linecap="round" d="m15 23l7 7l12-12"/></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTProtect0)"/></svg>`,
};
const Set: IconifyIcon = {
  body: `<svg xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.9em" viewBox="0 0 48 48"><defs><mask id="ipTSettingTwo0"><g fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4"><path d="M18.284 43.171a19.995 19.995 0 0 1-8.696-5.304a6 6 0 0 0-5.182-9.838A20.09 20.09 0 0 1 4 24c0-2.09.32-4.106.916-6H5a6 6 0 0 0 5.385-8.65a19.968 19.968 0 0 1 8.267-4.627A6 6 0 0 0 24 8a6 6 0 0 0 5.348-3.277a19.968 19.968 0 0 1 8.267 4.627A6 6 0 0 0 43.084 18A19.99 19.99 0 0 1 44 24c0 1.38-.14 2.728-.406 4.03a6 6 0 0 0-5.182 9.838a19.995 19.995 0 0 1-8.696 5.303a6.003 6.003 0 0 0-11.432 0Z"/><path d="M24 31a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"/></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSettingTwo0)"/></svg>`,
};
const DeSet: IconifyIcon = {
  body: `<svg xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.9em" viewBox="0 0 48 48"><defs><mask id="ipTTool0"><path fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 16c0 6.627-5.373 12-12 12c-2.027 0-3.936-.503-5.61-1.39L9 44l-5-5l17.39-17.39A11.948 11.948 0 0 1 20 16c0-6.627 5.373-12 12-12c2.027 0 3.936.502 5.61 1.39L30 13l5 5l7.61-7.61A11.948 11.948 0 0 1 44 16"/></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTool0)"/></svg>`,
};
const Info: IconifyIcon = {
  body: `<svg xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.8em" viewBox="0 0 48 48"><defs><mask id="ipTWorkbench0"><g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><path fill="#555" d="M12 33H4V7h40v26h-8z"/><path stroke-linecap="round" d="M16 22v4m8 7v6m0-21v8m8-12v12M12 41h24"/></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTWorkbench0)"/></svg>`,
};

addIcon("info", Info);
addIcon("deSet", DeSet);
addIcon("set", Set);
addIcon("defend", Defend);
addIcon("dataIcon", DataIcon);
addIcon("listIcon", ListIcon);
addIcon("homeFilled", HomeFilled);
addIcon("informationLine", InformationLine);
addIcon("lollipop", Lollipop);

