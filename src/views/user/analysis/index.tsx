import React, { Component } from 'react'

import styles from './analysis.module.less'
import LandStatistics from './dataCharts/landStatistics'
import TaskStatistics from './dataCharts/taskStatistics'




const UserAnalysisData = {
    landData: [
        { date: '2019-8', account: 20 },
        { date: '2019-9', account: 19 },
        { date: '2019-10', account: 16 },
        { date: '2019-11', account: 24 },
        { date: '2019-12', account: 28 },
        { date: '2020-02', account: 22 },
        { date: '2020-01', account: 11 },
        { date: '2020-03', account: 13 },
        { date: '2020-04', account: 10 },
    ],
    taskData: [
        { date: '2019-8', account: 20 },
        { date: '2019-9', account: 19 },
        { date: '2019-10', account: 16 },
        { date: '2019-11', account: 24 },
        { date: '2019-12', account: 28 },
        { date: '2020-02', account: 22 },
        { date: '2020-01', account: 11 },
        { date: '2020-03', account: 13 },
        { date: '2020-04', account: 10 },
    ]
}
class UserAnalysis extends Component {

    constructor(props: any) {
        super(props)
        this.state = {

        }
    }

    componentDidMount(): void {

    }
    componentWillUnmount(): void {

    }
    render() {

        return (
            <div className={styles.analysis}>
                <div className={styles.briefing}>
                     <LandStatistics sourceData={UserAnalysisData.landData} />
                     <TaskStatistics sourceData={UserAnalysisData.taskData} />
                     {/* <LandStatistics sourceData={UserAnalysisData.landData} /> */}
                    
                </div>
            </div>

        )
    }

}
export default UserAnalysis

