import React from "react"

import { Typography } from "antd"

function areEqual(prevProps: any, nextProps: any) {
    return (
      prevProps.checked === nextProps.checked
    )
  }

const ItemCard =React.memo( (props: any) => {

  const { cartItem, checked, onCheckedChange } = props
  const { name, price } = cartItem

  const onWrapCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target
    onCheckedChange.current(cartItem, checked)
  }
  console.log(123)
  return (

    <div className="item-card">

      <div className="checkbox-wrap">
        <input
          type="checkbox"
          checked={checked}
          onChange={onWrapCheckedChange}
        />
      </div>
      <p className="item-info">
        {name} <Typography.Text mark>${price}</Typography.Text>
      </p>
    </div>
  )
},areEqual)


export default ItemCard
