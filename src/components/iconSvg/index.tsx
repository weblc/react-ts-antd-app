
import React from 'react';

import styles from './index.module.less'
interface IProps {
    type: string,
    size?: number,
    cursor?:boolean,
    className?:string,
  }
const SvgIcon = (props: IProps) => {
    let size = props.size || 12
    return (
        <svg className={`${styles.icon} ${props.className} ${props.cursor?styles.cursor:''}`} aria-hidden="true" style={{fontSize:`${size}px`}}>
            <use xlinkHref={`#${props.type}`} />
        </svg>
    );
  }

  export default SvgIcon;
