import React from "react";
import { Row, Col, Icon } from "antd";
import SvgIcon from "@/components/iconSvg";
import { Menu, Dropdown } from "antd";
const HeaderDropdown: React.FC = () => {
    const menu = (
        <Menu>
            <Menu.Item>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.alipay.com/"
                >
                    我的
                </a>
            </Menu.Item>
            <Menu.Item>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.taobao.com/"
                >
                    退出登陆
                </a>
            </Menu.Item>
            <Menu.Item>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.tmall.com/"
                >
                    测试
                </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <Row type="flex" justify="end" align="middle">
            <Col span={2}>
                <SvgIcon type="icon-user" />
            </Col>
            <Col>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="# ">
                        user <Icon type="down" />
                    </a>
                </Dropdown>
            </Col>
        </Row>
    );
};

export default HeaderDropdown;
