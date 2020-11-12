import React, {useContext, useState} from "react"
import {Context} from "../Context"

function CartItem({item}) {
    const {removeFromCart} = useContext(Context)
    const [hovered, setHovered] = useState(false)

    const garbageIcon = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i 
            className={garbageIcon}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)} 
            onClick={(() => removeFromCart(item.id))}
            ></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem