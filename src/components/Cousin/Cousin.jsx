import React from 'react';

const Cousin = ({name, asset}) => {
    
    
    return (
        <div>
            <h2>Cousins</h2>
            <p> {name} </p>
            <p> {asset && `Got: ${asset}` } {}</p>
           
        </div>
    );
};

export default Cousin;