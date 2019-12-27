import React, { Component } from "react";
import styles from "./body.module.less";
import { Row, Col } from "antd";

interface Test {
    title:String,
    icon:''
}

const titleLists:Test[] = [
    {title:"亚洲",icon:''},
    {title:"欧美",icon:''},
    {title:"日韩",icon:''},
    {title:"亚洲",icon:''},
    {title:"亚洲",icon:''},
    {title:"亚洲",icon:''},
    {title:"亚洲",icon:''},
    {title:"亚洲",icon:''},
    {title:"亚洲",icon:''},
]

export default class Nav extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    componentDidMount(): void {}
    componentWillUnmount(): void {}
    render() {
        return (
            <Row type="flex" justify="center" className={styles.nav_style}>
                {
                    titleLists.map((ele:Test,index:number):any =>{
                    return  <Col span={2} className="text-center" key={index}>
                        <span>{ele.title}</span>
                    </Col>
                    })
                }
            </Row>
        );
    }
}
