
import React from 'react';

import styles from './index.module.less'
interface IProps {
    type: string
  }
const SvgIcon = (props: IProps) => {
    return (
        <svg className={`${styles.icon} `} aria-hidden="true">
            <use xlinkHref={`#${props.type}`} />
        </svg>
    );
  }

  export default SvgIcon;
