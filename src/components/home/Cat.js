import React, { Component } from 'react';
import strawberry_cat from '../../images/strawberry_cat.jpg';
import strawberry_cat_remove from '../../images/strawberry_cat_remove.jpg';
import './Cat.css';


class Cat extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState( {clicked: !this.state.clicked})
    }

    render() {
        var imagesrc = this.state.clicked ? strawberry_cat_remove : strawberry_cat;
        return (
            <img alt="strawberry cat" src={imagesrc} className="img" onClick={this.handleClick}></img>
        )
    }
}

export default Cat;