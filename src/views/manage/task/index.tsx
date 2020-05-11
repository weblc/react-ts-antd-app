/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

import { Table, Tag,Pagination,Row } from "antd";

import {SpaceRow} from '@/components'

import classnames from "classnames";
import "./index.less";



const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text:any) => <a>{text}</a>,
    },
    {
        title: "Age",
        dataIndex: "age",
        key: "age",
    },
    {
        title: "Address",
        dataIndex: "address",
        key: "address",
    },
    {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
        render: (tags:any) => (
            <span>
                {tags.map((tag:any) => {
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
        title: "Action",
        key: "action",
        render: (text:any, record:any) => (
            <span>
                <a style={{ marginRight: 16 }}>Invite {record.name}</a>
                <a>Delete</a>
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
        tags: ["nice", "developer"],
    },
    {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"],
    },
    {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
    },
];
class Task extends Component<any,any> {
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
                <Table columns={columns} dataSource={data} pagination={false}/>
               <SpaceRow >
                    <Pagination defaultCurrent={0} total={20} />
               </SpaceRow>
            </div>
        );
    }
}
export default Task;
