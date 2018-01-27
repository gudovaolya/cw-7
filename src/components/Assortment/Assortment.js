import React from 'react';
import './Assortment.css';

const Assortment = (props) => {

    let assortment = props.assortment;
    let prices = props.prices;

    const showAssortment = () => {
        let assortmentItems = Object.keys(assortment);

        const assortmentComponents = [];

        assortmentItems.forEach((item) => {
           let itemComponent = (
               <div className="assortment-item" key={item}>
                   <h4>{item}</h4>
                   <p>Prices: {prices[item]} KGS</p>
               </div>
           );
            assortmentComponents.push(itemComponent);

        });

        return assortmentComponents;
    };

    let assortmentComponents = showAssortment();

    return (
        <div className="assortment-block">
            <h3 className="assortment-title">Add items: </h3>
            <div className="assortment">
                {assortmentComponents}
                <div className="assortment-item">
                    <h4>Hamburger</h4>
                    <p>Price: 80 KGS</p>
                </div>
            </div>
        </div>
    )

};



export default Assortment;