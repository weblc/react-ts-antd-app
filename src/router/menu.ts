const menuList: Array<any> = [
    {
        name: "测试侧边栏",
        icon: "",
        path: "user",
        children: [
            {
                name: "个人中心",
                path: "test1",
            },
            {
                name: "个人设置",
                path: "test2",
            },
        ],
    },
];

function formatter (data: any, parentPath: string = '/', parentAuthority?: string) {
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
