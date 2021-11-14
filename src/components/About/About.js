import React, { Component } from 'react';
import Logo from './Logo'
import './About.css'

class About extends Component {
    render() {
        return(
            <div className='About'>
                <Logo />
                <h1> 👋 Hello! </h1>
                <h2> I'm Aby Tiet. </h2>
            </div>
        )
    }
}

export default About;