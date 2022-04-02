import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import './GrandFather.css'
import Uncle from '../Uncle/Uncle';

export const RingContext = createContext('diamond ring');

const GrandFather = () => {
    const [house, setHouse] = useState(1);

    const ornaments = 'diamond ring';

    const handelBuyAHouse = () => {
        const newHouse = house + 1;
        setHouse(newHouse)
    }

    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div style={{ border: "2px solid goldenrod" }}>
                <h2>This is GrandFather</h2>
                <button onClick={handelBuyAHouse} >buy A House</button>
                <p>House:{house}</p>
                <div className='grand-father' >
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>

            </div>
        </RingContext.Provider>
    );
};

export default GrandFather;