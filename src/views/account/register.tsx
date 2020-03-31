import React, { Component } from "react";

import { Form,  Input, Button  } from "antd";

 class Register extends Component<any> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    componentDidMount(): void {}
    componentWillUnmount(): void {}
    handleSubmit = (e:any) => {
        e.preventDefault();
        this.props.form.validateFields((err:any, values:any) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form  className="login-form">
                <Form.Item>
                    {getFieldDecorator("username", {
                        rules: [
                            {
                                required: true,
                                message: "请输入账号!"
                            }
                        ]
                    })(
                        <Input

                            placeholder="Username"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator("password", {
                        rules: [
                            {
                                required: true,
                                message: "请输入密码!"
                            }
                        ]
                    })(
                        <Input

                            type="password"
                            placeholder="Password"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        注册
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Register
