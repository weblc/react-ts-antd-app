/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from "react";

import { Table, Tag, Pagination, Row } from "antd";

import { SpaceRow } from "@/components";
import From from "./form";

import classnames from "classnames";
import "./index.less";

const columns = [
    {
        title: "任务id",
        dataIndex: "name",
        key: "name",
        render: (text: any) => <a>{text}</a>,
    },
    {
        title: "任务日期",
        dataIndex: "age",
        key: "age",
    },
    {
        title: "状态",
        dataIndex: "address",
        key: "address",
    },
    {
        title: "标签",
        key: "tags",
        dataIndex: "tags",
        render: (tags: any) => (
            <span>
                {tags.map((tag: any) => {
                    let color = tag.length > 5 ? "geekblue" : "green";
                    if (tag === "loser") {
                        color = "volcano";
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </span>
        ),
    },
    {
        title: "操作",
        key: "action",
        render: (text: any, record: any) => (
            <span>
                <a style={{ marginRight: 16 }}>编辑 </a>
                <a>删除</a>
            </span>
        ),
    },
];
const data = [
    {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["普通任务"],
    },
    {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["观影"],
    },
    {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
    },
];
class Task extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            top: "topLeft",
            bottom: "bottomRight",
        };
    }
    render() {
        return (
            <div className={classnames("manage-Layout")}>
                <From></From>
                <Table columns={columns} dataSource={data} pagination={false} />
                <SpaceRow>
                    <Pagination defaultCurrent={0} total={20} />
                </SpaceRow>
            </div>
        );
    }
}
export default Task;
