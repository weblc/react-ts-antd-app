import React from 'react'
import { Card } from 'antd'


interface chartsCategory{
    title:string,

}
const dataChartsHoc = (params:chartsCategory)=>(WrappedComponent:any) => {

    return class extends React.Component<any> {
        
        render () {
           
          // 将状态数据和操作的方法以 props 的方式传入的包装组件中
          return (
            <Card style={{ marginTop: 16 }} >
                    <div>{params.title}</div>
                    <WrappedComponent {...this.props} {...this.state}/>
                </Card>
        );
        }
      }


    
};

export default dataChartsHoc
