import React, { Component } from 'react';
import Assortment from "../components/Assortment/Assortment";
import Order from "../components/Order/Order";

class FastFoodBuilder extends Component {
    state = {
        assortment: [
            {title: 'humburger', price: 80, amount: 0, id: 'assortment1'},
            {title: 'cheeseburger', price: 90, amount: 0, id: 'assortment2'},
            {title: 'coffee', price: 70, amount: 0, id: 'assortment3'},
            {title: 'tea', price: 50, amount: 0, id: 'assortment4'},
            {title: 'cola', price: 40, amount: 0, id: 'assortment5'},
            {title: 'fries', price: 45, amount: 0, id: 'assortment6'}
        ],
        isOrder: false
    };

    addItemInOrder = (id) => {
        const index = this.state.assortment.findIndex(item => item.id === id);
        const itemAssortment = {...this.state.assortment[index]};
        const assortment = [...this.state.assortment];
        let isOrder = this.state.isOrder;
        if (!isOrder) {
           isOrder = true;
           this.setState({isOrder});
        }
        itemAssortment.amount++;
        assortment[index] = itemAssortment;
        this.setState({assortment});
    };

    removeItemInOrder = (id) => {
        const index = this.state.assortment.findIndex(item => item.id === id);
        const itemAssortment = {...this.state.assortment[index]};
        const assortment = [...this.state.assortment];
        let isOrder = this.state.isOrder;



        itemAssortment.amount--;
        assortment[index] = itemAssortment;
        this.setState({assortment});
    };

    render () {
        return (
            <div className="container">
                <Assortment
                    assortment = {this.state.assortment}
                    click={this.addItemInOrder}
                />
                <Order
                    isOrder={this.state.isOrder}
                    assortment = {this.state.assortment}
                    remove={this.removeItemInOrder}
                />
            </div>

        );
    }
}

export default FastFoodBuilder;