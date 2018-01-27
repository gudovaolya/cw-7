import React from 'react';
import './Assortment.css';

const Assortment = (props) => {

    return (
        <div className="assortment-block">
            <h3>Add items: </h3>
            <div className="assortment">
                <div className="assortment-item">
                    <h4>Hamburger</h4>
                    price: 80 KGS
                </div>
            </div>
        </div>
    )

};



export default Assortment;