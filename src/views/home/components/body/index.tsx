import React, { Component } from "react";

import { Row, Col, Card } from "antd";
import Item from "./item";
import Nav from "./nav";
import styles from "./body.module.less";

export default class Body extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            counts: 10
        };
    }

    componentDidMount(): void {}
    componentWillUnmount(): void {}
    render() {
        const ItemList = (length: Number) => {
            let arr = [];
            for (let index = 0; index < length; index++) {
                arr.push(
                    <Col lg={4} sm={6}>
                        <Row type="flex" justify="center">
                            <Item />
                        </Row>
                    </Col>
                );
            }
            return arr;
        };
        return (
            <Row className={styles.body_wrapper}>
                <Col>
                    <Nav />
                </Col>
                <Row type="flex">{ItemList(this.state.counts)}</Row>
            </Row>
        );
    }
}
