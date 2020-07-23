import React, { Component } from "react";

import { Modal, Button } from "antd";
interface test {
    onOk: () => void;
    onCancel: () => void;
}

interface modalProps {
    getContainer:HTMLElement | false;
    visible: boolean;
    title?: string;
    component: any;
    maskClosable?: boolean;
    onOk: () => void;
    onCancel: () => void;
    footer: null|string;
}

const Footer: React.FC<test> = ({ onOk, onCancel }) => {
    return (
        <div>
            <Button key="submit" type="primary" onClick={onCancel}>
                确定
            </Button>
            ,
            <Button key="back" onClick={onOk}>
                取消
            </Button>
            ,
        </div>
    );
};

export default class CommonModal extends Component<modalProps> {
    static defaultProps = {
        getContainer:document.body,
        visible: false,
        title: "标题",
        component: "",
        maskClosable: true,
        footer: null
    };

    constructor(props: modalProps) {
        super(props);
        this.state = {};
    }

    componentDidMount(): void {}
    render() {
        return (
            <Modal
                {...this.props}
                footer={
                    this.props.footer===''?null:this.props.footer || (
                        <Footer
                            onOk={this.props.onOk}
                            onCancel={this.props.onCancel}
                        />
                    )
                }
            >
                {this.props.component}
            </Modal>
        );
    }
}
