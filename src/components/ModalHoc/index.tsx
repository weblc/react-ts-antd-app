import React from "react";
import { Modal } from "antd";


const ModalHoc =  (WrappedComponent: any) => {

    return class extends React.Component<any,any> {
        constructor(props: any) {
            super(props);
            this.state = {

            };
        }
        render() {
            console.log(this.props)
            // 将状态数据和操作的方法以 props 的方式传入的包装组件中

            return (

                <Modal {...this.props} >
                       <WrappedComponent {...this.props} {...this.state} />

                </Modal>
            );
        }
    };
};

export default ModalHoc;
