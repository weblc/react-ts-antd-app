// import React from 'react'


// function getDisplayName(WrappedComponent:any) {
//     return WrappedComponent.displayName || WrappedComponent.name || 'Component';
// }

// export default (WrappedComponent:any)=> {

//     class Component extends React.Component {

//         constructor(props:any){
//             super(props)
//             this.state = {
//                 error: new Error(),
//                 hasError: false // UI级代码是否崩溃
//             }
//         }

//         componentDidCatch(error:any, info:any){
//             this.setState({
//                 error,
//                 hasError: true
//             })
//         }

//         render() {
//            if (this.state.hasError){
//                return <div>
//                     {this.state.error.toString()}
//                </div>
//            }
//             return <WrappedComponent {...this.props}/>
//         }
//     }


//     return Component
// }
