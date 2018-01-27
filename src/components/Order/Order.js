import React from 'react';
import './Order.css';

const Order = (props) => {

    let assortment =  props.assortment;
    let orders = [];
    let orderComponent = [];
    let orderPrice = props.orderPrice;
    let orderPriceComponent = '';

    if (orderPrice === 0) {
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
        let orderItem = (
            <div className="order-item" key={item.id}>
                <b>{item.title.toUpperCase()}</b> x
                <span>{item.amount}</span>, unit price: {item.price} KGS
                <button className="order-delete" onClick={() => props.remove(item.id)}>x</button>
            </div>
        );
        orderComponent.push(orderItem);
    });

    if (orderPrice !== 0) {
        orderPriceComponent = (
            <div className="total-price">
                Total price: <span>{orderPrice}</span> KGS
            </div>
        )
    }

    return (
       <div className="order-block">
           <h3 className="order-title">Order Details:</h3>
           <div className="order-info">
               {orderComponent}
               {orderPriceComponent}
           </div>
       </div>
    )
};

export default Order;
