import React from 'react';
import './Order.css';

const Order = (props) => {

    let assortment =  props.assortment;
    let orders = [];
    let orderComponent = [];
    let orderPrice = 0;

    if (!props.isOrder) {
       orderComponent.push(
           <p key='o-empty'>Order is empty! Please add some items</p>
       );
    } else {
        assortment.forEach(item => {
            if(item.amount !== 0){
                orders.push(item);
            }
        });
    }

    orders.forEach(item => {
        orderPrice += item.amount*item.price;
        let orderItem = (
            <div className="order-item" key={item.id}>
                {item.title} x {item.amount}, unit price: {item.price} KGS
            </div>
        );
        orderComponent.push(orderItem);
    });


    return (
       <div className="order-block">
           <h3 className="order-title">Order Details:</h3>
           <div className="order-info">
               {orderComponent}
               {orderPrice}
           </div>
       </div>
    )
};

export default Order;
