import React, { Component } from "react";


import { Row, Col } from "antd";
import {Movies} from "@/components";
import Nav from "./nav";
import styles from "./body.module.less";
import {getTest} from '@/api/index'

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
        description:
            "70多岁独居老人在偏僻贫困的村庄与一条哈士奇的奇闻趣事.....",
        poster:
            "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        score: 4.5,
        hot: 2.5
    },
    {
        title: "敏狗的故事",
        description:
            "70多岁独居老人在偏僻贫困的村庄与一条哈士奇的奇闻趣事.....",
        poster:
            "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        score: 7.9,
        hot: 3.5
    },
    {
        title: "敏狗的故事",
        description:
            "70多岁独居老人在偏僻贫困的村庄与一条哈士奇的奇闻趣事.....",
        poster:
            "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        score: 7.9,
        hot: 4.5
    },
    {
        title: "敏狗的故事",
        description:
            "70多岁独居老人在偏僻贫困的村庄与一条哈士奇的奇闻趣事.....",
        poster:
            "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        score: 7.9,
        hot: 1.5
    },
    {
        title: "敏狗的故事",
        description:
            "70多岁独居老人在偏僻贫困的村庄与一条哈士奇的奇闻趣事.....",
        poster:
            "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        score: 7.9,
        hot: 0.5
    },
    {
        title: "敏狗的故事",
        description:
            "70多岁独居老人在偏僻贫困的村庄与一条哈士奇的奇闻趣事.....",
        poster:
            "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        score: 7.9,
        hot: 2.5
    },
    {
        title: "敏狗的故事",
        description:
            "70多岁独居老人在偏僻贫困的村庄与一条哈士奇的奇闻趣事.....",
        poster:
            "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        score: 7.9,
        hot:0.5
    },
    {
        title: "敏狗的故事",
        description:
            "70多岁独居老人在偏僻贫困的村庄与一条哈士奇的奇闻趣事.....",
        poster:
            "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        score: 7.9,
        hot: 0
    },
    {
        title: "敏狗的故事",
        description:
            "70多岁独居老人在偏僻贫困的村庄与一条哈士奇的奇闻趣事.....",
        poster:
            "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        score: 7.9,
        hot: 5
    }
];

export default class Body extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            counts: 10
        };
    }

    componentDidMount(): void {
        getTest().then((res)=>{

        })
    }
    test=(item:any):void=>{

        this.props.history.push({
            pathname: '/movie/details',
          });
    }
    componentWillUnmount(): void {}
    render() {

        return (
            <Row className={styles.body_wrapper}>
                <Col>
                    <Nav />
                </Col>
                {/* <Row type="flex">{ItemList(this.state.counts)}</Row> */}
                <Row type="flex">
                    {ItemList.map((item,index) => {
                        return (
                            <Col lg={4} sm={6} key={index} >
                                <Row type="flex" justify="center" onClick={this.test.bind(this,item)} >
                                <Movies {...item} />


                                </Row>
                            </Col>
                        );
                    })}
                </Row>
            </Row>
        );
    }
}
