import React from 'react'
import dataChartsHoc from './index'

import {
    G2,
    Chart,
    Axis,
    Geom,
    Legend,
    Tooltip,
} from "bizcharts";
interface colorMapInterFace{
    [index:string]:any
}

const TaskStatistics: React.FC<any> = ({ sourceData }) => {
    const colorMap:colorMapInterFace= {
        Asia: G2.Global.colors[0],
        Americas: G2.Global.colors[1],
        Europe: G2.Global.colors[2],
        Oceania: G2.Global.colors[3]
      };
    const cols = {
        LifeExpectancy: {
          alias: "人均寿命（年）"
        },
        Population: {
          type: "pow",
          alias: "人口总数"
        },
        GDP: {
          alias: "人均国内生产总值($)"
        },
        Country: {
          alias: "国家/地区"
        }
      };
    return (
        <Chart height={300} data={sourceData} scale={cols}  padding={[30,20, 30, 20]} forceFit>
        <Tooltip showTitle={false} />
        <Axis
          name="GDP"
          label={{
            formatter: (value:any) => {
              return (value / 1000).toFixed(0) + "k";
            } // 格式化坐标轴的显示
          }}
        />
        <Axis name="LifeExpectancy" />
        <Geom
          type="point"
          position="GDP*LifeExpectancy"
          color={[
            "continent",
            (val:string)=> {
              return colorMap[val];
            }
          ]}
          tooltip="Country*Population*GDP*LifeExpectancy"
          opacity={0.65}
          shape="circle"
          size={["Population", [4, 25]]}
          style={[
            "continent",
            {
              lineWidth: 1,
              strokeOpacity: 1,
              fillOpacity: 0.3,
              opacity: 0.65,
              stroke: (val:string) => {
                return colorMap[val];
              }
            }
          ]}
        />
      </Chart>
    );
};

export default dataChartsHoc({
    title: '气泡图'
})(TaskStatistics)
