import React, { Component } from "react";
import {Row,Col} from 'antd'
import styles from "./analysis.module.less";
import LandStatistics from "./dataCharts/landStatistics";
import TaskStatistics from "./dataCharts/taskStatistics";
import MainChart from "./dataCharts/mainStatistics";
import RoseStatistics from "./dataCharts/roseStatistics";

const UserAnalysisData = {
    landData: [
        { date: "2019-8", account: 20 },
        { date: "2019-9", account: 19 },
        { date: "2019-10", account: 16 },
        { date: "2019-11", account: 24 },
        { date: "2019-12", account: 28 },
        { date: "2020-02", account: 22 },
        { date: "2020-01", account: 11 },
        { date: "2020-03", account: 13 },
        { date: "2020-04", account: 10 },
    ],
    taskData: [
        { date: "2019-8", account: 20 },
        { date: "2019-9", account: 19 },
        { date: "2019-10", account: 16 },
        { date: "2019-11", account: 24 },
        { date: "2019-12", account: 28 },
        { date: "2020-02", account: 22 },
        { date: "2020-01", account: 11 },
        { date: "2020-03", account: 13 },
        { date: "2020-04", account: 10 },
    ],
    mainData: [
        {
            continent: "Americas",
            Country: "Argentina",
            LifeExpectancy: 75.32,
            GDP: 12779.37964,
            Population: 40301927,
        },
        {
            continent: "Americas",
            Country: "Brazil",
            LifeExpectancy: 72.39,
            GDP: 9065.800825,
            Population: 190010647,
        },
        {
            continent: "Americas",
            Country: "Canada",
            LifeExpectancy: 80.653,
            GDP: 36319.23501,
            Population: 33390141,
        },
        {
            continent: "Americas",
            Country: "Chile",
            LifeExpectancy: 78.553,
            GDP: 13171.63885,
            Population: 16284741,
        },
        {
            continent: "Americas",
            Country: "Colombia",
            LifeExpectancy: 72.889,
            GDP: 7006.580419,
            Population: 44227550,
        },
        {
            continent: "Americas",
            Country: "Costa Rica",
            LifeExpectancy: 78.782,
            GDP: 9645.06142,
            Population: 4133884,
        },
        {
            continent: "Americas",
            Country: "Cuba",
            LifeExpectancy: 78.273,
            GDP: 8948.102923,
            Population: 11416987,
        },
        {
            continent: "Americas",
            Country: "Dominican Republic",
            LifeExpectancy: 72.235,
            GDP: 6025.374752,
            Population: 9319622,
        },
        {
            continent: "Americas",
            Country: "Ecuador",
            LifeExpectancy: 74.994,
            GDP: 6873.262326,
            Population: 13755680,
        },
        {
            continent: "Asia",
            Country: "China",
            LifeExpectancy: 72.961,
            GDP: 4959.114854,
            Population: 1318683096,
        },
        {
            continent: "Asia",
            Country: "Hong Kong, China",
            LifeExpectancy: 82.208,
            GDP: 39724.97867,
            Population: 6980412,
        },
        {
            continent: "Asia",
            Country: "Japan",
            LifeExpectancy: 82.603,
            GDP: 31656.06806,
            Population: 127467972,
        },
        {
            continent: "Asia",
            Country: "Korea, Dem. Rep.",
            LifeExpectancy: 67.297,
            GDP: 1593.06548,
            Population: 23301725,
        },
        {
            continent: "Asia",
            Country: "Korea, Rep.",
            LifeExpectancy: 78.623,
            GDP: 23348.13973,
            Population: 49044790,
        },
        {
            continent: "Americas",
            Country: "El Salvador",
            LifeExpectancy: 71.878,
            GDP: 5728.353514,
            Population: 6939688,
        },
        {
            continent: "Europe",
            Country: "Norway",
            LifeExpectancy: 80.196,
            GDP: 49357.19017,
            Population: 4627926,
        },
        {
            continent: "Europe",
            Country: "Poland",
            LifeExpectancy: 75.563,
            GDP: 15389.92468,
            Population: 38518241,
        },
        {
            continent: "Oceania",
            Country: "Australia",
            LifeExpectancy: 81.235,
            GDP: 34435.36744,
            Population: 20434176,
        },
        {
            continent: "Oceania",
            Country: "New Zealand",
            LifeExpectancy: 80.204,
            GDP: 25185.00911,
            Population: 4115771,
        },
        {
            continent: "Europe",
            Country: "Portugal",
            LifeExpectancy: 78.098,
            GDP: 20509.64777,
            Population: 10642836,
        },
    ],
    roseData:[
        {
            country: "中国",
            cost: 96
          },
          {
            country: "德国",
            cost: 121
          },
          {
            country: "美国",
            cost: 100
          },
          {
            country: "日本",
            cost: 111
          },
          {
            country: "韩国",
            cost: 102
          },
          {
            country: "法国",
            cost: 124
          },
          {
            country: "意大利",
            cost: 123
          },
          {
            country: "荷兰",
            cost: 111
          },
          {
            country: "比利时",
            cost: 123
          },
          {
            country: "英国",
            cost: 109
          },
          {
            country: "加拿大",
            cost: 115
          },
          {
            country: "俄罗斯",
            cost: 99
          },
    ]
};
class UserAnalysis extends Component<any,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            loadding:true
        };
    }

    componentDidMount(): void {}
    componentWillUnmount(): void {}
    render() {

        return (
            <div className={styles.analysis}>
                <div className={styles.briefing}>
                    <LandStatistics sourceData={UserAnalysisData.landData} />
                    <LandStatistics sourceData={UserAnalysisData.landData} />
                    <LandStatistics sourceData={UserAnalysisData.landData} />
                    <TaskStatistics sourceData={UserAnalysisData.taskData} />
                </div>
                <div className={styles.main}>
                <MainChart sourceData={UserAnalysisData.mainData} width={"100%"} />
                </div>
                <Row gutter={20}>
                    <Col span={12}>
                        <RoseStatistics sourceData={UserAnalysisData.roseData} width={"100%"}/>
                    </Col>
                    <Col span={12}>
                        <RoseStatistics sourceData={UserAnalysisData.roseData} width={"100%"}/>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default UserAnalysis;
