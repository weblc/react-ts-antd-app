import React from 'react'
import dataChartsHoc from './index'
import {
    Chart,
    Geom,
    Tooltip,
} from "bizcharts";
import DataSet from "@antv/data-set";

const LandStatistics: React.FC<any> = ({ sourceData }) => {
    const dv = new DataSet.View().source(sourceData);
    dv.transform({
        type: "fold",
        fields: ["account"],
        key: "type",
        value: "value"
    });
    const scale = {
        value: {
            alias: "月登陆次数",
            tickInterval: 50
        },
        date: {
            range: [0, 1]
        }
    };


    return (
        <Chart data={dv} height={100}
            padding={"auto"}

            scale={scale}
            forceFit
        >
            <Tooltip crosshairs={{ style: { lineWidth: 0 } }} showTitle={false} />
            <Geom type="area" position="date*value" color={['type', 'pink']} shape="smooth" tooltip={['date*value', (date, value) => {
                return {
                    name: `${date}登陆次数`,
                    value: value
                }
            }]} />
        </Chart>
    );
};

export default dataChartsHoc({
    title: '登陆次数'
})(LandStatistics)
