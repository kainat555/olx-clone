import React, { Component } from 'react';
import '../../src/App.css';
import img from './images/laptop_img.jpg'


class Boxes extends Component {
    constructor() {
        super()
        this.state = {
            price: '10,000',
            image: img,
            details: 'This is a dummy text.'
        }
    }

render() {
        return (
            <div className='boxes'>
                <div className='box'>
                    <img className='laptop_img' src={img} alt="" />
                    <div className='details'>
                    <p className='price'>Rs. {this.state.price}</p>
                    <p>{this.state.details}</p>
                    </div>
                </div>
                <div className='box'>
                    <img className='laptop_img' src={img} alt="" />
                    <div className='details'>
                    <p className='price'>Rs. {this.state.price}</p>
                    <p>{this.state.details}</p>
                    </div>
                </div>
                <div className='box'>
                    <img className='laptop_img' src={img} alt="" />
                    <div className='details'>
                    <p className='price'>Rs. {this.state.price}</p>
                    <p>{this.state.details}</p>
                    </div>
                </div>
                <div className='box'>
                    <img className='laptop_img' src={img} alt="" />
                    <div className='details'>
                    <p className='price'>Rs. {this.state.price}</p>
                    <p>{this.state.details}</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default Boxes;