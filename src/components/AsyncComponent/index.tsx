
import React, { FC, ReactElement } from 'react'
import Loadable from 'react-loadable'
export function asyncComponent (component: any, callback?: () => void) {
    return Loadable({
      ...DefaultProps,
      loader: component,

      render (loaded: any, props) {
        callback && callback()
        const Component = loaded.default
        return <Component {...props}/>
      }
    })
  }
