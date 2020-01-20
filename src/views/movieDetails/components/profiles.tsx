import React, { Component } from "react";
import { Row, Col } from "antd";
import styles from "../movie.module.less";

import { SvgIcon } from "@/components";
interface profile {
    img: string;
    title: string;
    releaseTime: string;
    performer: string[];
    info: string;
    sketch: string[];
}

export default class Profiles extends Component<profile> {
    constructor(props: profile) {
        super(props);
        this.state = {};
    }

    componentDidMount(): void {}
    componentWillUnmount(): void {}
    render() {
        console.log(this.props);
        return (
            <div className={styles.profiles}>
                <Row>
                    <Col span={24}>
                        <Row>
                            <Col span={8}>
                                <div className={styles.imgWrapper}>
                                    {/* <img src={this.props.img} alt="" /> */}
                                </div>
                            </Col>
                            <Col span={16}>
                                <Row>
                                    <Col span={24} className={styles.title}>
                                        this is title
                                    </Col>
                                    <Col span={24}>
                                        <SvgIcon
                                            type="icon-date"
                                            className={styles.icon}
                                        />

                                        <span>2019-10-22</span>
                                    </Col>
                                    <Col span={24}>
                                        <SvgIcon
                                            type="icon-group_junior"
                                            className={styles.icon}
                                        />

                                        <span>2019-10-22</span>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}></Col>
                </Row>
            </div>
        );
    }
}
