import React, { useState } from "react";
import { Row, Col  } from "antd";
import SvgIcon from "@/components/iconSvg";
import { Menu, Dropdown } from "antd";

import LoginModal from '@/views/account/login'
import CommonModal from '@/components/commonModal'


export default class Right extends React.Component<any,any>{
    constructor(props: any) {
        super(props);
        this.state = {
            loginState: 0,
            visible:false,
        };
    }
    Hash = ():void=>{
        this.setState({ visible: true});
    }
    hideModal = ():void=>{
        this.setState({ visible: false});
    }
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <div>123313</div>
                </Menu.Item>
                <Menu.Item>
                    <div>123131</div>
                </Menu.Item>
                <Menu.Item>
                    <div>123131</div>
                </Menu.Item>
            </Menu>
        );

        return (
            <Row type="flex" justify="end" align="middle">
            <Col span={2}>
                <SvgIcon type="icon-user" />
            </Col>
            <Col>
                <Dropdown overlay={menu} visible={this.state.loginState===1}>
                    <a className="ant-dropdown-link" href="# " onClick={this.Hash }>
                        登录
                        {/* <Icon type="down" /> */}
                    </a>
                </Dropdown>
                <CommonModal title={'登录'} visible={this.state.visible} component={ <LoginModal/>} onOk={this.hideModal} onCancel={this.hideModal} footer={''}/>

            </Col>
        </Row>
        );
    }
}
