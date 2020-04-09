import React, { Children } from 'react';

import style from './space.module.less'



export interface SpaceProps {
    prefixCls?: string;
    className?: string;
    size?:number;
    direction?: 'horizontal' | 'vertical';
}



const Space: React.FC<SpaceProps> = props => {
    const {
        children,
        size=12,
    } = props;



    const items = Children.toArray(children);

    return (
        <div className={style.space}>
            {items.map((child, i) => (
                <div className={style.item} style={i!==items.length-1?{marginRight:size}:{}}
                // eslint-disable-next-line react/no-array-index-key
                key={i}>
                    {child}
                </div>
            ))}
        </div>
    );
};

export default Space;