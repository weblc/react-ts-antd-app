import React from "react";

import { Form, Input, Button, DatePicker } from "antd";

import { ModalHoc } from "@/components";

const { RangePicker } = DatePicker;
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};
const AddModal: React.FC = props => {
    console.log("-----------");
    console.log(props);
    return (
        <>
            <Form name="normal_login">
                <Form.Item label="任务id" name="id" {...layout}>
                    <Input placeholder="请输任务id" />
                </Form.Item>
                <Form.Item label="其他" name="other" {...layout}>
                    <Input placeholder="请输入其他" />
                </Form.Item>
                <Form.Item label="日期" name="date" {...layout}>
                    <RangePicker format="" />
                </Form.Item>
            </Form>
        </>
    );
};

export default ModalHoc(AddModal);
