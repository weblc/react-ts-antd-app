import React from "react";

import { Row, Col } from "antd";
import { NavLink } from "react-router-dom";

import Menu from "@/views/home/components/header/menu";
import HeaderDropdown from "@/views/home/components/header/headerDropdown";

import styles from "./header.module.less";
const mainLayout: React.FC = () => {
    return (
        <Row
            type="flex"
            justify="space-between"
            align="middle"
            className={styles.header}
        >
            <Col span={8}>
                <Menu />
            </Col>
            <Col span={4}>
                <HeaderDropdown />
            </Col>
        </Row>
    );
};

export default mainLayout;
