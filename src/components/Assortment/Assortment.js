import React from 'react';
import './Assortment.css';

const Assortment = (props) => {

    let assortment = props.assortment;

    const showAssortment = () => {

        const assortmentComponents = [];

        assortment.forEach((item) => {
           let itemComponent = (
               <div className="assortment-item"
                    key={item.id}
                    onClick={() => props.click(item.id)}>
                   <h4>{item.title}</h4>
                   <p>Prices: {item.price} KGS</p>
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
            </div>
        </div>
    )

};


export default Assortment;