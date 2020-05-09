import React from "react";
import ItemCard from "./ItemCard";
import { useState, useEffect,  } from "react";
import "./cart.css";

export interface CartItem {
    id: number;
    name: string;
    price: number;
}

const cartData = Array(5)
    .fill(undefined)
    .map((v, i) => ({
        id: i,
        name: `商品${i}`,
        price: Math.round(Math.random() * 100),
    }));
type CheckedMap = {
    [id: number]: boolean;
};
export default function Cart() {
    const [checkedMap, setCheckedMap] = useState<CheckedMap>({});


    const onCheckedChange = (cartItem:any, checked:any) => {
        const { id } = cartItem;
        const newCheckedMap = Object.assign({}, checkedMap, {
            [id]: checked,
        });
        setCheckedMap(newCheckedMap);
    };
    const onCheckedChangeRef = React.useRef(onCheckedChange)
    useEffect(() => {
        onCheckedChangeRef.current = onCheckedChange
        console.log('useEffect')
      })

    return (
        <div className="cart">
            {cartData.map(cartItem => {
                const { id,name } = cartItem;
                const checked = checkedMap[id]||false;
                return <ItemCard key={id} cartItem={cartItem} name={name} checked={checked} onCheckedChange={onCheckedChangeRef} />;
            })}
        </div>
    );
}
