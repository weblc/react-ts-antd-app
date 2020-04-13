import React from "react";
import { Card ,Skeleton} from "antd";

interface chartsCategory {
    title: string;
}
const dataChartsHoc = (params: chartsCategory) => (WrappedComponent: any) => {
    return class extends React.Component<any,any> {
        constructor(props: any) {
            super(props);
            this.state = {
                loadding:true
            };
        }
        componentDidMount(): void {
            setTimeout(() => {
                this.setState({
                    loadding:false
                })
            }, 1000);
        }
        render() {
            // 将状态数据和操作的方法以 props 的方式传入的包装组件中
            const {sourceData,width=340} = this.props
            const {loadding} = this.state
            return (

                <Card style={{ width: width,marginBottom:20 }}>
                      <Skeleton loading={loadding}  >
                         <div>{params.title}</div>
                         <WrappedComponent sourceData={sourceData} {...this.state} />
                      </Skeleton>

                </Card>
            );
        }
    };
};

export default dataChartsHoc;
