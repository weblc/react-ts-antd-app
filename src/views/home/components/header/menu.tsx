import React from "react";
import { SvgIcon } from "@/components";
//定义props和state的类型接口

//把props和state的类型接口传入组件
export default class Menu extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <SvgIcon type="icon-chouzhi" size={28}/>
        );
    }
}
