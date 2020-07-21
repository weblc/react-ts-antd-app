/*
 * @Description:
 * @Author: Lao_c
 * @Date: 2020-03-26 13:50:56
 */
import React from "react";

import { Row, Col } from "antd";
import { Menu, Dropdown, Avatar } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { User } from "@/types/user";
import { useHistory } from "react-router-dom";
import { Space } from "@/components";
import { connect } from "react-redux";

import { set_token } from "@/store/modules/app/action";
import { removeStorage } from "@/utils";
interface userProps {
    user: User;
    set_token: (payload:any)=>any
}

 const UserInfo: React.FC<userProps> = ({ user,set_token }) => {
    const history = useHistory();
    const enterMineRoom = (): void => {
        history.push({
            pathname: "/manage/data/analysis",
        });
    };

    const loginOut = (): void => {
        set_token("");
        removeStorage("token");
        history.push({
            pathname: "/home",
        });
    };
    const menu = (
        <Menu>
            <Menu.Item key="1" onClick={enterMineRoom}>
                我的
            </Menu.Item>
            <Menu.Item key="2" onClick={loginOut}>
                退出登录
            </Menu.Item>
        </Menu>
    );
    return (
        <Row>
            <Col>
                <Dropdown overlay={menu}>
                    <Row>
                        <Space>
                            <Avatar src={user.avatar} />
                            <a href=" " className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                {user.name} <DownOutlined />
                            </a>
                        </Space>
                    </Row>
                </Dropdown>
            </Col>
        </Row>
    );
};


export default connect(()=>{},{set_token })(UserInfo)

