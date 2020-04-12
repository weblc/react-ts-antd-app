import React from 'react'
import dataChartsHoc from './index'

import {
    Chart,
    Geom,
    Axis,
    Tooltip,
} from "bizcharts";


const TaskStatistics: React.FC<any> = ({ sourceData }) => {
    const data = [
        {
            year: "1951 年",
            sales: 38
        },
        {
            year: "1952 年",
            sales: 52
        },
        {
            year: "1956 年",
            sales: 61
        },
        {
            year: "1957 年",
            sales: 145
        },
        {
            year: "1958 年",
            sales: 48
        },
        {
            year: "1959 年",
            sales: 38
        },
        {
            year: "1960 年",
            sales: 38
        },
        {
            year: "1962 年",
            sales: 38
        }
    ];
    const cols = {
        account: {
            tickInterval: 20
        }
    };

    return (
        <Chart height={100} data={sourceData} scale={cols} padding={[10, 0, 0, 0]} forceFit>
            <Tooltip crosshairs={{ type: 'y', style: { lineWidth: 0 } }} showTitle={false} />
            <Geom type="interval" position="date*account" tooltip={['date*value', (date,value) => {
                   return {
                    name:`${date} 任务完成次数`,
                    value:value
                  }
                }]} />
        </Chart>
    );
};

export default dataChartsHoc({
    title: '任务完成数'
})(TaskStatistics)
