import React, { Component } from "react";
import styles from "../movie.module.less";
import { Comment, Icon, Tooltip, Avatar, List } from "antd";
import moment from "moment";

interface IState {
    likes: number;
    dislikes: number;
    action: any;
}

const data = [
    {
        actions: [<span key="comment-list-reply-to-0">Reply to</span>],
        author: "Han Solo",
        avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        content: (
            <p>
                We supply a series of design principles, practical patterns and
                high quality design resources (Sketch and Axure), to help people
                create their product prototypes beautifully and efficiently.
            </p>
        ),
        datetime: (
            <Tooltip
                title={moment()
                    .subtract(1, "days")
                    .format("YYYY-MM-DD HH:mm:ss")}
            >
                <span>
                    {moment()
                        .subtract(1, "days")
                        .fromNow()}
                </span>
            </Tooltip>
        )
    },
    {
        actions: [<span key="comment-list-reply-to-0">Reply to</span>],
        author: "Han Solo",
        avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        content: (
            <p>
                We supply a series of design principles, practical patterns and
                high quality design resources (Sketch and Axure), to help people
                create their product prototypes beautifully and efficiently.
            </p>
        ),
        datetime: (
            <Tooltip
                title={moment()
                    .subtract(2, "days")
                    .format("YYYY-MM-DD HH:mm:ss")}
            >
                <span>
                    {moment()
                        .subtract(2, "days")
                        .fromNow()}
                </span>
            </Tooltip>
        )
    },
    {
        actions: [<span key="comment-list-reply-to-0">Reply to</span>],
        author: "Han Solo",
        avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        content: (
            <p>
                We supply a series of design principles, practical patterns and
                high quality design resources (Sketch and Axure), to help people
                create their product prototypes beautifully and efficiently.
            </p>
        ),
        datetime: (
            <Tooltip
                title={moment()
                    .subtract(2, "days")
                    .format("YYYY-MM-DD HH:mm:ss")}
            >
                <span>
                    {moment()
                        .subtract(2, "days")
                        .fromNow()}
                </span>
            </Tooltip>
        )
    },
    {
        actions: [<span key="comment-list-reply-to-0">Reply to</span>],
        author: "Han Solo",
        avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        content: (
            <p>
                We supply a series of design principles, practical patterns and
                high quality design resources (Sketch and Axure), to help people
                create their product prototypes beautifully and efficiently.
            </p>
        ),
        datetime: (
            <Tooltip
                title={moment()
                    .subtract(2, "days")
                    .format("YYYY-MM-DD HH:mm:ss")}
            >
                <span>
                    {moment()
                        .subtract(2, "days")
                        .fromNow()}
                </span>
            </Tooltip>
        )
    },
    {
        actions: [<span key="comment-list-reply-to-0">Reply to</span>],
        author: "Han Solo",
        avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        content: (
            <p>
                We supply a series of design principles, practical patterns and
                high quality design resources (Sketch and Axure), to help people
                create their product prototypes beautifully and efficiently.
            </p>
        ),
        datetime: (
            <Tooltip
                title={moment()
                    .subtract(2, "days")
                    .format("YYYY-MM-DD HH:mm:ss")}
            >
                <span>
                    {moment()
                        .subtract(2, "days")
                        .fromNow()}
                </span>
            </Tooltip>
        )
    },
];
export default class Comments extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            likes: 0,
            dislikes: 0,
            action: null
        };
    }

    componentDidMount(): void {}
    componentWillUnmount(): void {}
    like = () => {
        this.setState({
            likes: 1,
            dislikes: 0,
            action: "liked"
        });
    };

    dislike = () => {
        this.setState({
            likes: 0,
            dislikes: 1,
            action: "disliked"
        });
    };
    render() {


        return (
            <List
                className="comment-list"
                header={`${data.length} replies`}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <li>
                        <Comment
                            actions={item.actions}
                            author={item.author}
                            avatar={item.avatar}
                            content={item.content}
                            datetime={item.datetime}
                        />
                    </li>
                )}
            />
        );
    }
}
