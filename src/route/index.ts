import { asyncComponent } from "@/components/AsyncComponent";

const Login = asyncComponent(() =>
    import(/* webpackChunkName:'Login' */ "@/views/login")
);
const Home = asyncComponent(() =>
    import(/* webpackChunkName:'Home' */ "@/views/home")
);
export const getRouterList = () => {
    return {
        "/": {
            name: "首页",
            component: Home
        },
        "/login": {
            name: "登录",
            component: Login
        }
    };
};
