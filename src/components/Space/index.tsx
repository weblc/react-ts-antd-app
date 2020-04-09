import React, { Children } from 'react';





export interface SpaceProps {
    prefixCls?: string;
    className?: string;

    direction?: 'horizontal' | 'vertical';
}



const Space: React.FC<SpaceProps> = props => {


    const {
        children,
    } = props;



    const items = Children.toArray(children);

    return (
        <div >
            {items.map((child, i) => (
                <div 
                // eslint-disable-next-line react/no-array-index-key
                key={i}>
                    {child}
                </div>
            ))}
        </div>
    );
};

export default Space;