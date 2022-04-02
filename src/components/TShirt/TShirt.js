import React from 'react';
import './TShirt.css'
const TShirt = (props) => {
    const { handelAddToCart, tshirt } = props;
    const { _id, name, picture, price } = props.tshirt;

    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>Name:{name}</h4>
            <p>${price}</p>
            <button onClick={() => handelAddToCart(tshirt)}>Add To Cart</button>
        </div>
    );
};

export default TShirt;