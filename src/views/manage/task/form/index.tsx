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
interface formProps{
    searchHandle:(val:any)=>void
}
const From: React.FC<formProps> = ({searchHandle}) => {

    return (
        <Form
            name="normal_login"
            layout="inline"
            className="common-search-form"
            onFinish={searchHandle}
        >
            <Form.Item label="任务id" name="id" >
                <Input  placeholder="请输任务id" />
            </Form.Item>
            <Form.Item  label="其他" name="other" >
                <Input  type="password" placeholder="请输入其他" />
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
