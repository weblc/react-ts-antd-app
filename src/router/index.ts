import { asyncComponent } from "@/components/AsyncComponent";



const Home = asyncComponent(() =>
    import(/* webpackChunkName:'Home' */ "@/views/home")
);
const Layout = asyncComponent(() =>
    import(/* webpackChunkName:'Layout' */ "@/views/layout")
);
const MovieDetails = asyncComponent(() =>
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
