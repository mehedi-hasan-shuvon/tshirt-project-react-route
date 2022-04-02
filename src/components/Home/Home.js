import React, { useState } from 'react';
import useTShirts from '../../hooks/useTShirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'
const Home = () => {
    const [tshirts, settshirts] = useTShirts();
    const [cart, setCart] = useState([]);

    const handelAddToCart = (selectedItem) => {
        const exists = cart.find(tshirt => tshirt._id === selectedItem._id);

        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        } else {
            alert("item alreay added");
        }

    }

    const handelRemoveFromCart = (selecetedItem) => {
        const rest = cart.filter(tshirt => tshirt._id !== selecetedItem._id);
        setCart(rest);
    };

    const id = cart.map(item => item._id);
   
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <TShirt key={tshirt._id}
                        tshirt={tshirt}
                        handelAddToCart={handelAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart key={id} cart={cart}
                    handelRemoveFromCart={handelRemoveFromCart}>

                </Cart>
            </div>
        </div>
    );
};

export default Home;