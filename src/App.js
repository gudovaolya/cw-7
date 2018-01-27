import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FastFoodBuilder from "./containers/FastFoodBuilder";

class App extends Component {
    render() {
        return (
            <div className="App">
                <FastFoodBuilder />
            </div>
        );
    }
}

export default App;
