import React, { Component } from "react";
import { Card } from "antd";

const { Meta } = Card;
export default class Item extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    componentDidMount(): void {}
    componentWillUnmount(): void {}
    render() {
        return (
            <Card
                type="inner"
                hoverable
                style={{ width: '80%',marginBottom:20}}
                cover={
                    <img
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                }
            >
                <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                />
            </Card>
        );
    }
}
