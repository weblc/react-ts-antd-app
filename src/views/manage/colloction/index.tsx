import React, { Component  } from 'react'

export default  class User extends Component <any,any>{
    constructor(props:any) {
        super(props);
        this.state = {
            count: 0
        }

    }
   onPress = ()=>{
        let newCount = this.state.count + 1
        this.setState({
            count: newCount
        },()=>{
            if (this.state.count === 5){
                throw new Error('i crashed！！！')
            }
        })
    }
   render(){
       return (
           <div>
               <div>345</div>

           </div>

       )
   }

}


