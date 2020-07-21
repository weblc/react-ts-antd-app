import React from "react";

import { Form, Input,  Button,DatePicker  } from "antd";
const { RangePicker } = DatePicker;

interface formProps{
    searchHandle:(val:any)=>void,
    formObj:{
        id:string,
        other:string,
        date:string
    }
}
const FromComp: React.FC<formProps> = ({searchHandle ,formObj}) => {

    return (
        <Form
            name="normal_login"
            layout="inline"
            className="common-search-form"
            onFinish={searchHandle}
            initialValues={formObj}
        >
            <Form.Item label="任务id" name="id" >
                <Input  placeholder="请输任务id" />
            </Form.Item>
            <Form.Item  label="其他" name="other" >
                <Input   placeholder="请输入其他" />
            </Form.Item>
            <Form.Item  label="日期" name="date" >
                 <RangePicker format="" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    搜索
                </Button>
            </Form.Item>
        </Form>
    );
};

export default FromComp;
