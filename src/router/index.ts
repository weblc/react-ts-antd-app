import { AsyncComponent } from "@/components";




const Home = AsyncComponent(() =>
    import(/* webpackChunkName:'Home' */ "@/views/home")
);
const Layout = AsyncComponent(() =>
    import(/* webpackChunkName:'Layout' */ "@/views/layout")
);
const MovieDetails = AsyncComponent(() =>
    import(/* webpackChunkName:'MovieDetails' */ "@/views/movieDetails")
);
const Center = AsyncComponent(()=> import(/* webpackChunkName:'User' */ "@/views/user/userLayout"))
const Collection = AsyncComponent(()=> import(/* webpackChunkName:'User' */ "@/views/user/colloction"))
const Xixi = AsyncComponent(()=> import(/* webpackChunkName:'User' */ "@/views/user/xixi"))
export const getRouterList = () => {
    return {
        "/": {
            name: "layout",
            component: Layout
        },
        "/home": {
            name: "首页",
            component: Home
        },
        "/movie/details":{
            name: "影片详情",
            component:MovieDetails
        },
        "/user":{
            name:"用户中心",
            exact:true,
            component:Center,
        },
        "/user/collection":{
            name:"收藏12",
            exact:true,
            component:Collection,
        },
        "/user/collection/xixi":{
            name:"收藏1",
            exact:false,
            component:Xixi,
        },

    };
};
