/*
 * @Description:
 * @Author: Lao_c
 * @Date: 2020-04-09 11:52:11
 */
import { AsyncComponent } from "@/components";
const Collection = AsyncComponent(()=> import(/* webpackChunkName:'User' */ "@/views/user/colloction"))
const Xixi = AsyncComponent(()=> import(/* webpackChunkName:'User' */ "@/views/user/xixi"))
const Center = AsyncComponent(()=> import(/* webpackChunkName:'User' */ "@/views/user/userLayout"))

export default {
    "/user":{
        name:"用户中心",
        exact:true,
        component:Center,
    },
    "/user/collection":{
        name:"我的收藏",
        exact:true,
        component:Collection,
    },
    "/user/collection/xixi":{
        name:"收藏1",
        exact:false,
        component:Xixi,
    },
}
