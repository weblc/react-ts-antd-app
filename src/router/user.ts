/*
 * @Description:
 * @Author: Lao_c
 * @Date: 2020-04-09 11:52:11
 */
import { AsyncComponent } from "@/components";
const Collection = AsyncComponent(()=> import(/* webpackChunkName:'User' */ "@/views/user/colloction"))
const Analysis = AsyncComponent(()=> import(/* webpackChunkName:'User' */ "@/views/user/analysis"))
const Center = AsyncComponent(()=> import(/* webpackChunkName:'User' */ "@/views/user/userLayout"))

export default {
    "/user":{
        name:"用户中心",
        exact:true,
        component:Center,
    },
    "/user/analysis":{
        name:"数据统计",
        icon:'icon-tubiao',
        exact:false,
        component:Analysis,
    },
    "/user/collection":{
        name:"我的收藏",
        icon:'icon-ziyuan',
        exact:true,
        component:Collection,
    },
    
}
