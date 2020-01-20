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
        }

    };
};
