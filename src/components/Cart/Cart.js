import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart,handelRemoveFromCart } = props;
    // console.log(props.cart);

    return (
        <div>
            <h2>Item Selected:{cart.length}</h2>
            {
                cart.map(tshirt => <p>
                    {tshirt.name}
                    <button onClick={()=>handelRemoveFromCart(tshirt)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;