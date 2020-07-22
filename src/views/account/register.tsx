import React from "react";

import { Form, Input, Button } from "antd";


const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};
const tailLayout = {
    wrapperCol: { offset: 6, span: 18 },
};

const Register: React.FC = () => {
    const onFinish = (values:any) => {
        console.log("Success:", values);
    };


    return (
        <Form {...layout} name="basic" initialValues={{ remember: true }} onFinish={onFinish} >
            <Form.Item label="用户名"  name="account" rules={[{ required: true, message: "请输入账号!" }]}>
                <Input placeholder="请输入用户名"/>
            </Form.Item>
            <Form.Item label="密码" name="password" rules={[{ required: true, message: "请输入密码!" }]}>
                <Input.Password placeholder="请输入密码"/>
            </Form.Item>
            <Form.Item label="确认密码" name="repeatPassword" rules={[{ required: true, message: "请再次输入密码!" }]}>
                <Input.Password placeholder="请确认密码"/>
            </Form.Item>
            <Form.Item label="名称" name="username" rules={[{ required: false }]}>
                <Input placeholder="请输入名称"/>
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

// class Register extends Component<any> {
//     constructor(props: any) {
//         super(props);
//         this.state = {};
//     }

//     componentDidMount(): void {}
//     onFinish = async (values: any) => {
//         console.log(values)
//     };
//     render() {

//         return (
//             <Form className="login-form"  onFinish={this.onFinish}>
//                 <Form.Item name="name" rules={[{ required: true, message: "请输入账号!" }]}>
//                     <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入账号" />
//                 </Form.Item>
//                 <Form.Item name="password" rules={[{ required: true, message: "请输入密码!" }]}>
//                     <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="请输入密码" />
//                 </Form.Item>
//                 <Form.Item>
//                     <Form.Item name="remember" valuePropName="checked" noStyle>
//                         <Checkbox>记住密码</Checkbox>
//                     </Form.Item>
//                 </Form.Item>
//                 <Form.Item>
//                     <Button type="primary" htmlType="submit" className="login-form-button">
//                         注册
//                     </Button>
//                 </Form.Item>
//             </Form>
//         );
//     }
// }
