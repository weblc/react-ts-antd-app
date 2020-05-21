import React, { Children } from "react";

import { Row } from "antd";

type SizeType = "small" | "middle" | "large" | undefined;

export interface SpaceRowProps {
    type?: "padding";
    size?: SizeType | number |Array<number> ;
    justify?:any
}

const spaceSize = {
    small: 8,
    middle: 16,
    large: 24,
};

const SpaceRow: React.FC<SpaceRowProps> = props => {
    const { children, type = "padding", size, justify } = props;

    const items = Children.toArray(children);

    const computStyle = ()=>{
        console.log(typeof size)
        // typeof size === "string" ? spaceSize[size] :

       if(typeof size === "string"){
           return spaceSize[size]
       }else if (typeof size === "number"){
            return  size
       }else{
           return size?.map((item)=>{
               return `${item}px`
           })?.join(' ')
       }
    }
    console.log(computStyle())

    return (
        <Row
            style={{
                [type]: computStyle()
            }}
            justify={justify}
        >
            {items.map((child, i) => (
                <div key={i}>{child}</div>
            ))}
        </Row>
    );
};
SpaceRow.defaultProps = {
    size: "small",
};

export default SpaceRow;
