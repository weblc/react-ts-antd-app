/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { Table } from "antd";

interface TableProps {
    loadding: boolean;
    tableData: Array<any>;
}
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
        width: 200,
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

const TableComp: React.FC<TableProps> = ({ loadding, tableData }) => {
    console.log('render-parent1')
    return (
        <>
            <Table columns={columns} loading={loadding} dataSource={tableData} pagination={false} rowKey={(item, index) => item.id} />
        </>
    );
};

export default TableComp;
