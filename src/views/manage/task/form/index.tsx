import React from "react";

import { Form, Input, InputNumber, Button } from "antd";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: "${label} is required!",
    types: {
        email: "${label} is not validate email!",
        number: "${label} is not a validate number!",
    },
    number: {
        range: "${label} must be between ${min} and ${max}",
    },
};

const From: React.FC = () => {
    const onFinish = (values: any) => {
        console.log(values);
    };

    return (
        <Form
            name="normal_login"
            layout="inline"
            className="common-form"
            initialValues={{ remember: true, username: "laoC", password: "123456" }}
            onFinish={onFinish}
        >
            <Form.Item label="任务id" name="username" rules={[{ required: true, message: "请输入账号!" }]}>
                <Input  placeholder="请输入账号" />
            </Form.Item>
            <Form.Item  label="其他" name="password" rules={[{ required: true, message: "请输入密码!" }]}>
                <Input  type="password" placeholder="请输入密码" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    搜索
                </Button>
            </Form.Item>
        </Form>
    );
};

export default From;
