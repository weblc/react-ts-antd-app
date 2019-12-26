import React, { ReactElement, FC } from "react";
import { Spin } from "antd";
import Loadable from "react-loadable";

interface defaultPropsInterface {
    loading: any;
    timeout?: number | false | null;
    delay?: number | false | null;
}
interface propsInterface {
    error: any;
}
const LoadingComponent: ReactElement = (
    <div style={{ textAlign: "center", marginTop: 100 }}>
        <Spin size="large" />
    </div>
);

const Loading: FC<propsInterface> = props => {
    if (props.error) {
        return <div>cuowu1</div>;
    } else {
        return LoadingComponent;
    }
};
const DefaultProps: defaultPropsInterface = {
    loading: Loading,
    timeout: 20000, // ms
    delay: 300 // ms
};
export function asyncComponent(component: any, callback?: () => void) {
    return Loadable({
        ...DefaultProps,
        loader: component

        //   render (loaded: any, props) {
        //     callback && callback()
        //     const Component = loaded.default
        //     return <Component {...props}/>
        //   }
    });
}
