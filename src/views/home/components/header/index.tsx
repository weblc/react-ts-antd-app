import React from "react";

import { Row, Col } from "antd";
import { NavLink } from "react-router-dom";

import Menu from "@/views/home/components/header/menu";
import HeaderDropdown from "@/views/home/components/header/right";

import styles from "./header.module.less";
const mainLayout: React.FC = () => {
    return (
        <Row
            type="flex"
            justify="space-between"
            align="middle"
            className={styles.header}
        >
            <Col span={6}>
                <Menu />
            </Col>
            <Col span={6}>
                <HeaderDropdown />
            </Col>
        </Row>
    );
};

export default mainLayout;
