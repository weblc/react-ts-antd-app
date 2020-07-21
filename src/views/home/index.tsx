import React from "react";
import {withRouter} from 'react-router-dom' //引入withRouter
import Header from "./components/header";
import Body from "./components/body";

const Home: React.FC = (props:any) => {

    return (
        <div>
            <Header />
            <Body {...props}/>
        </div>
    );
};

export default  withRouter(Home) ;
