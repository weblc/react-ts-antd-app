import React, { Component } from "react";

import { Row, Tabs, Col } from "antd";
import { Movies } from "@/components";
import styles from "./body.module.less";
import { AppleOutlined } from "@ant-design/icons";
const { TabPane } = Tabs;
interface movie {
    title: string;
    description: string;
    poster: string;
    score: number;
    hot: number;
}

const ItemList: movie[] = [
    {
        title: "敏狗的故事",
        description: "70多岁独居老人在偏僻贫困的村庄与一条哈士奇的奇闻趣事.....",
        poster: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        score: 4.5,
        hot: 2.5,
    },
    {
        title: "敏狗的故事",
        description: "70多岁独居老人在偏僻贫困的村庄与一条哈士奇的奇闻趣事.....",
        poster: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        score: 7.9,
        hot: 3.5,
    },
    {
        title: "敏狗的故事",
        description: "70多岁独居老人在偏僻贫困的村庄与一条哈士奇的奇闻趣事.....",
        poster: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        score: 7.9,
        hot: 4.5,
    },
    {
        title: "敏狗的故事",
        description: "70多岁独居老人在偏僻贫困的村庄与一条哈士奇的奇闻趣事.....",
        poster: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        score: 7.9,
        hot: 1.5,
    },
    {
        title: "敏狗的故事",
        description: "70多岁独居老人在偏僻贫困的村庄与一条哈士奇的奇闻趣事.....",
        poster: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        score: 7.9,
        hot: 0.5,
    },
    {
        title: "敏狗的故事",
        description: "70多岁独居老人在偏僻贫困的村庄与一条哈士奇的奇闻趣事.....",
        poster: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        score: 7.9,
        hot: 2.5,
    },
    {
        title: "敏狗的故事",
        description: "70多岁独居老人在偏僻贫困的村庄与一条哈士奇的奇闻趣事.....",
        poster: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        score: 7.9,
        hot: 0.5,
    },
    {
        title: "敏狗的故事",
        description: "70多岁独居老人在偏僻贫困的村庄与一条哈士奇的奇闻趣事.....",
        poster: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        score: 7.9,
        hot: 0,
    },
    {
        title: "敏狗的故事",
        description: "70多岁独居老人在偏僻贫困的村庄与一条哈士奇的奇闻趣事.....",
        poster: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        score: 7.9,
        hot: 5,
    },
];

const navList: Array<string> = ["亚洲", "欧美", "韩国", "日本", "泰国", "印度"];

export default class Body extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            counts: 10,
        };
    }

    componentDidMount(): void {
        // getTest().then((res)=>{
        // });
    }
    test = (item: any): void => {
        this.props.history.push({
            pathname: "/movie/details",
        });
    };
    render() {
        return (
            <Row className={styles.body_wrapper}>
                <Col>
                    <Tabs defaultActiveKey="0" className={styles.nav_style}>
                        {navList.map((item, index: number) => {
                            return (
                                <TabPane
                                    tab={
                                        <span>
                                            <AppleOutlined />
                                            {item}
                                        </span>
                                    }
                                    key={`${index}`}
                                >
                                    <Row>
                                        {ItemList.map((item, index) => {
                                            return (
                                                <Col lg={4} sm={6} key={index}>
                                                    <Row justify="center" onClick={this.test.bind(this, item)}>
                                                        <Movies {...item} />
                                                    </Row>
                                                </Col>
                                            );
                                        })}
                                    </Row>
                                </TabPane>
                            );
                        })}
                    </Tabs>
                </Col>
                {/* <Col>
                    <Nav />
                </Col>

                <Row >
                    {ItemList.map((item, index) => {
                        return (
                            <Col lg={4} sm={6} key={index} >
                                <Row justify="center" onClick={this.test.bind(this, item)} >
                                    <Movies {...item} />


                                </Row>
                            </Col>
                        );
                    })}
                </Row> */}
            </Row>
        );
    }
}
