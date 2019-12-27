import React, { Component } from "react";
import { Card, Rate, Icon, Statistic,Row } from "antd";

const { Meta } = Card;

interface movie {
    title: string;
    description: string;
    poster: string;
    score: number;
    hot: number;
}

export default class Movies extends Component<movie> {
    constructor(props: movie) {
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
                style={{ width: "90%", marginBottom: 20 }}
                cover={<img alt="example" src={this.props.poster} />}
            >
                <Row style={{ marginBottom: 20}} type="flex" justify="space-between">
                <Rate
                        allowHalf
                        disabled
                        character={<Icon type="fire" />}
                        defaultValue={this.props.hot}
                    />
                    <Statistic style={{display:'inline-block'}}
                        value={this.props.score}
                        valueStyle={{ color: "#3f8600" }}
                    />
                </Row>
                <Meta
                    title={this.props.title}
                    description={this.props.description}
                />
            </Card>
        );
    }
}
