import { asyncComponent } from "@/components/AsyncComponent";


const Home = asyncComponent(() =>
    import(/* webpackChunkName:'Home' */ "@/views/home")
);
export const getRouterList = () => {
    return {
        "/": {
            name: "首页",
            component: Home
        },

    };
};
