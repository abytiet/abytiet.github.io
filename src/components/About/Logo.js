import React, { Component } from 'react';
import strawberry_cat from '../../image/strawberry_cat.JPG';
import './Logo.css';


class Logo extends Component {
    render() {
        return (
            <img alt="strawberry cat" src={strawberry_cat} className="img"></img>
        )
    }
}

export default Logo;