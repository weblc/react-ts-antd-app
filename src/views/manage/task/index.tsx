

import React, { Component } from "react";

import moment from 'moment';
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
            form:{
                id:'123131',
                other:'测试任务',
                date:[moment('2020-06-06', 'YYYY-MM-DD'), moment('2021-06-06', 'YYYY-MM-DD')]
            },
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
    onShowSizeChange = async(current:number,size?:number)=>{
        console.log(current)
        let pageSize =size?size:this.state.pageObj.pageSize
        this.setState({
            pageObj:{
                ...this.state.pageObj,
                current:current,
                pageSize:pageSize,

            }
        },async ()=>{
            console.log('this.state')
            console.log(this.state)
            await this.getList()
        })



    }
    getList = ()=>{
        return new Promise((resolve)=>{
            this.setState({
                loadding:true,
            })
            managerApi.getUserTaskList({...this.state.form,...this.state.pageObj}).then(async ({success,message,data:{list,pagination}})=>{
                await sleep(1000)
                this.setState({
                    loadding:false
                })

                if(success){
                    this.setState({
                        tableData:list,
                        pageObj:pagination,

                    })
                }else{
                    message.error(message);
                }
                resolve()
            })
        })
    }
     searchHandle = async (val:any)=>{
        const {date} = val
        this.setState({
            form:{
                date: [moment(date[0].format('YYYY-MM-DD')),moment(date[1].format('YYYY-MM-DD'))],
                ...val
            }
        })
        await this.getList()

    }
    render() {

        const { current,total,pageSize} = this.state.pageObj
        return (
            <div className={classnames("manage-Layout")}>
                <FromComp searchHandle = {this.searchHandle} formObj= {this.state.form}></FromComp>
                <TableComp loadding={this.state.loadding} tableData={this.state.tableData}/>
                <SpaceRow justify="end">
                    <Pagination  current={current} total={total} pageSize={pageSize} onChange={this.onShowSizeChange} onShowSizeChange={this.onShowSizeChange} showSizeChanger />
                </SpaceRow>
            </div>
        );
    }
}
export default Task;
