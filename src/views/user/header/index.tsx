import React, { Component } from 'react'
import { connect } from "react-redux";
import {Row} from 'antd'
import { SvgIcon } from "@/components";
import {UserInfo} from "@/views/account/userInfo";


class CenterHeader extends Component<any> {

   constructor (props:any ) {
       super(props)
       this.state = {

       }
       console.log(this.props)
   }

   componentDidMount (): void {

    }
   componentWillUnmount (): void {

    }
   render(){

    const { user } = this.props;
       return (
            <Row align="middle" justify="space-between">
                <SvgIcon type="icon-menuoff" size={30} cursor={true}/>
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

export default connect(stateMap)(CenterHeader);


