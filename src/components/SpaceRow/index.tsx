import React, { Children } from "react";

import { Row } from "antd";

type SizeType = "small" | "middle" | "large" | undefined;

export interface SpaceRowProps {
    type?: "padding";
    size?: SizeType | number ;
}

const spaceSize = {
    small: 8,
    middle: 16,
    large: 24,
};

const SpaceRow: React.FC<SpaceRowProps> = props => {
    const { children, type = "padding", size  } = props;

    const items = Children.toArray(children);

    return (
        <Row
            style={{
                [type]: typeof size === "string" ? spaceSize[size] : size,
            }}
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
