import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart, handelRemoveFromCart } = props;
    //conditional rendering options
    //1.element variable
    let command;
    if (cart.length === 0) {
        command = <div>
            <h3>oi kipta, kinos na kan</h3>
            <p>Please Add at least one item</p>
        </div>
    } else if (cart.length === 1) {
        command = <p>Please Add more...</p>
    }
    else {
        command = <p><small>Thanks for adding item</small></p>
    }

    //2nd way (ternary operator ? true : false)
    //3rd way (using and operator)
    //4th way(using or operator )

    return (
        <div>
            <h2>Item Selected:{cart.length}</h2>
            {command}
            {
                cart.map(tshirt => <p>
                    {tshirt.name}
                    <button onClick={() => handelRemoveFromCart(tshirt)}>X</button>
                </p>)
            }
            {/* 2nd way  */}
            {
                cart.length !== 4 ? <p>Keep adding</p> : <button>Clear All</button>
            }


            {/* 3rd way short hand way  */}
            {
                cart.length === 4 && <div>
                    <button className='orange'>Review Order</button>
                </div>
            }
            {
                cart.length === 0 || <p className='orange'> Yay!! now you are buying</p>
            }
        </div>
    );
};

export default Cart;