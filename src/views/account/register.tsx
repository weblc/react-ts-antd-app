import React from "react";
import api from "@/api";
import { Form, Input, Button, message } from "antd";

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};
const tailLayout = {
    wrapperCol: { offset: 6, span: 18 },
};

interface RegisterProps{
    visible:boolean,
    onCancel:()=>void
}

const Register: React.FC<any> = ({onCancel,visible}) => {
    const [form] = Form.useForm();

    if(!visible){
        form.resetFields();
    }
    

    const onFinish = (values: any) => {
        api.user.userRegister(values).then(({ success, data, ...res }) => {
            if (success) {
                onCancel();
            } else {
                message.error(res.message);
            }
        });
    };

    return (
        <Form {...layout} form={form} name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
            <Form.Item label="账号" name="account" rules={[{ required: true, message: "请输入账号!" }]}>
                <Input placeholder="请输入账号" />
            </Form.Item>
            <Form.Item label="密码" name="password" rules={[{ required: true, message: "请输入密码!" }]}>
                <Input.Password placeholder="请输入密码" />
            </Form.Item>
            <Form.Item label="确认密码" name="repeatPassword" rules={[{ required: true, message: "请再次输入密码!" }]}>
                <Input.Password placeholder="请确认密码" />
            </Form.Item>
            <Form.Item label="用户名" name="username" rules={[{ required: false }]}>
                <Input placeholder="请输入用户名" />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    注册
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Register;


