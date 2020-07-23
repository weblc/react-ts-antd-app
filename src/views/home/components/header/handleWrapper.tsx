import React from "react";
import { connect } from "react-redux";
import { Row, Input, Button } from "antd";

import { SvgIcon } from "@/components";

import LoginModal from "@/views/account/login";
import RegisterModal from "@/views/account/register";
import CommonModal from "@/components/commonModal";
import UserInfo from "@/views/account/userInfo";

class HandleWrapper extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            loginState: 0,
            loginVisible: false,
            registerVisible: false,
        };
    }

    showModal = (key: string): void => {
        this.setState({ [key]: true });
    };
    hideModal = (register: string): void => {
        this.setState({ [register]: false });
    };

    render() {
        const { Search } = Input;
        const { user, app } = this.props;
        return (
            <Row justify="end" align="middle">
                <Search placeholder="请输入....." onSearch={value => console.log(value)} style={{ width: 200, marginRight: 50 }} />
                {app.token ? (
                    <UserInfo user={user} />
                ) : (
                    <div>
                        <Button
                            type="link"
                            onClick={() => {
                                this.showModal("loginVisible");
                            }}
                        >
                            登录
                        </Button>
                        <SvgIcon type="icon-tubiaozhizuo-" />
                        <Button
                            type="link"
                            onClick={() => {
                                this.showModal("registerVisible");
                            }}
                        >
                            注册
                        </Button>

                        <CommonModal
                            title={"登录"}
                            visible={this.state.loginVisible}
                            component={
                                <LoginModal
                                    onCancel={() => {
                                        this.hideModal("loginVisible");
                                    }}
                                />
                            }
                            onOk={() => {
                                this.hideModal("loginVisible");
                            }}
                            onCancel={() => {
                                this.hideModal("loginVisible");
                            }}
                            footer={""}
                        />
                        <CommonModal
                            title={"注册"}
                            getContainer={false}
                            visible={this.state.registerVisible}
                            component={
                                <RegisterModal
                                    visible={this.state.registerVisible}
                                    onCancel={() => {
                                        this.hideModal("registerVisible");
                                    }}
                                />
                            }
                            onOk={() => {
                                this.hideModal("registerVisible");
                            }}
                            onCancel={() => {
                                this.hideModal("registerVisible");
                            }}
                            footer={""}
                        />
                    </div>
                )}
            </Row>
        );
    }
}

const stateMap = (state: any) => {
    return {
        user: state.user,
        app: state.app,
    };
};

export default connect(stateMap, {})(HandleWrapper);
