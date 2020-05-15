

import React, { Component } from "react";

import {  Pagination  } from "antd";

import { SpaceRow } from "@/components";
import FromComp from "./form";
import TableComp from "./table";

import {managerApi} from '@/api'
import {sleep} from '@/utils'

import classnames from "classnames";
import "./index.less";



class Task extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            loadding:false,
            tableData:[],
            pageObj:{
                current:1,
                total:0,
                pageSize:10,
            },
            top: "topLeft",
            bottom: "bottomRight",
            page:1,
        };
    }
    onChange = (pageNumber:number)=>{
        console.log(pageNumber)

    }
    searchHandle = (val:any)=>{
        this.setState({
            loadding:true
        })
        managerApi.getUserTaskList({...val,page:this.state.page}).then(async ({success,message,data:{list,pagination}})=>{
            await sleep(1000)
            this.setState({
                loadding:false
            })
            if(success){
                console.log(list)
                console.log(pagination)
                // this.setState({
                //     tableData:list,
                //     pageObj:pagination
                // })
            }else{
                message.error(message);
            }
        })
    }
    render() {

        const { current,total,pageSize} = this.state.pageObj
        return (
            <div className={classnames("manage-Layout")}>
                <FromComp searchHandle = {this.searchHandle}></FromComp>
                <TableComp loadding={this.state.loadding} tableData={this.state.tableData}/>
                <SpaceRow justify="end">
                    <Pagination  current={current} total={total} pageSize={pageSize} onChange={this.onChange} showSizeChanger />
                </SpaceRow>
            </div>
        );
    }
}
export default Task;
