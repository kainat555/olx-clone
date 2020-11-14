import React, { Component } from 'react';
import '../App.css';
import mob_img from '../components/images/mob_img.webp';



class Right_col extends Component {
    constructor() {
        super()
        this.state = {
            price: '10,000',
            image: mob_img,
            details: 'This is a dummy text.'
        }
    }

    render() {
        return (
            <div>
                <div className="right_col">
                    <div className='columns'>
                        <div className='column'>
                            <img className='mob_img' src={mob_img} alt="" />
                            <div className='details'>
                                <p className='price'>Rs. {this.state.price}</p>
                                <p>{this.state.details}</p>
                            </div>
                        </div>
                        <div className='column'>
                            <img className='mob_img' src={mob_img} alt="" />
                            <div className='details'>
                                <p className='price'>Rs. {this.state.price}</p>
                                <p>{this.state.details}</p>
                            </div>
                        </div>
                        <div className='column'>
                            <img className='mob_img' src={mob_img} alt="" />
                            <div className='details'>
                                <p className='price'>Rs. {this.state.price}</p>
                                <p>{this.state.details}</p>
                            </div>
                        </div>
                        {/* <div className='column'>
                            <img className='mob_img' src={mob_img} alt="" />
                            <div className='details'>
                                <p className='price'>Rs. {this.state.price}</p>
                                <p>{this.state.details}</p>
                            </div>
                        </div>
                        <div className='column'>
                            <img className='mob_img' src={mob_img} alt="" />
                            <div className='details'>
                                <p className='price'>Rs. {this.state.price}</p>
                                <p>{this.state.details}</p>
                            </div>
                        </div>
                        <div className='column'>
                            <img className='mob_img' src={mob_img} alt="" />
                            <div className='details'>
                                <p className='price'>Rs. {this.state.price}</p>
                                <p>{this.state.details}</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}


export default Right_col;