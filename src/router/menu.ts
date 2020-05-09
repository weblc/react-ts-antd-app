interface Menu {
    name:string,
    path:string,
}
export interface MenusTypes extends Menu {
    icon:string,
    key?:string,
    children?:Array<Menu>
}
const menuList: Array<MenusTypes> = [
    {
        name: "数据中心",
        icon: "icon-tubiao",
        path: "data",
        children: [
            {
                name: "月度统计",
                path: "analysis",
            },
            {
                name: "累计统计",
                path: "analysis1",
            },

        ],
    },
    {
        name: "个人中心",
        icon: "icon-ziyuan",
        path: "center",
        children: [
            {
                name: "我的收藏",
                path: "collection",
            },
            {
                name: "信息主页",
                path: "home",
            },
            {
                name: "我的任务",
                path: "task",
            },
        ],
    },
];


const formatterSubMenu = (data: any,path:string = '/manage/'):Array<any> =>{
    return data.map((item:MenusTypes)=>{
        return  path+item.path
    })
}

function formatter (data: any, parentPath: string = '/manage/', parentAuthority?: string) {
    return data.map((item: { path: any; authority?: any; children?: any; }) => {
      let { path } = item
      path = parentPath + item.path
      const result = {
        ...item,
        path,

      }
      if (item.children) {
        result.children = formatter(item.children, `${parentPath}${item.path}/`,
          item.authority)
      }
      return result
    })
  }
export const getMenuData = () => formatter(menuList);
export const getSubMenu = () => formatterSubMenu(menuList);

