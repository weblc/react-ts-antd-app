import React, {  useEffect, useRef } from "react";

import { Form, Input, Button, DatePicker, Rate, Modal } from "antd";

import { SvgIcon } from "@/components";
import {useResetModalForm} from '@/components/Hooks'

const { RangePicker } = DatePicker;
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};


const AddModal: React.FC<any> =React.memo(({title, visible, onOk, onCancel }) => {
    const [form] = Form.useForm();

    useResetModalForm({
        form,visible
    })

    const addHandle = () => {
        form.validateFields()
            .then(values => {
                onOk();
            })
            .catch(info => {
                console.log("Validate Failed:", info);
            });
    };

    return (
        <Modal visible={visible} onOk={addHandle} onCancel={onCancel} title={title}>
            <Form name="normal_login" form={form}>
                <Form.Item label="任务代号" name="name" {...layout}>
                    <Input placeholder="请输任务代号" />
                </Form.Item>
                <Form.Item label="紧急程度" name="weight" {...layout}>
                    <Rate allowHalf character={<SvgIcon type="icon-urgent" size={20} />} />
                </Form.Item>
                <Form.Item label="任务难度" name="difficulty" {...layout}>
                    <Rate allowHalf character={<SvgIcon type="icon-difficulty" size={20} />} />
                </Form.Item>
                <Form.Item label="起止日期" name="date" {...layout}>
                    <RangePicker format="" />
                </Form.Item>
            </Form>
        </Modal>
    );
})

export default AddModal;
