import React, { Component } from 'react';
import Logo from './Logo'
import './About.css'

class About extends Component {
    render() {
        return(
            <div className='about'>
                <div className='content'>
                    <h1> 👋 Hello! </h1>
                    <h2> I'm Aby Tiet. </h2>
                </div>
                <div className='logo'>
                    <Logo />
                </div>
            </div>
        )
    }
}

export default About;