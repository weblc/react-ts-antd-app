import React, { Component } from 'react'

import { Row, Col } from "antd";


export default class MovieDetails extends Component {

   constructor (props:any ) {
       super(props)
       this.state = {

       }
   }

   componentDidMount (): void {

    }
   componentWillUnmount (): void {

    }
   render(){
       return (
        <div style={{background:`url(${require('@/assets/img/bg.jpg')} ) `,width:'100%',height:'90%',position:'fixed' }}></div>

       )
   }

}

