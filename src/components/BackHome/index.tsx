import React from "react";
import  "./index.less";
import { SvgIcon } from "@/components";
import classnames from "classnames";
import { Link, withRouter } from "react-router-dom";

const hideLists = ["/home"];

const BackHome = (props: any) => {
    const { location } = props;
    const hideIt = hideLists.includes(location.pathname);
    // className={`${style.wrapper} ${hideIt?'active':''}`}
    return (
        <div className={classnames("back_home", { hide: hideIt })}>
            <Link to="/home">
                <SvgIcon type="icon-shouye" size={28} />
            </Link>
        </div>
    );
};
export default withRouter(BackHome);
