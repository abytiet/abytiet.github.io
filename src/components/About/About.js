import React, { Component } from 'react';
import Logo from './Logo'
import './About.css'

class About extends Component {
    render() {
        return(
            <div className='about'>
                <div className='content'>
                    <h1> Hi! </h1>
                    <h1> I'm Aby Tiet. </h1>
                </div>
                <div>
                    <Logo />
                </div>
            </div>
        )
    }
}

export default About;