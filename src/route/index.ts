
import { asyncComponent } from '@/components/AsyncComponent'
const BasicLayout = asyncComponent(() => import(/* webpackChunkName:'basicLayout' */'@/layouts/BasicLayout'))
export const getRouterList = () => {
    return {
        '/': {
            name: '首页',
            component:BasicLayout
        }
    }
}
