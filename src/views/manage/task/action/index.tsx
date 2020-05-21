import React from "react";

import { Button } from "antd";

import { Space } from "@/components";

interface ActionProps{
    addHandle:()=>void
}

const ActionComp: React.FC<ActionProps> = ({addHandle}) => {
    return (
        <div className="common-table-action">
            <Space>
                <Button type="primary" onClick={addHandle}>新增</Button>
               
            </Space>
        </div>
    );
};

export default ActionComp;
