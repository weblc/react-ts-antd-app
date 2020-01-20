import React  from "react";
import { Row, Col, Input,Button } from "antd";
import {SvgIcon} from "@/components";


import LoginModal from "@/views/account/login";
import CommonModal from "@/components/commonModal";

export default class Right extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            loginState: 0,
            visible: false
        };
    }
    Hash = (): void => {
        this.setState({ visible: true });
    };
    hideModal = (): void => {
        this.setState({ visible: false });
    };
    render() {

        const { Search } = Input;

        return (
            <Row type="flex" justify="end" align="middle">
                <Col span={12}>
                    <Search
                        placeholder="请输入....."
                        onSearch={value => console.log(value)}
                        style={{ width: 200,marginRight:50 }}
                    />
                </Col>
                 <Col span={8}>
                    <Button type="link" onClick={this.Hash}>登录</Button>
                    <SvgIcon type="icon-tubiaozhizuo-" />

                    <Button type="link" onClick={this.Hash}>注册</Button>
                </Col>
                <CommonModal
                        title={"登录"}
                        visible={this.state.visible}
                        component={<LoginModal />}
                        onOk={this.hideModal}
                        onCancel={this.hideModal}
                        footer={""}
                    />
            </Row>
        );
    }
}
