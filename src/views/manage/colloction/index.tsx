import React, { Component  } from 'react'

interface TestHoc{
    onPress?:()=>void
}

const Wrapper =<P extends object> (Comp:React.ComponentType<P>) => {
    return class  extends React.Component<P>  {

        render () {
            return (
                < >
                    <div >这是高阶组件特有的函数</div >
                    <Comp { ...this.props }/>
                </ >
            )
        }
    }


}


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
            if (this.state.count == 5){
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


