import React, { useState, useEffect } from "react";
import { Form, Input, Button, message } from "antd";

import { Space } from "@/components";
import api from "@/api";

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};
const tailLayout = {
    wrapperCol: { offset: 6, span: 18 },
};

interface RegisterProps {
    visible: boolean;
    onCancel: () => void;
}

const Register: React.FC<any> = ({ onCancel, visible }) => {
    const [form] = Form.useForm();

    const resetFrom = () => {
        form.resetFields();
    };
    const onFinish = (values: any) => {
        api.user.userRegister(values).then(({ success, data, ...res }) => {
            if (success) {
                message.success(res.message);
                onCancel();
            } else {
                message.error(res.message);
            }
        })
    };

    const passwordValidator = ({ getFieldValue }: any) => ({
        validator(rule: any, value: any) {
            if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
            }
            return Promise.reject("两次输入密码不一致，请确认重新输入!");
        },
    });

    return (
        <Form {...layout} form={form} name="basic" onFinish={onFinish}>
            <Form.Item label="账号" name="account" rules={[{ required: true, message: "请输入账号!" }]}>
                <Input placeholder="请输入账号" />
            </Form.Item>
            <Form.Item label="密码" name="password" rules={[{ required: true, message: "请输入密码!" }]} hasFeedback>
                <Input.Password placeholder="请输入密码" />
            </Form.Item>
            <Form.Item label="确认密码" name="confirm" rules={[{ required: true, message: "请再次输入密码!" }, passwordValidator]} dependencies={['password']} hasFeedback>
                <Input.Password placeholder="请确认密码" />
            </Form.Item>
            <Form.Item label="用户名" name="username" rules={[{ required: false }]}>
                <Input placeholder="请输入用户名" />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Space>
                    <Button type="primary" htmlType="submit">
                        注册
                    </Button>
                    <Button type="primary" onClick={resetFrom}>
                        重置
                    </Button>
                </Space>
            </Form.Item>
        </Form>
    );
};

export default Register;
