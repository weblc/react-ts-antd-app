function getRelation (str1: string, str2: string): number {
    if (str1 === str2) {
      console.warn('Two path are equal!') // eslint-disable-line
    }
    const arr1 = str1.split('/')
    const arr2 = str2.split('/')
    if (arr2.every((item, index) => item === arr1[index])) {
      return 1
    } else if (arr1.every((item, index) => item === arr2[index])) {
      return 2
    } else {
      return 3
    }
  }
function getRenderArr (routes: Array<any>): Array<any> {
    let renderArr: Array<any> = []
    renderArr.push(routes[0])
    for (let i = 1; i < routes.length; i += 1) {
      // 去重
      renderArr = renderArr.filter(item => getRelation(item, routes[i]) !== 1)
      // 是否包含
      const isAdd = renderArr.every(item => getRelation(item, routes[i]) === 3)
      if (isAdd) {
        renderArr.push(routes[i])
      }
    }
    return renderArr
  }
export function getRoutes (path: string, routerData: any): Array<any> {
    let routes = Object.keys(routerData).filter(
      routePath => routePath.indexOf(path) === 0 && routePath !== path
    )
    // Replace path to '' eg. path='user' /user/name => name
    routes = routes.map(item => item.replace(path, ''))
    // Get the route to be rendered to remove the deep rendering
   
    // const renderArr = getRenderArr(routes)
    const renderArr =routes
    
    // Conversion and stitching parameters
    return renderArr.map(item => {
      const exact = !routes.some(
        route => route !== item && getRelation(route, item) === 1)
      return {
        exact,
        ...routerData[`${path}${item}`],
        key: `${path}${item}`,
        path: `${path}${item}`
      }
    })
  }


 

export const setStorage = (key:string,val:any):void=>{
    localStorage.setItem(key,val)
}
export const clearStorage = ():void=>{
    localStorage.clear()
}
export const getStorage = (key:string)=>{
    return localStorage.getItem(key)
}
