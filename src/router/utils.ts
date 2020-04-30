export function getRoutes(path: string, routerData: any): Array<any> {
    let routes = Object.keys(routerData).filter(
        routePath =>{

            return  routePath === path
        }
      )
     console.log(routes)
    return [];
}
