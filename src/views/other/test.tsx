import React from 'react';


//定义props和state的类型接口
interface IProps {
  add: () => void; // () => void表示函数类型
}
interface IState {
  msg: string;
}
//把props和state的类型接口传入组件
export default class Text extends React.Component<IProps, IState>{
  constructor(props: IProps){
    super(props);
    this.state = {
      msg: 'hello world'
    }
  }
  render(){
    return(
      <div>
          this is test
      </div>
    )
  }
}