/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from "react";

import { Table, Tag, Pagination, message } from "antd";

import { SpaceRow } from "@/components";
import From from "./form";

import {managerApi} from '@/api'
import {sleep} from '@/utils'

import classnames from "classnames";
import "./index.less";

const columns = [
    {
        title: "任务id",
        dataIndex: "id",
        key: "id",
        render: (text: any) => <a>{text}</a>,
    },
    {
        title: "任务名",
        dataIndex: "title",
        key: "title",
    },
    {
        width:200,
        title: "任务详情",
        dataIndex: "content",
        key: "content",
    },
    {

        title: "开始时间",
        dataIndex: "startTime",
        key: "startTime",
    },
    {

        title: "结束时间",
        dataIndex: "endTime",
        key: "endTime",
    },
    // {
    //     title: "标签",
    //     key: "tags",
    //     dataIndex: "tags",
    //     render: (tags: any) => (
    //         <span>
    //             {tags.map((tag: any) => {
    //                 let color = tag.length > 5 ? "geekblue" : "green";
    //                 if (tag === "loser") {
    //                     color = "volcano";
    //                 }
    //                 return (
    //                     <Tag color={color} key={tag}>
    //                         {tag.toUpperCase()}
    //                     </Tag>
    //                 );
    //             })}
    //         </span>
    //     ),
    // },
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

class Task extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            loadding:false,
            tableData:[],
            top: "topLeft",
            bottom: "bottomRight",
        };
    }
    searchHandle = (val:any)=>{
        this.setState({
            loadding:true
        })
        managerApi.getUserTaskList(val).then(async ({success,message,data})=>{
            await sleep(1000)
            this.setState({
                loadding:false
            })
            if(success){

                this.setState({
                    tableData:data
                })
            }else{
                message.error(message);
            }
        })
    }
    render() {
        return (
            <div className={classnames("manage-Layout")}>
                <From searchHandle = {this.searchHandle}></From>
                <Table columns={columns}
                loading={this.state.loadding}
                dataSource={this.state.tableData} pagination={false} rowKey={(item,index)=>item.id}/>
                <SpaceRow>
                    <Pagination defaultCurrent={0} total={20} />
                </SpaceRow>
            </div>
        );
    }
}
export default Task;
