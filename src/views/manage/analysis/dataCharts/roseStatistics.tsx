import React from 'react'
import dataChartsHoc from './index'

import {
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
} from "bizcharts";
interface colorMapInterFace{
    [index:string]:any
}

const RoseStatistics: React.FC<any> = ({ sourceData }) => {

    const cols = {
        cost: {
          min: 0
        }
      };
    return (
        <Chart
          height={400}
          data={sourceData}
          scale={cols}
          padding={[40, 135, 20, 20]}
          forceFit
        >
          <Coord type="polar" />
          <Axis
            name="cost"
            label={null}
            tickLine={null}
            line={{
              stroke: "#E9E9E9",
              lineDash: [3, 3]
            }}
          />
          <Axis
            name="country"
            grid={{
              align: "center"
            }}
            tickLine={null}
            label={{
              textStyle: {
                textAlign: "center" // 设置坐标轴 label 的文本对齐方向
              }
            }}
          />
          <Legend name="country" itemWidth={50} position='right-center' />
          <Tooltip />
          <Geom
            type="interval"
            position="country*cost"
            color="country"
            style={{
              lineWidth: 1,
              stroke: "#fff"
            }}
          >
            <Label
              content="cost"
              offset={-15}
              textStyle={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 11
              }}
            />
          </Geom>
        </Chart>
    );
};

export default dataChartsHoc({
    title: '玫瑰图'
})(RoseStatistics)
