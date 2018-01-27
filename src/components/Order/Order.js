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
                <b>{item.title.toUpperCase()}</b> x {item.amount}, unit price: {item.price} KGS
                <button className="order-delete" onClick={() => props.remove(item.id)}>x</button>
            </div>
        );
        orderComponent.push(orderItem);
    });


    return (
       <div className="order-block">
           <h3 className="order-title">Order Details:</h3>
           <div className="order-info">
               {orderComponent}
               <div className="total-price">
                   Total price: {orderPrice} KGS
               </div>
           </div>
       </div>
    )
};

export default Order;
