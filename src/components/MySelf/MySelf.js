import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ house }) => {
    return (
        <div>
            <h2>This is me</h2>
            <p>House:{house}</p>
            <Special></Special>
        </div>
    );
};

export default MySelf;