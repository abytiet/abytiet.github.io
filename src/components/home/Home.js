import React, { Component } from 'react';
import Cat from './Cat'
import './Home.css'

class Home extends Component {
    render() {
        return(
            <div className='about'>
                <div className='content'>
                    <h1> Hi! </h1>
                    <h1> I'm Aby Tiet. </h1>
                </div>
                <div>
                    <Cat />
                </div>
            </div>
        )
    }
}

export default Home;