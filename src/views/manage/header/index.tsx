import React, { Component } from 'react'
import { connect } from "react-redux";
import {Row} from 'antd'
import { SvgIcon } from "@/components";
import {UserInfo} from "@/views/account/userInfo";
import{toggle_collapsed}from '@/store/modules/app/action'

class CenterHeader extends Component<any> {

   constructor (props:any ) {
       super(props)
       this.state = {

       }
       console.log(this.props)
   }

   componentDidMount (): void {

    }
    toggle = () => {
        const { collapsed } = this.props
        this.props.toggleCollapsed({collapsed:!collapsed})
       console.log(this.props)
      }
   render(){

    const { user ,collapsed} = this.props;
       return (
            <Row align="middle" justify="space-between">
                <SvgIcon type={collapsed?'icon-menuon':'icon-menuoff'} size={30}  onClick={this.toggle}/>
                <Row>
                    <UserInfo user={user}/>
                </Row>
            </Row>
       )
   }

}
const stateMap = (state: any) => {
    return {
        user: state.user.baseInfo,
    };
};
const mapActions = (dispatch: any) => {
    return {
        toggleCollapsed: (payload: any) =>dispatch(toggle_collapsed(payload)) ,
    }
}
export default connect(stateMap,mapActions)(CenterHeader);


