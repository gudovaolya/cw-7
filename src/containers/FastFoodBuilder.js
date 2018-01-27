import React, { Component } from 'react';
import Assortment from "../components/Assortment/Assortment";

class FastFoodBuilder extends Component {
    state = {
        assortment: {
            hamburger: 2,
            cheeseburger: 1,
            coffee: 1,
            tea: 1,
            cola: 1,
            fries: 1
        }
    };

    prices = {
        hamburger: 80,
        cheeseburger: 90,
        coffee: 70,
        tea: 50,
        cola: 40,
        fries: 45
    };



    render () {
        return (
          <Assortment
            assortment = {this.state.assortment}
            prices = {this.prices}
          />
        );
    }
}

export default FastFoodBuilder;