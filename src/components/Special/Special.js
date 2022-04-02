import React, { useContext } from 'react';
import { RingContext } from '../GrandFather/GrandFather';
import './Special.css';
const Special = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h2>Special</h2>
            <p>{house}</p>
            <button onClick={() => setHouse(house + 1)}>buy a house</button>

        </div>
    );
};

export default Special;