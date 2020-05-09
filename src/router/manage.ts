/*
 * @Description:
 * @Author: Lao_c
 * @Date: 2020-04-09 11:52:11
 */
import { AsyncComponent } from "@/components";
const Collection = AsyncComponent(()=> import(/* webpackChunkName:'User' */ "@/views/manage/colloction"))
const Analysis = AsyncComponent(()=> import(/* webpackChunkName:'User' */ "@/views/manage/analysis"))
const Center = AsyncComponent(()=> import(/* webpackChunkName:'User' */ "@/views/manage/userLayout"))
const Home = AsyncComponent(()=> import(/* webpackChunkName:'User' */ "@/views/manage/home"))
const Task = AsyncComponent(()=> import(/* webpackChunkName:'User' */ "@/views/manage/task"))

export default {
    "/manage":{
        name:"用户中心",
        exact:true,
        component:Center,
    },
    "/manage/data/analysis":{
        name:"数据统计",
        icon:'icon-tubiao',
        exact:true,
        component:Analysis,
    },
    "/manage/data/analysis1":{
        name:"数据统计1",
        icon:'icon-tubiao',
        exact:true,
        component:Analysis,
    },
    "/manage/center/collection":{
        name:"我的收藏",
        icon:'icon-ziyuan',
        exact:true,
        component:Collection,
    },
    "/manage/center/home":{
        name:"我的主页",
        exact:true,
        component:Home,
    },
    "/manage/center/task":{
        name:"我的任务",
        exact:true,
        component:Task,
    },

}
