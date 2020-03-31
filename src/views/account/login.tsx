import React, { Component } from "react";
import { connect } from "react-redux"
import { Form, Input, Button, Checkbox } from "antd";
import {user_login} from '@/store/modules/user/action'
import { UserOutlined, LockOutlined } from '@ant-design/icons';


class Login extends Component<any> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    componentDidMount(): void { }
    componentWillUnmount(): void { }

     onFinish =async (values:any)=> {
      this.props.userLoginHandle(values).then((res:any)=>{
            console.log(res)
      })


    };
    render() {
        return (
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true,username:'laoC',password:"123456" }}
                onFinish={this.onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入账号!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入账号" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入密码!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="请输入密码"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住密码</Checkbox>
                    </Form.Item>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登陆
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

var mapState = (state:any) => {
    　　return {
    　　　　user: state.user
    　　}
    }
    const mapActions = (dispatch:any) => {
        return {
            userLoginHandle: (payload:any) =>dispatch(user_login(payload)),
        }
      }


export default connect(mapState,mapActions)(Login);
