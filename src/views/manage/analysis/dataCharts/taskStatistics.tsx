import React from 'react'
import dataChartsHoc from './index'

import {
    Chart,
    Geom,
    Tooltip,
} from "bizcharts";


const TaskStatistics: React.FC<any> = ({ sourceData }) => {

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
