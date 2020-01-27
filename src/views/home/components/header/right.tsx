import React  from "react";
import { Row, Col, Input,Button } from "antd";
import {SvgIcon} from "@/components";


import LoginModal from "@/views/account/login";
import RegisterModal from "@/views/account/register";
import CommonModal from "@/components/commonModal";

export default class Right extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            loginState: 0,
            loginVisible: false,
            registerVisible: false
        };
    }
   
    showModal = (key:string):void=>{
        this.setState({ [key]: true });
    }
    hideModal = (register:string):void=> {
      
        this.setState({ [register]: false });
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
                    <Button type="link" onClick={()=>{this.showModal("loginVisible")}}>登录</Button>
                    <SvgIcon type="icon-tubiaozhizuo-" />

                    <Button type="link" onClick={()=>{this.showModal("registerVisible")}}>注册</Button>
                </Col>
                <CommonModal
                        title={"登录"}
                        visible={this.state.loginVisible}
                        component={<LoginModal />}
                        onOk={()=>{this.hideModal("loginVisible")}}
                        onCancel={()=>{this.hideModal("loginVisible")}}
                        footer={""}
                    />
                <CommonModal
                        title={"注册"}
                        visible={this.state.registerVisible}
                        component={<RegisterModal />}
                        onOk={()=>{this.hideModal("registerVisible")}}
                        onCancel={()=>{this.hideModal("registerVisible")}}
                        footer={""}
                    />
            </Row>
        );
    }
}
