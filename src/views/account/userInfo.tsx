/*
 * @Description:
 * @Author: Lao_c
 * @Date: 2020-03-26 13:50:56
 */
import React from "react";
import { Row, Col } from "antd";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from '@ant-design/icons';
import { User } from "@/types/user";
import { useHistory } from "react-router-dom";
interface userProps {
    user: User;
}

export const UserInfo: React.FC<userProps> = ({ user }) => {
    const history = useHistory()
    const enterMineRoom= ():void=>{
        history.push({
            pathname: '/user',
        });
    }
    const menu = (
        <Menu >
          <Menu.Item key="1" onClick={enterMineRoom}>我的</Menu.Item>
          <Menu.Item key="2">退出登录</Menu.Item>
        </Menu>
      );
    return (
        <Row>
            <Col>
                <Dropdown overlay={menu}  >

                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        {user.name} <DownOutlined />
                    </a>
                </Dropdown>
            </Col>
        </Row>
    );
};
