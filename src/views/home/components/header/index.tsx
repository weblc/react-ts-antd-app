import React from "react";

import { Row, Col } from "antd";

import Menu from "@/views/home/components/header/menu";
import HeaderDropdown from "@/views/home/components/header/handleWrapper";

import styles from "./header.module.less";
const mainLayout: React.FC = () => {
    return (
        <Row

            justify="space-between"
            align="middle"
            className={styles.header}
        >
            <Col span={6}>
                <Menu />
            </Col>
            <Col >
                <HeaderDropdown />
            </Col>
        </Row>
    );
};

export default mainLayout;
