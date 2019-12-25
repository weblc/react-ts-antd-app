import React from 'react';
import { Row, Col } from 'antd';
import { NavLink } from 'react-router-dom';
//定义props和state的类型接口
import Menu from '@/views/home/components/menu'
import HeaderDropdown from '@/views/home/components/headerDropdown'

import styles from './index.module.less'

interface IProps {
  history: () => void; // () => void表示函数类型
}
interface IState {
  msg: string;
}
//把props和state的类型接口传入组件
export default class Home extends React.Component{
  constructor(props:any){
    super(props);
    this.state={ }
  }


  render(){
    return(
      <div >
                <Row type="flex" justify="space-between" align="middle" className={styles.header}>
                    <Col span={8}>
                    <Menu />
                    </Col>
                    <Col span={4} >
                    <HeaderDropdown />
                    </Col>
                </Row>
                <Row>
                 <NavLink to="/login">About</NavLink>
                </Row>

      </div>
    )
  }
}
