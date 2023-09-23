import React, { useContext } from 'react';
import { AssetContext } from '../GrandFather/GrandFather';

const Special = ({asset}) => {
    const anotherAsset = useContext(AssetContext);
    return (
        <div>
            <h2>Special</h2>
            <p>Got: {asset}</p>
            <p>Also Got: {anotherAsset}</p>
        </div>
    );
};

export default Special;